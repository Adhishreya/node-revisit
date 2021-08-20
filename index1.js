const app = require('express')();
const products= require('./data');
const logger=require('./logger');
const authenticate =require('./authenticate');
//logger is the middleware
app.use(authenticate);//automatically uses the middleware for each path
app.get('/',logger,(req,res)=>{
    console.log('this is home');
    res.send('Home');
});
app.get('/about',logger,(req,res)=>{
    console.log('this is about');
    res.send('about')
})
app.listen(3002,()=>{console.log('listening')})