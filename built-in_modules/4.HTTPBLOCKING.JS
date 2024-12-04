const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello world. This is Homepage')
  } else if (req.url === '/about'){
    //BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            console.log(`${i} ${j}`);
            
        }
    }
    res.end('Hello people, this is aboutpage')
  } else {
    res.end(`<h1>Oops</h1>
        <p>404 error: Page not found</p>
        `)
  }
})

server.listen(5000, () => {
    console.log("Server is up, listening at port: 5000.")
})