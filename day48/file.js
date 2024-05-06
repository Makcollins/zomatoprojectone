const fs = require('fs');

//File path
const filePath = 'mine.txt';

//Content to write on the file
const content = 'Hey, a test file created using Node.js fs module.';

//writing content to the file
fs.writeFile(filePath,content, (err)=>{
    if (err){
        console.error('Error writing to file', err);
        return;
    }
    console.log('File created successfully');
    //Reading content from the file
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if (err){
            console.error('Error reding file:', err);
            return;
        }
        console.log('File content:',data);
    });
});