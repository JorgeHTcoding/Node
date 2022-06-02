const express = require('express')
const app = express()

app.get('/', function(req,res){
console.log("Petición recibida del cliente");
console.log("url: " + req.url + "\n" + "método: " + req.method + "\n" + "user agent: " + req.headers['user-agent']);
res.writeHead(200, { 'Content-Type': 'application/json' });
res.write(JSON.stringify({ ok: true, message: 'Recibido!'}))
res.end()
})

app.get('/bye', function(req,res){
    console.log("Petición recibida del cliente");
    console.log("url: " + req.url + "\n" + "método: " + req.method + "\n" + "user agent: " + req.headers['user-agent']);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ ok: true, message: 'Adios!'}))
    res.end()
    })

app.listen(3000);
