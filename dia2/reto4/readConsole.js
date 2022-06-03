const readline = require('readline');
const fs = require('fs/promises');
const { isAsyncFunction } = require('util/types');
const { read } = require('fs');
const { resolve } = require('path');




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

// function leerConsola() {    
//     const consoleReading = new Promise((resolve, reject) => {    
//     let objeto2 = { name: " ", surname: " ", age: 0 };
//         readConsole('What is your name? ')
//         .then(name => {
//             objeto2.name = name;
//             return readConsole('What is your surname? ')
//         })
//         .then(surname => {
//             objeto2.surname = surname;
//             return readConsole('What is your age? ')
//         })
//         .then(age => {
//             objeto2.age = age;
//             resolve(objeto2);
//         })        
//         .catch(err => {
//             reject(err)           
//         })         
//     } 
//     )    
//     return consoleReading
// }
 

                    async function leerConsola() {
                        let objeto = { name: " ", surname: " ", age: 0 };
                        try {                                                    
                            let name = await readConsole('What is your name? ');
                            objeto.name = name;
                            let surname = await readConsole('What is your surname? ');
                            objeto.surname = surname;
                            let age = await readConsole('What is your age? ');
                            objeto.age = age;                                                        
                        }

                        catch (err) {
                            console.log("err")
                        }
                        return objeto;
                    }

                    module.exports = { leerConsola };