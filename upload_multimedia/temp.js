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
  // res.send("abc");
  
  res.writeHead(200, {
    'Content-Type': 'image/png, image/jpeg, image/jpg',
  });
  res.sendFile(__dirname + './z.jpg')
  res.end();
  
})

const imgstorage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './images/');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  

const upload = multer({ storage : imgstorage});  

app.post('/upload/img', upload.single("user_img"), (req,res)=>{  
  res.send(req.file) 
});  

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/upload/userinfo', (req,res)=>{
      
  const d={
      name:req.body.name,
      pass:req.body.password
  }
  // console.log(req.body.img)
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