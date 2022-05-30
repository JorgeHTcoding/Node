const readline = require('readline');
const fs = require('fs');
const { isAsyncFunction } = require('util/types');



function readConsole(callback) {

    let objeto = { name: " ", surname: " ", age: 0 };

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What is your name? ', (name) => {
        objeto.name = name;
        rl.question('What is your surname? ', (surname) => {
            objeto.surname = surname;
            rl.question('What is your age? ', (age) => {
                objeto.age = age;
                rl.close();

                fs.writeFile("objetoInput.json", JSON.stringify(objeto), (err) => {
                    if (err) console.log(err);
                    console.log("File written succesfully");
                    fs.readFile("objetoInput.json", "utf8", (err) => {
                        if (err) console.log(err);
                        else {
                            console.log(objeto)
                        }
                    })
                })
            });
        })
    });
}

module.exports = { readConsole };