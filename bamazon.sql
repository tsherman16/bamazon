DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INTEGER NOT NULL,
stock_quantity INTEGER,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boot", "Shoes", 100, 500), ("T-shirt", "Men's Clothing", 25, 300), ("Blouse", "Women's Clothing", 15, 400),
("Ray Bans", "Sunglasses", 140, 200), ("Pants", "Men's Clothing", 80, 500), ("Basketball", "Sporting Good's", 50, 600),
("Running Shorts", "Men's Clothing", 30, 400), ("Lacrosse Stick", "Sporting Good's", 200, 350), ("Step Brother's", "Movies", 15, 300),
("Your Highness", "Movies", 15, 600);