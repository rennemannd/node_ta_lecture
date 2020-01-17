import * as fs from 'fs'

const getData = new Promise(function(resolve, reject) {
    fs.readFile('example.txt', function(err, data) {
        resolve(data);
        reject(err);
    });
});

getData.then(function(data) {
    console.log(data.toString());
});

console.log(getData);
console.log('Second');