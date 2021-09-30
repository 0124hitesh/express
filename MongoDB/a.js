const mongoose=require("mongoose");

//connection with mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/expesss_databse',{useNewUrlParser: true,useUnifiedTopology:true, useFindAndModify: false}).
    then(()=>console.log("Connectedd")).catch(()=>{console.log("Error")});

const schema1=new mongoose.Schema({
    name:{type:String, require:[true,"Name field must be required"] },
    course:String,
    date:{type:Date, default:Date.now},
    reg:Boolean,
    duration:Number
});

const db=new mongoose.model("new_collection",schema1);
const db1=new db({
    name:"Hotesh",
    course:"kj&^*3h3kj",
    reg:true,
    duration:45
})

const db2=new db({
    name:"YOgesh",
    course:"bhakk",
    reg:false,
    duration:455
})

// db.find({}).then((doc)=>console.log(doc));
// db.findByIdAndUpdate('6025003559c3f7526487b37d',{name:"Yogesh"}).then((doc)=>console.log(doc)).catch((err)=>console.log(err));

const express=require('express');
const app=express();

const port =process.env.PORT || 4000;
app.listen(port,()=>{console.log("server connected "+ port)})

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// app.get('/',(req,res)=>{
    
//     db.find({}, function(err, result){
//         if(err) console.log(err);
//         // console.log(JSON.stringify(result[0]));

//         const prop = Object.getOwnPropertyNames(result);
//         for(let i =0; i<prop.length; ++i){
//             res.write(JSON.stringify(result[0].name + " " + result[0].course));
//         }

//         res.end();
//     });}
// )

app.get('/',(req,res)=>{
    
    db.find({}, function(err, result){
        if(err) console.log(err);
        // console.log(JSON.stringify(result[0]));

        const prop = Object.getOwnPropertyNames(result);
        res.send(JSON.stringify(prop.length));
        res.end();
    });}
)

app.get('/:i', (req, res)=>{
    var count = parseInt(req.params.i);
    db.find({}, function(err, result){
        if(err) console.log(err);
            // console.log(JSON.stringify(result[0]));
        
        const prop = Object.getOwnPropertyNames(result);
        res.write(JSON.stringify(result[count].name + " " + result[count].course));
        console.log("abc");
        res.end();
    });
})

app.put('/put/:name',async (req, res)=> {
    const na = req.params.name;
    const d = db.find({name : na});
    if(d){
        console.log("aaaaaaaaaaaaaaaa");
        await db.updateMany(
            {name: na},
            {$set:{name:"Hitesh Sharma"}}).
            then((d)=>console.log(d));
    }
    res.send("Updated");
})

console.log("end")
