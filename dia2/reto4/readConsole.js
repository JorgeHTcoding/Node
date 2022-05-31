const readline = require('readline');
const fs = require('fs/promises');
const { isAsyncFunction } = require('util/types');
const { read } = require('fs');


let objeto2 = { name: " ", surname: " ", age: 0 };

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

function leerConsola(){
readConsole('What is your name? ').then(name => {
    objeto2.name = name;
    readConsole('What is your surname? ').then(surname => {
        objeto2.surname = surname;
        readConsole('What is your age? ').then(age => {
            objeto2.age = age;

            let stringObjeto = JSON.stringify(objeto2);

            fs.writeFile("objetoRC.json", stringObjeto)
                .then(() => {
                return fs.readFile("objetoRC.json", "utf8",)
                })
                .then(objeto2 => {
                    console.log(JSON.parse(objeto2));
                })
                .catch(err => {
                    console.log(err);
                });
        })
    })
})
}

// async function readConsoleAsy() {
//     try {
//         let name = await readConsole('What is your name? ');
//         objeto2.name = name;
//         let surname = await readConsole('What is your surname? ');
//         objeto2.surname = surname;
//         let age = await readConsole('What is your age? ');
//         objeto2.age = age;

//         let stringObjeto =  JSON.stringify(objeto2);

//         await fs.writeFile("objetoRC.json", stringObjeto);
//         const escritura = await fs.readFile("objetoRC.json", "utf8",);
//         console.log(JSON.parse(escritura));
//     }

//     catch (err) {
//         console.log("err")
//     }
// }

module.exports = { leerConsola };