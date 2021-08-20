const express = require('express');
const app =express();
const path=require('path');
// console.log(path.resolve(path.(__dirname)));

app.use(express.static('./front-end'));
//rendering all the static content

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./font-end/index.html'))
})

app.get('*',(req,res)=>{
    res.sendStatus(404).send("Resource not found")
})
app.listen(3002,()=>{console.log("listening")})