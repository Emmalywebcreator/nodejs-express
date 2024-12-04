const { readFile,  writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
        console.log(err);
        return
    }
    const second = result;
    writeFile('./content/read-async.txt', 
        `Hello I an here writing asynchronous callback function ${first} ${second}`,
        (err, result) => {
        if (err){
        console.log(err);
    
        }
        console.log(result);
        
        console.log("File wwritten succefully")
    })
    })
})