const fs = require('fs');

const readStream = fs.createReadStream('./docs/text1.txt');
const writeStream = fs.createWriteStream('./docs/text2.txt');
const writeStream1 = fs.createWriteStream('./docs/text3.txt');

readStream.on('data', (chunk) => {
    console.log('---NEW CHUNK---');
    console.log(chunk);
    writeStream.write("\nNew Chunk\n");
    writeStream.write(chunk);

});

//piping
readStream.pipe(writeStream1);