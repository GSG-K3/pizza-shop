BEGIN;

DROP TABLE IF EXISTS  pizza_order CASCADE;

CREATE TABLE  pizza_order(
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    pizza_type VARCHAR(20) NOT NULL,
    sauce VARCHAR(20) NOT NULL,
    extra_cheese BOOLEAN ,
    mushrooms BOOLEAN,
    pepperoni BOOLEAN,
    phone VARCHAR(20) NOT NULL,
    customer_address VARCHAR(100) NOT NULL,
    note VARCHAR(100) 
);

COMMIT;