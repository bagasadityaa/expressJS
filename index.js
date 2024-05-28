const express = require('express')
const app = express()
const port = 3000

// route utama 
app.get('/', (req, res)=>{
    res.send('Hello World YUtama')
})
app.get('/heloo', (req, res)=>{
    res.send('Hello World')
})
app.post('/login',(req,res)=>{
    if(req.name === "bagas"){
        res.send('login berhasil')
    }
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})