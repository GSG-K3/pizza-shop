const connection = require('../db_connection')
const getSql = "select * from pizza_order;"

const getData = callback => {
    connection.query(getSql, (err,res) => {
    if (err) throw err; 
    else {callback(err,res.rows)}
})
}


module.exports = getData;