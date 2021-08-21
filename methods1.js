const express = require('express');
const app = express();

app.use(express.static('./public-method'))

app.get('/',(req,res)=>{
    res.send('home');
});


app.use(express.urlencoded({extended:false}));
app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name)
    {
        return res.status(200).send(`welcome ${name}`);
    }
     res.send('PLease enter name')
});

app.listen(3002,()=>{console.log('listening')})