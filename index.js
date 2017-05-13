const http = require("http")

const curlify = require('./curlify')



const server = http.createServer((req, res, next) => {
    console.log(curlify(req))

    res.end(JSON.stringify({status: "ok"}))
})

server.listen(7777, () => console.log("7777"));