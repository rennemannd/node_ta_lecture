import * as fs from 'fs'

fs.readFile('example.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('Second');

/*
function printToConsole(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}
*/
