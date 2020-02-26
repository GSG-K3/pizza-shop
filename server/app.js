const express = require('express');
const path = require('path')
const dbData = require('./database/db_build')
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'..','public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.set('port',process.env.PORT || 3000);
app.get('/getemployee',(req,response)=> {
    dbData.getData((err,res) => {
        if(err) {console.log(err,'unsuccessful connection')}
        else {response.send(res)}
    })

})
app.get('/create', (req,res) => {
    dbData.createTable((err,res) => {
        if(err) {console.log(err,'unsuccessful connection')}
        else {response.send(res)}
    })
})
app.post('/postcustomer',(req,res)=> {
    const reqBody = req.body;
    if (reqBody.extra_cheese != null){
        reqBody.extra_cheese = true;
    }
    else reqBody.extra_cheese = false;
    if (reqBody.mushrooms != null){
        reqBody.mushrooms= true;
    }
    else reqBody.mushrooms = false;
    if (reqBody.pepperoni != null){
        reqBody.pepperoni = true;
    }
    else reqBody.pepperoni= false;
    dbData.postData(reqBody) 
    res.redirect('/customer');
})

app.get('/employee',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'employee.html'))
})

app.get('/customer', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'customer.html'));

})

app.listen(app.get('port'), () => {
    console.log(`App is live on http://localhost:${app.get("port")}`);
  });

