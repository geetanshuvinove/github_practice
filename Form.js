const express = require('express');
const app = express();
const path = require('path');
app.set("view engine", "ejs");

var fs = require('fs');

const bodyParser = require('body-parser');
const upload=require('./multer');


app.use(bodyParser());
app.use(upload)

const use = path.join(__dirname, 'pack.json')
var urlcodedParser = bodyParser.urlencoded({ extended: true })

app.get('/', (req, res) => {
    res.render('Email.ejs');
});

function read(cb) {

    fs.readFile(use, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

function save(user, cb) {
    read(users => {
        users.push(user);
        fs.writeFileSync(use, JSON.stringify(users), cb(users))

    })
 }     
   

app.post('/login', function (req, res,next) {
    console.log('inside')
    const user = {
        id: Date.now(),
      Username:req.body.Username,
     Fathername:req.body.Fathername,
     
    Email:req.body.Email,
     Password:req.body.Password,
        confirmedPassword:req.body.confirmedPassword
    
    };
    console.log(user)
    save(user, users => {
        console.log('Submitted Successfully')
    })
    fs.readFile('pack.json','utf8',(err,data)=>{
        if(err){
            throw err;
        }
        const d=JSON.parse(data)
        console.log(d);
      res.render('edit',{
          detail:user
      })
         
          
        })
    })
    app.post('/detail',(req,res)=>{
        res.render('Detail')
    })
    
    

    app.post('/Log/:userid',(req,res,next)=>{
        const userid = req.params.userid;
       console.log(userid);
       const name = {
        id: Date.now(),
      Username:req.body.Username,
     Fathername:req.body.Fathername,
     
    Email:req.body.Email,
     Password:req.body.Password,
        
    
    };

    console.log(name)
    save(name, users => {
        console.log('edit Successfully')
    })
   fs.readFile("pack.json",'utf8',function(err,data){
    
            if(err){
                throw err;
            }
                const d = JSON.parse(data);
               // const users = d.find((el)=>{
                    console.log(d)    //return el.id ==userid
                })
               res.render('route',{
                   user:name
             
    
               })
        })
    
    app.post('/Neetu',(req,res)=>{
  res.render('Login');
    })      
  
    
        app.post('/users',function(req,res){
            fs.readFile(__dirname+'/'+"pack.json",function(err,data){
                const User= JSON.parse(data);
                console.log(User);
            
        res.render('user',{
            users:User
        })
    })
    })


   app.post('/delete/:userid',(req, res, next) => {
        console.log("inside delete router")
        const id = req.body.id;
        console.log(id);

        read(users => {
                  
                data = users.filter(u => {
                return u.id.toString() !== id
                })
                fs.writeFile(use, JSON.stringify(data));
                res.redirect('/free');
            
         })
    })

    
   app.listen(8000)
  
