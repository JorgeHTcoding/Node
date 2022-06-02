const http = require('http');

const server = http.createServer(function (request, response)
{
    console.log("Petición recibida del cliente");
    console.log("url: " + request.url + "\n" + "método: " + request.method);
    console.log("content type: " + request.headers['content-type'] + "\n" + "content length: " + request.headers['content-length'] + "\n" + "user agent: " + request.headers['user-agent']);
    response.writeHead(200, { 'Content-Type': 'application/json' });
        if (request.url == "/bye") {
            response.write(JSON.stringify({ ok: true, message: 'Adios!'}))
        } else {
            response.write(JSON.stringify({ ok: true, message: 'Recibido!'}))
        }
    response.end()
})

server.listen(3000);
