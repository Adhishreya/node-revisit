const express = require('express');
const router = express.Router();
const person =[{'name':"harry","id":1},{'name':"snape","id":2},{'name':"luna","id":3}];

//just a single forward slash is used since a base path is already set for the router 
router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:[...person]})
});

router.delete('/:id',(req,res)=>{
    const {id }     = req.params;
    const newPersonList = person.filter((per)=>
    {
     return per.id !== Number(id);
    })
    res.status(200).json({success:true,data:[...newPersonList]})
});

router.post('/',(req,res)=>{
    const {id,name}     = req.body;
    const existName = person.find((per)=>{
        return per.name === name;
    });
    const existID = person.find((per)=>{
        return per.id == Number(id);
    });
    if(existName || existID)
    {
       return res.sendStatus(409);
    }
    person.push({id,name});
    res.status(200).json({success:true,data:[...person]});
});
router.put('/:id',(req,res)=>{
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
module.exports = router