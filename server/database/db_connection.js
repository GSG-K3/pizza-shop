const {Pool} = require('pg')

require('env2')("config.env")
const connectionString = process.env.DB_URL;
console.log(connectionString)
if (!connectionString){
    console.log("unsuccessful connection")
}

module.exports = new Pool({
    connectionString, ssl : !connectionString.includes("localhost")
})

