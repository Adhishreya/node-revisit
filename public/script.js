// import 'os';
window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceWorker.js');
    }
  }

const arr=["https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1505168125389-77678147a9d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80",
"https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1614273977652-7f7dbab983fb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzN3xiRG80OGNVaHduWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          "https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          "https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          "https://images.unsplash.com/photo-1544867885-2333f61544ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHBhaW50aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          "https://images.unsplash.com/photo-1562576650-27130b06c0ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBhaW50aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          ,
          "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG90dGVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"];

const slid=["https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNyYWZ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1614273977652-7f7dbab983fb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzN3xiRG80OGNVaHduWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"];
const container=document.getElementsByClassName('container')[0];
var ret=arr.forEach((val,i)=>{
var img=document.createElement('img');
img.id="img"+i.toString();
img.src=val;
img.className="lists"
var capt=document.createElement('h6');
capt.innerText="IMAGE"+i.toString();
var cards=document.createElement('div');
var btns=document.createElement('button');
btns.innerText="Order";
btns.addEventListener('click',()=>{
    
});
cards.className="card";
cards.appendChild(img);
cards.appendChild(capt);
cards.appendChild(btns);

container.appendChild(cards)

});

var slide=document.getElementById('slide');
var left=document.getElementById('left');
var right=document.getElementById('right');

var len=slid.length;
var index=0,cur_ind=0;
var img2=document.createElement('img');
// img2.id="img"+i.toString();
img2.className="si";
// var ret=slid.forEach((val,i)=>{
// var img=document.createElement('img');
// img.id="img"+i.toString();

// // img.className="si";
// slide.appendChild(img)
// });

img2.src=slid[0].toString();
slide.appendChild(img2);
// img2.src=slid[1].toString();
left.addEventListener('click',()=>{
    cur_ind--;
    if(cur_ind>=0)
    {
    img2.src=slid[cur_ind%len];
    }
    
})
right.addEventListener('click',()=>{
    cur_ind++;
    if(cur_ind<len)
    {  
        
        img2.src=slid[cur_ind%len].toString();
        
    }
    
})


// while()

var check=document.getElementById('check');
check.addEventListener('change',(e)=>{
    var res=e.target.checked;
    if(res)
    document.documentElement.setAttribute('data-theme','dark');
    else
    document.documentElement.setAttribute('data-theme','light');
})