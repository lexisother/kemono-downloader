import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';

// <https://stackoverflow.com/a/53939575>
export async function downloadFile(url: string, outputPath: string) {
  return fetch(url)
    .then((x) => x.arrayBuffer())
    .then((x) => writeFile(outputPath, Buffer.from(x)));
}
