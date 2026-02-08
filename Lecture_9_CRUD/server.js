import express from "express";

const app = express()

// C = Create --> POST (method)
// R = Read --> GET (method)
// U = Update --> PUT (method)
// D = Delete --> DELETE (method)

app.get('/shashi',(req,res)=>{
  res.send("this is routing")
})
const port = 2000

app.listen(port,()=>console.log(`server running on port : ${port}`))