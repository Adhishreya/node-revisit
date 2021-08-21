const express = require('express');
const router = express.Router();
router.post('/',(req,res)=>{
    const {name} = req.body;
    if(!name)
    {
        return res.send('enter the name');
    }
    res.sendStatus(200).send(`Welcome ${name}`);
});

module.exports = router;