const readline = require('readline');
const fs = require('fs/promises');
const { isAsyncFunction } = require('util/types');
const { read } = require('fs');


let objeto = { name: " ", surname: " ", age: 0 };

function readConsole(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close()
        })
    });
    return question
}

// readConsole('What is your name? ').then(name => {
//     objeto.name = name;
//     readConsole('What is your surname? ').then(surname => {
//         objeto.surname = surname;
//         readConsole('What is your age? ').then(age => {
//             objeto.age = age;

//             let stringObjeto = JSON.stringify(objeto);

//             fs.writeFile("objetoR1.json", stringObjeto)
//                 .then(() => {
//                 return fs.readFile("objetoR1.json", "utf8",)
//                 })
//                 .then(objeto => {
//                     console.log(JSON.parse(objeto));
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         })
//     })
// })

async function readConsoleAsy() {
    try {
        let name = await readConsole('What is your name? ');
        objeto.name = name;
        let surname = await readConsole('What is your surname? ');
        objeto.surname = surname;
        let age = await readConsole('What is your age? ');
        objeto.age = age;

        let stringObjeto =  JSON.stringify(objeto);

        await fs.writeFile("objetoR1.json", stringObjeto);
        const escritura = await fs.readFile("objetoR1.json", "utf8",);
        console.log(JSON.parse(escritura));
    }

    catch (err) {
        console.log("err")
    }
}


readConsoleAsy()





