const fs = require('fs/promises');


let objeto = { name: "Manoli", surname: "Rodriguez", age: 89 };

let stringObjeto = JSON.stringify(objeto);

// fs.writeFile("objetoR1.json", stringObjeto)
//     .then(() => {
//     return fs.readFile("objetoR1.json", "utf8",)
//     })
//     .then(objeto => {
//         console.log(JSON.parse(objeto));
//     })
//     .catch(err => {
//         console.log(err);
//     });


async function writeFileAsy(){
    try{
        await fs.writeFile("objetoR1.json", stringObjeto);
        const escritura = await fs.readFile("objetoR1.json", "utf8",);
        console.log(JSON.parse(escritura));
    }
    catch (err){
        console.log(err);
    }
}

writeFileAsy(objeto);

