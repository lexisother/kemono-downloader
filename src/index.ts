import fetch from 'node-fetch';
import * as path from 'path';
import * as fs from 'fs/promises';
import { downloadFile } from './utils';

const baseURL = 'https://kemono.party';
const service = process.env.SERVICE!;
const user = process.env.USER!;
const posts = process.env.POSTS!.split(' ');

async function getPosts() {
  for (let post of posts) {
    let apiURL = `${baseURL}/api/${service}/user/${user}/post/${post}`;
    let res = (await (await fetch(apiURL)).json()) as unknown as KemonoResponse[];

    for (let attachment of Object.values(res[0].attachments)) {
      console.log(`Downloading from ${baseURL}${attachment.path}`);
      fs.mkdir(path.join(`images/${res[0].user}`), {
        recursive: true,
      });
      downloadFile(
        `${baseURL}${attachment.path}`,
        path.join(`images/${res[0].user}/${attachment.name}`),
      );
      console.log('Saved!');
    }
  }
}

getPosts();
