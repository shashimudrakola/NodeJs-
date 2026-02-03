import http from 'http'

const server = http.createServer((req,res)=>{
  if(req.url === "/shashi") res.end("shashi")
  else res.end("invalid input")
})

const port = 1000

server.listen(port,()=>{console.log(`server is running on port ${port}`)})