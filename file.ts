// const data = 'Life is great.';
// await Bun.write('output.txt', data);

const file = await Bun.file('output.txt');
// console.log(await file.text());
console.log(await file.size);
// console.log(await file.stream());
// console.log(await file.arrayBuffer());

// console.log(file.size);