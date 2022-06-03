
let writeAndReadObject = require("./writeAndReadObject")
let readConsole = require("./readConsole")

let objeto = {name: "Jorge", surname: "Holgado", age: "29"};



// readConsole.leerConsola()
// .then(objeto => {
//     writeAndReadObject.writeAndRead("objetoR1",objeto)
// })
// .catch(err =>{
//     console.log(err)
// } )

async function final(){   
    try{ 
        let objeto = await  readConsole.leerConsola()
        await  writeAndReadObject.writeAndRead("objetoR1.json",objeto)
    }
    catch (err) {
        console.log("err")
    }

}
final()

// writeAndReadObject.writeAndRead("objetoR2",objeto);
