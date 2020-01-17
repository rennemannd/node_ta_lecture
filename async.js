import * as fs from 'fs'

const getData = async () => {
    try {
        const data = await fs.readFileSync('example.txt');
        console.log(await data.toString());
    }
    catch (err) {
        console.log(err);
    }
};

getData();
console.log('Second');