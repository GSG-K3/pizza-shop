const fs = require('fs');
const path = require('path');

const connection = require('./db_connection');

// post data to database by using queries from sql file
const createTableQuery = fs.readFileSync(path.join(__dirname,'db_build.sql')).toString();

const createTable = callback => {
    connection.query(createTableQuery, (err,res) => {
    if (err) throw err; 
})
}

module.exports = createTable ;