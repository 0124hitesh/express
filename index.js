const express=require('express');
const app=express();
// app.listen(3000) 3000-port number randomly

// Provide suitable port if available otherwise 4000
const Port=process.env.PORT || 4000;
app.listen(Port,()=>{console.log("server connected")})

// app.method(<route>, callback)  methods- get, post, delete, push
//app.get('/',(req,res));
app.get('/',(req,res)=>{res.send('hello')});

//node index.js
//nodemon index.js -- not required to refresh
//package.json ->  script ->  start:"nodemon index.js"