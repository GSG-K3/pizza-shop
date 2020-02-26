const express = require('express');
const path = require('path')
const dbData = require('./database/db_build')
const app = express();
const bodyParser = require('body-parser');



app.use(express.static(path.join(__dirname,'..','public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.set('port',process.env.PORT || 3001);

app.get('/employee',(req,response)=> {
    dbData.getData((err,res) => {
        if(err) {console.log(err,'unsuccessful connection')}
        else {response.send(res)}
    })
})

app.get('/customer', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'customer.html'))
})

app.post('/customer',(req,res) => {
    extraced_data = req.body;
    // import query
    // req.ody >>> callback 
})
// app.post('/customer',(req,response) => {
//         dbData.createOrder((err,res) => {
//         if(err) {console.log(err,'unsuccessful connection')}
//     })
//     })
    

app.listen(app.get('port'), () => {
    console.log(`App is live on http://localhost:${app.get("port")}`);
  });

