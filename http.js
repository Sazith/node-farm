const http = require('http');


//////////// SERVER
const server =  http.createServer((req, res) =>{
  res.end('Hello Form the server ')
})

server.listen(8000, '127.0.0.1', ()=>{
  console.log('Listening to request o port 8000');
  
})
