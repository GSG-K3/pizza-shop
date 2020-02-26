const fs = require('fs');
const path = require('path');

const connection = require('./db_connection');
const server = require('./../app');

console.log(server)

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
    
})
}

// const createOrder = (request, response) => {
//     console.log(request.body)
//     const {customer_name, pizza_type, sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note} = request.body
    sql = {
        text: 'state',
        values: []
    }
//     pool.query('INSERT INTO users (customer_name, pizza_type, sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
//      [, pizza_type, sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note], 
//      (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID: ${results.insertId}`)
//     })
//   }


module.exports = {getData, postData} ;