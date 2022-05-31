const fs = require('fs/promises');




function writeAndRead(path,objeto){  
    let stringObjeto = JSON.stringify(objeto);
fs.writeFile(path, stringObjeto)
    .then(() => {
    return fs.readFile(path, "utf8",)
    })
    .then(objeto => {
        console.log(JSON.parse(objeto));
    })
    .catch(err => {
        console.log(err);
    });
}

// async function writeFileAsy(){
//     try{
//         await fs.writeFile("objetoR1.json", stringObjeto);
//         const escritura = await fs.readFile("objetoR1.json", "utf8",);
//         console.log(JSON.parse(escritura));
//     }
//     catch (err){
//         console.log(err);
//     }
// }

module.exports = {writeAndRead};