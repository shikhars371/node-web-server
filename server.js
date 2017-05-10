const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000


var app = express();

hbs.registerPartials(__dirname+'/public/partials')

app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurretYear',()=>
{
    return new Date().getFullYear();
});

hbs.registerHelper('toupper',(text)=>{
    return text.toUpperCase();
});

app.get('/',(request,response)=>{

    //response.send('<h1>hello shikhar </h1>');
    response.render('home_page.hbs',{
        
        pageTitle: 'Welcome to my Site',
        Help : 'Helping you for your future',
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
         
        pageTitle:'About Page',
    });
});

app.get('/bad',(req,res)=>{

    res.send(
        {
            error : 'unable to response'
        }
    );

});

app.listen(port,()=>{

    console.log(`server up on ${port}}`);

});