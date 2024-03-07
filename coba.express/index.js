const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res) =>{
    res.send(`Coba Express`)
});

app.post('/',(req,res) =>{
    res.send(`Post`)
});

app.put('/',(req,res) =>{
    res.send(`Update`)
});

app.delete('/',(req,res) =>{
    res.send(`Menghapus`)
});

app.listen(port,()=>(
    console.log(`server berjalan dengan localhost:${port}`)
))