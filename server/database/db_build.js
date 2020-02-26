const fs = require('fs');
const path = require('path');

const connection = require('./db_connection');


// get data from database
const getSql = "select * from pizza_order"

const getData = callback => {
    connection.query(getSql, (err,res) => {
    if (err) throw err; 
    else {callback(err,res.rows)}
})
}

// post data to database by using queries from sql file
const sql = fs.readFileSync(path.join(__dirname,'db_build.sql')).toString();

const postData = callback => {
    connection.query(sql, (err,res) => {
    if (err) throw err; 
    else {callback(err,res.rows)}
})
}


module.exports = {getData, postData} ;