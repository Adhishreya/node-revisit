const express = require('express');
const app = express();
const person =[{'name':"harry","id":1},{'name':"snape","id":2},{'name':"luna","id":3}];

app.get('/person',(req,res)=>{
    res.status(200).json({success:true,data:[...person]})
});


app.use(express.urlencoded({extended:false}));
app.use(express.json());//to handle incomming json data
app.delete('/person/:id',(req,res)=>{
    const {id }     = req.params;
    const newPersonList = person.filter((per)=>
    {
     return per.id !== Number(id);
    })
    // console.log(req.params.id);
    // res.send('success')
    res.status(200).json({success:true,data:[...newPersonList]})
});

app.post('/person',(req,res)=>{
    const {id,name}     = req.body;
    const existName = person.find((per)=>{
        return per.name === name;
    });
    const existID = person.find((per)=>{
        return per.id == Number(id);
    });
    // console.log(existName)
    if(existName || existID)
    {
       return res.sendStatus(409);
    //    .send('The name/id already exists');
    }
    // res.send('success')
    person.push({id,name});
    res.status(200).json({success:true,data:[...person]});
});

app.put('/person/:id',(req,res)=>{
    const {name}     = req.body;
    const {id}  = req.params;
    const existID = person.find((per)=>{
        return per.id == Number(id);
    });
    if(! existID)
    {
       return res.sendStatus(404);
    }

    const newPerson = person.map((per)=>{
        if(per.id === Number(id))
        {
            return {id,name};
        }        
        return per;
    })
    res.status(200).json({success:true,data:[...newPerson]});
});

app.listen(3002,()=>{console.log('listening')})