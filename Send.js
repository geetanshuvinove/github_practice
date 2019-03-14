
const express=require('express');
const router=express.Router();
const nodemailer = require('nodemailer')
//app.set('view engine','ejs')


router.get('/mail',function(req,res){
    res.render('Send',{
        msg:"Details are deleted successfully"

    })

 
});

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'phoolandagar378@gmail.com',
        pass: 'krishanjyoti123'
    }
});

const mailOptions = {
    from: '"Our Code World " <phoolandagar378@gmail.com>', 
    to: 'Varun.rajaurya@mail.vinove.com',
    subject: 'Hello', 
    text: ' how are you ', 
    html: '<b>What are you doing these days mr Varun rajaurya </b><br> This is the first email sent with Nodemailer in Node.js' 
};

// send mail with defined transport object
router.post('/send',function(req,res){

 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message Sent Succefully: ' + info.response);
    res.redirect('/free');
})
});

module.exports=router;
