import path, { basename } from 'path';

const pathname = path.join('maindir', 'subdir', 'file1.txt');
const filename = path.basename('file.txt');

console.log(filename);