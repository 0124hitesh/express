const express=require('express');
const path=require('path');

const app=express();

const port= process.env.PORT || 4000;

app.listen(port, ()=>{console.log("Server Connected "+port)});

const data=[
    {
        id:1,
        name:"abc"
    },
    {
        id:2,
        name:"xyz"
    }
];

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.get('/api/data',(req,res)=>{
    res.send(data);
});

app.get('/api/data/:id', (req,res)=>{
    const d=data.find((c)=>c.id === parseInt(req.params.id));
    if(!d){res.send("No data")}
    res.send(d);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post('/api/data',(req,res)=>{
    const d={
        id:data.length + 1,
        name:req.body.name
    };
    data.push(d);
    //res.send(d);
    res.send(data);
});