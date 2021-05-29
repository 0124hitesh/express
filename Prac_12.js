const express=require('express');
const app=express();

const port =process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const data=[
    {
        rollno:1,
        name:"HItesh",
        course:"xyz"
    }
];

// create 
app.post('/',(req,res)=>{
    const d={
        rollno:data.length+1,
        name:req.body.name,
        course:req.body.course
    }
    data.push(d);
    res.send(d);
})

// read
app.get('/',(req,res)=>{
    res.send(data);
})

// update
app.put('/:rollno',(req,res)=>{
    const d=data.find((c)=> c.rollno === parseInt(req.params.rollno));
    if(!d){ res.send("No such data available"); return}
    d.name=req.body.name;
    d.course=req.body.course;
    res.send("Updated")
});

// delete
app.delete('/:rollno',(req,res)=>{
    const d=data.find((c)=> c.rollno === parseInt(req.params.rollno));
    if(!d){ return res.status(400).send("No such data available")}
    const index=data.indexOf(d);
    data.splice(index,1);
    res.send("Deleted");
});