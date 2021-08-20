const app = require('express')();
const products= require('./data');
app.get('/',(req,res)=>{
    // res.json([{name:'harry'},{name:'ron'}]);
    res.send('<h1>Home</h1><a href="/api/products">Products</a>');
});

app.get('/api/products',(req,res)=>
{
    const newProducts = products.map(prod=>{
            const {id,name,image} = prod;
            return {id,name,image};
    });

    res.json(newProducts)

});


// app.get('/api/products/1',(req,res)=>
// {
//     const newProducts = products.find((prod)=>prod.id==1);

//     res.json(newProducts)

// });

//query parameters....placeholders
app.get('/api/products/:productID',(req,res)=>
{   
    const parameter=req.params.productID;
    const newProducts = products.find((prod)=>prod.id===parameter);
    console.log(parameter)
    if(!newProducts)
    {
        return res.sendStatus(404).send('Product does not exist');
    }
   return res.json(newProducts)

});
//complex route params
app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    console.log(req.params);
    res.sendStatus('200');
});

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    res.send('Success')
});

app.get('/api/v2/query',(req,res)=>{
    const {search,limit}=req.query;
    let newProducts = [...products];
    if(search)
    {
        newProducts = newProducts.filter((prod)=>
    {
        return prod.name.startsWith(search);
    });
    }

    if(limit)
    {
            newProducts = newProducts.slice(0,Number(limit));
            
    }

    if(newProducts.length<1)
    {
        return res.status(200).json({success:true,data:[]})
    }

    res.status(200).json(newProducts);
    res.send('hello world')
})


app.listen(3002,()=>{console.log('listening')})