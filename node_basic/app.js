const items=require('./demo2')
console.log(__dirname);//returns the directory name in which the file is in
const {category,label,price} = items;
console.log(category);
setInterval(()=>{
    console.log("This line gets printed after every set time interval")
},1000);
