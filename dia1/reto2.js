const fs = require('fs');

let objeto = { name: "Manoli", surname: "Rodriguez", age: 89 };
let stringObjeto = JSON.stringify(objeto);


fs.writeFile("objeto.json", stringObjeto, (err) => {
    if (err) console.log(err);  
    else{  
        console.log("File written succesfully")}
     fs.readFile("objeto.json","utf8", (err) => {
        if(err) console.log(err);
        else {
            console.log(objeto)
        }
    })
})
