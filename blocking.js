import * as fs from 'fs'

let data = fs.readFileSync('example.txt');

console.log(data.toString());
console.log('Second');