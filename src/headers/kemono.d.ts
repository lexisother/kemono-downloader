interface KemonoResponse {
  added: string;
  attachments: Attachment[];
  content: string;
  edited: string;
  file: Attachment;
  id: string;
  published: string;
  service: string;
  shared_file: boolean;
  title: string;
  user: string;
}

interface Attachment {
  name: string;
  path: string;
}
