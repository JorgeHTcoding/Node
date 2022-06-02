
let writeAndReadObject = require("./writeAndReadObject")
let readConsole = require("./readConsole")

let objeto = {name: "Jorge", surname: "Holgado", age: "29"};



readConsole.leerConsola()
.then(objeto => {
    writeAndReadObject.writeAndRead("objetoR1",objeto)
})
.catch(err =>{
    console.log(err)
} )

// writeAndReadObject.writeAndRead("objetoR2",objeto);
