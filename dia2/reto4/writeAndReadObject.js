const fs = require('fs/promises');




// function writeAndRead(path, objeto) {
//     const writingAndReading = new Promise((resolve, reject) => {
//         let boo = true;
//         if (boo) {
//             let stringObjeto = JSON.stringify(objeto);
//             let result = fs.writeFile(path, stringObjeto)
//                 .then(() => {
//                     return fs.readFile(path, "utf8",)
//                 })
//                 .then(objeto => {
//                     console.log(JSON.parse(objeto));
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//             resolve(result)
//         }else{
//             let err = console.log("err")
//             reject(err)
//         } 
//         return writingAndReading
//         }
//     )}
    


        async function writeAndRead(path,objeto){            
            try{
                await fs.writeFile(path,JSON.stringify(objeto));
                const escritura = await fs.readFile(path, "utf8",);
                console.log(JSON.parse(escritura));
            }
            catch (err){
                console.log(err);
            }
        }
  
        module.exports = { writeAndRead };