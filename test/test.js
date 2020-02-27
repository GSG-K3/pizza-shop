const tape = require("tape");

const dbBuild = require("./../server/database/db_build.js");
const getData = require("../public/js/employee.js");
const postData = require("../public/js/customer.js");


tape("get data method", t => {
    const ex = [
        {
          id: 1,
          customer_name: 'hanan',
          pizza_type: 'pizza margherita',
          sauce: 'salsa',
          extra_cheese: 'true',
          mushrooms: 'true',
          pepperoni: 'false',
          phone: '0548522554',
          customer_address: 'beit-altefel',
          note: 'If the pizza is not delisious I will retrive my money'
        },
        {
          id: 2,
          customer_name: 'ruba',
          pizza_type: 'pizza mushroom',
          sauce: 'pesto',
          extra_cheese: 'true',
          mushrooms: 'true',
          pepperoni: 'false',
          phone: '0548522554',
          customer_address: 'beit-altefel',
          note: 'If the pizza is not delisious I will retrive my money'
        },
        {
          id: 3,
          customer_name: 'rahaf',
          pizza_type: 'pizza mexican',
          sauce: 'salsa',
          extra_cheese: 'true',
          mushrooms: 'true',
          pepperoni: 'false',
          phone: '0548522554',
          customer_address: 'beit-altefel',
          note: 'If the pizza is not delisious I will retrive my money'
        },
        {
          id: 4,
          customer_name: 'banan',
          pizza_type: 'pizza  vegetariana',
          sauce: 'BBQ Sauce',
          extra_cheese: 'true',
          mushrooms: 'true',
          pepperoni: 'false',
          phone: '0548522554',
          customer_address: 'beit-altefel',
          note: 'If the pizza is not delisious I will retrive my money'
        }
      ]
    
    dbBuild();
    const rx = getData(res => {
      t.deepEqual(ex, res.rows, "ex should be equal result");
      t.end();
    });
 });

  tape.onFinish(() => process.exit(0));
  