
const express=require('express');
const multer=require('multer');
const path=require("path");

// set storage engine
 const storage=multer.diskStorage({
   destination:'./public/uploads/',
   filename:function(req,file,cb){
     cb(null,file.fieldname+""+Date.now()+path.extname(file.originalname));
   }
 });
//intit upload
 const upload=multer({
   storage:storage,
    }).single('myImage');

const router=express.Router();




  router.use(express.static('./public'));


  router.get("/free" ,(req,res)=>{
    res.render('index')
          
    
    

    
    })
     router.post('/upload',function(req,res){
         upload(req,res,(err)=>{
         if(err){
           res.render('index',{
              
            msg:err
           
          });
       
                  }                
                  
                  else {
                     
                      if(req.file == undefined) {
                          res.render('index', {
                            Result: "User Login Successfully",
                              msg: 'Error: Please upload a File.'
                          });
          
                      } else {
                          console.log(req.file);
                          res.send('File upload Successfully');
                      }  
                        
                      }
                    });
              });
          
module.exports=router;

