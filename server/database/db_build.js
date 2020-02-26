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

const postData = (reqBody) => {
    console.log("inside  post ",reqBody);
    let {customer_name, phone, customer_address, pizza_type,extra_cheese, mushrooms, pepperoni, sauce, note} = reqBody;
    extra_cheese = true;
    mushrooms = false; 
    pepperoni = true;

    sql = {
    text: 'INSERT INTO pizza_order (customer_name, pizza_type, sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    values:  [customer_name, pizza_type,sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note]
    }

    connection.query(sql.text, sql.values, (error, results) => {
      if (error) {
        throw error
      }
    })
}

// post data to database by using queries from sql file
const createTableQuery = fs.readFileSync(path.join(__dirname,'db_build.sql')).toString();

const createTable = callback => {
    connection.query(createTableQuery, (err,res) => {
    if (err) throw err; 
    
})
}

module.exports = {getData, postData,createTable} ;
