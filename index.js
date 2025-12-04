import express from 'express'

const server = express()

const port = 3002

server.get('/', (req, res)=>{
    res.send("Hello from VM")
    res.status(200)
})

server.listen(port, ()=>{
    console.log('Hello from VM server');
})