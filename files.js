const fs = require('fs');
//reading files
// fs.readFile('./docs/text0.txt', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("It ain't block");


//writing files
// fs.writeFile('./docs/text0.txt', 'perubahan kata', () => {
//     console.log('changed');
// });

// fs.writeFile('./docs/iseng.py', "print('hello world')", () => {
//     console.log('changed 1');
// });

//directories

// if (!fs.existsSync('./keren')){
//     fs.mkdir('./keren', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('new dir created');
//     });
// }
// else{
//     fs.rmdir('./keren', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

//deleting files
if (fs.existsSync('./docs/iseng.py')){
    fs.unlink('./docs/iseng.py', (err) => {
        if (err){
            console.log('error');
        }
        console.log("file terhapus");
    })
}