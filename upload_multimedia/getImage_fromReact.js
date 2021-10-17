const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const fs=require('fs');


const port = process.env.PORT || 4000;

app.listen(port, ()=>{console.log("Server Connected " + port)});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/tempp.html');
});

app.get('/img', (req, res)=>{
  res.send(JSON.stringify(__dirname + '/z.jpg'));
  res.end();
})

const imgstorage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  

const upload = multer({ storage : imgstorage});  

app.post('/upload/img', upload.single("user_img"), (req,res)=>{  
  res.send("Done") 
});  

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/upload/userinfo', (req,res)=>{
      
  const d={
      name:req.body.name,
      pass:req.body.password
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