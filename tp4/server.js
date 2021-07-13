var fs = require('fs');
// fs.readFile('data/testFile.txt', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });
// fs.writeFile('data/test.txt', '\nAnother Hello World!',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('Append operation complete. ');
// });
// fs.open('data/testFile.txt', 'r',(err,fd)=>{
//     if(err){
//   return   console.error(err);}
//     var buffr = new Buffer.alloc(1024);
//     fs.read(fd, buffr,0,buffr.length,0,(err,bytes)=>{
//         if(err) throw err;
//         //Print only read bytes to avoid junk
//         if(bytes> 0){
//             console.log(buffr.slice(0,bytes).toString());

//         }
//         //Close the opened file
//         fs.close(fd,(err) =>{
//             if(err) throw err;
//         });
//     });
    
// });
fs.unlink('data/test.txt',()=>{
    console.log('write operation complete.');
})