const express = require('express');
const app = express();

const nav=[
    
        {link:'/home',name:'Home'},
        {link:'/aboutus',name:'About Us'},
        {link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},
        {link:'/contactus',name:'Contact Us'},
        // {link:'/login',name:'Log In'},
        // {link:'/signup',name:'Sign Up'}
    
];

const btn=[
        {link:'/login',name:'Log In'},
        {link:'/signup',name:'Sign Up'}
];

const logout=[
        {link:'/',name:'Logout'}
];


const homeRouter = require('./src/routes/homeroutes')(btn)
const aboutusRouter = require('./src/routes/aboutusroutes')(nav,logout)
const booksRouter = require('./src/routes/bookroutes')(nav,logout)
const authorsRouter = require('./src/routes/authorroutes')(nav,logout)
const contactusRouter = require('./src/routes/contactusroutes')(nav,logout)
const loginRouter = require('./src/routes/loginroutes')(nav,logout)
const signupRouter = require('./src/routes/signuproutes')(nav,logout)


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');


app.use('/home',homeRouter);
app.use('/aboutus',aboutusRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/contactus',contactusRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("home",{
        //     nav,
            btn,
            title:'Library'
    
        });

 });

 app.listen(5000);
