const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.end("Welcome to my homepage")
    } else if ( req.url == '/about') {
        res.end("We are dedicated to teach you all you need to know about node.js")
    } else if (req.url == '/contact') {
        res.end("You can reach us through the the following address")

    } else {
        res.end(`<h1>Ooops</h1>
            <p>The page you are looking for cannot be found</p>
            <a href="/">Go back to homepage</a>
        `)
    }
})

server.listen(5000, () => {
    console.log("Server is up listening at port 50000!!!")
})