let writeAndReadObject = require("./writeAndReadObject")
let readConsole = require("./readConsole")
let objeto = {name: "Jorge", surname: "Holgado", age: "29"};

// writeAndReadObject.writeAndRead(objeto);
readConsole.readConsole(function(objeto){
    writeAndReadObject.writeAndRead("objeto.json",objeto)
});