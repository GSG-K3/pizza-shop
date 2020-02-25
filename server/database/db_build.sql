BEGIN;

DROP TABLE IF EXISTS  pizza_order CASCADE;

CREATE TABLE  pizza_order(
    id SERIAL PRIMARY KEY ,
    customer_name VARCHAR(50) NOT NULL ,
    pizza_type VARCHAR(20) NOT NULL,
    sauce VARCHAR(20) NOT NULL,
    extra_cheese BOOLEAN NOT NULL,
    mushrooms BOOLEAN NOT NULL,
    pepperoni BOOLEAN NOT NULL,
    phone VARCHAR(20) NOT NULL,
    customer_address VARCHAR(100) NOT NULL,
    note VARCHAR(100) NOT NULL  
);

INSERT INTO pizza_order (customer_name, pizza_type, sauce, extra_cheese,mushrooms, pepperoni, phone, customer_address, note) VALUES ('customer_name', 'pizza_type', 'sauce', true, true, false, 'phone', 'customer_address', 'note'); 


COMMIT;