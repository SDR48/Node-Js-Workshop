const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 8080;
var app = express();
hbs.registerPartials(__dirname+'/Views/partials');
hbs.registerHelper('screamit',(text)=>{
    return text.toUpperCase();
});
app.set('View Engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log('now',now,req.method,req.url);
    next();
});

app.get('/',(req,res)=>
{
    res.render('Home.hbs',{
        pageTitle:'This is the Home page',
        welcome:'This is the text',
        currentYear: new Date().getFullYear()
    });
});

app.get('/sdr',(req,res)=>
{
    res.render('sdr.hbs',{
        pageTitle:'About Page',
        welcome:'my text',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad',(req,res)=>
{
    res.send(
        {
            statuscode: 404,
            msg: 'Page not Found'
        }
    )
});
app.listen(port,()=>
{
console.log('Server running on port 8080');
});