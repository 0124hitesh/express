const express=require('express');
const path=require('path');

const port=process.nextTick.PORT || 4000;
const app=express();
app.listen(port,()=>{console.log("Server Connected "+port)});

const fs=require('fs');

// const d={
//     name:"Shiv",
//     pass:"456"
// };

// fs.readFile('./temp_data.json',(err,data)=>{
//     //temp=JSON.parse(data.toString('utf8'));
//     var temp=JSON.parse(data);
//     temp.push(d);
//    console.log(temp);

//     fs.writeFileSync('./temp_data.json',JSON.stringify(temp),(err)=>{
//         if(err)console.log(err);
//         console.log(temp);
//         return;
//     }); 
// });

app.get('/',(req,res)=>{
    fs.readFile('./temp_data.json',(e,data)=>{
        const d=JSON.stringify(data);
        res.send(JSON.stringify(data));
    })
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post('/',(req,res)=>{
    const d={
        name:req.body.name,
        pass:req.body.pass
    }
    res.send(d);
    fs.readFile('./temp_data.json',(err,data)=>{
        //temp=JSON.parse(data.toString('utf8'));
        var temp=JSON.parse(data);
        temp.push(d);
       //console.log(temp);
    
        fs.writeFileSync('./temp_data.json',JSON.stringify(temp),(err)=>{
            if(err)console.log(err);
            console.log(temp);
            return;
        }); 
    });

})




