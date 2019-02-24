const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(userRouter.router);
app.use((req, res, next)=>{
    res.send('<h1>page not found</h1>');
})  
app.listen(3000);
