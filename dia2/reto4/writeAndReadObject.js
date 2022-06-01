const fs = require('fs/promises');




function writeAndRead(path, objeto) {
    const writingAndReading = new Promise((resolve, reject) => {
        let boo = true;
        if (boo) {
            let stringObjeto = JSON.stringify(objeto);
            let result = fs.writeFile(path, stringObjeto)
                .then(() => {
                    return fs.readFile(path, "utf8",)
                })
                .then(objeto => {
                    console.log(JSON.parse(objeto));
                })
                .catch(err => {
                    console.log(err);
                });
            resolve(result)
        }else{
            let err = console.log("err")
            reject(err)
        } 
        return writingAndReading
        }
    )}
    


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
    writeAndRead("objetoWARO",objeto)
        module.exports = { writeAndRead };