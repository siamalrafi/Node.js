const fs = require('fs');

fs.readFile('fileName.txt',(err,data)=>{
    console.log(data.toString());
});

console.log('object');