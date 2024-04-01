//console.log(global);

setTimeout(() => {
    console.log("good bye noob");
    clearInterval(int);
}, 5000);

const int = setInterval(() => {
    console.log("hi hi hi")
}, 500);

console.log(__dirname);
console.log(__filename);