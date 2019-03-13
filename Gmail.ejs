const express=require('express');
const nodemailer = require('nodemailer');
const router=express.Router();
// Generate SMTP service account from ethereal.email

nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    }); 

    // Message object
    let message = {
        from: 'Sender Name <phoolan@mail.vinove.com',
        to: 'Recipient Name <sukhpal.singh@mail.vinove.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello Sukhpal!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
