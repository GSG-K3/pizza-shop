const connection = require('../db_connection')

const postData = (reqBody) => {
    console.log("inside  post ",reqBody);
    const {customer_name, phone, customer_address, pizza_type,extra_cheese, mushrooms, pepperoni, sauce, note} = reqBody;
  
    sql = {
    text: 'INSERT INTO pizza_order (customer_name, pizza_type, sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);',
    values:  [customer_name, pizza_type,sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note]
    }

    connection.query(sql.text, sql.values, (error, results) => {
      if (error) {
        throw error
      }
    })
}
module.exports = postData;
