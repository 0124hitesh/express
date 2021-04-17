const express=require('express');
const path=require('path');

const app=express();

const port=process.env.PORT || 4000;
app.listen(port,()=>console.log("server connnected "+ port));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/login_form.html');
})

// app.get('/login_form.html',(req,res)=>{
//    if(req.query.username == "hitesh" && req.query.password == "1234"){
//        res.send("Logged In");
//    }
//    else{
//        res.send("Invalid Login");
//    }
// });


// ##### USING POST METHOD

// npm i body-parser
const body_parser=require('body-parser');

//middleware
//app.use(body_parser.urlencoded({extended:true})); body-parser required in earlier version of express
app.use(express.urlencoded({extended:true}));

//app.use(body_parser.json())
app.use(express.json())


app.post('/login_form.html',(req,res)=>{
    console.log(req.body);
    if(req.body.username == 'hitesh' && req.body.password == '1234'){
        res.send("Logged In");
    }
    else{
        res.send("Invalid Login");
    }
});

// Fallback Function
app.use(function(req,res){
    res.write("NOt AVailable......");
    res.end();
});