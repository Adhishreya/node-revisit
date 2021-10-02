const express = require('express');
const app = express();
const people = require('./routers/people');
const auths = require('./routers/auth');

app.use(express.static('./public-method'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());//to handle incomming json data

app.use('/person',people);
app.use('/login',auths);//base route specified

app.listen(5000,()=>{console.log(`listening ${process.env.PORT}`)})