const {Pool} = require('pg')

require('env2')("config.env")
const connectionString = process.env.DATABASE_URL;

module.exports = new Pool({
    connectionString, ssl : !connectionString.includes("localhost")
})