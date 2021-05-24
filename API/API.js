const express=require('express');
const path=require('path');
const joi=require('@hapi/joi');

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


// display individual record
app.get('/api/data/:id', (req,res)=>{
    const d=data.find((c)=>c.id === parseInt(req.params.id));
    if(!d){res.send("No data")}
    res.send(d);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// API for handling POST request and create new record
app.post('/api/data',(req,res)=>{
    // const schema=joi.object({
    //     name : joi.string().min(3).required()
    // });
    // const result=schema.validate(req.body);
    // if(result.error){
    //     res.status(400).send(result.error.message);
    //     return;
    // }
    const d={
        id:data.length + 1,
        name:req.body.name
    };
    data.push(d);
    //res.send(d);
    res.send(data);
});

// for handling PUT request and update
// '@hapi/joi -npm'  --  to apply validation
app.put('/api/data/:id',(req,res)=>{
    const d=data.find((c)=>c.id === parseInt(req.params.id));
    if(!d)
        return res.status(400).send("no course");

    // Validate body data
    const schema=joi.object({
        name : joi.string().min(3).required()
    });
    const result=schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.message);
        return;
    }

    d.name=req.body.name;
    res.send("Data Updated");
});

// API for delete request
app.delete('/api/data/:id', (req,res)=>{
    const d=data.find((c)=>c.id === parseInt(req.params.id));
    if(!d)
        return res.status(400).send("no course");

    // Delete with index
    const index=data.indexOf(d);
    data.splice(index, 1);

    res.send("data deleted");
    //res.send(data);
});

