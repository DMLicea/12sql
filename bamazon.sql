DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

  itemid INTEGER(11) AUTO_INCREMENT NOT NULL,
  productname VARCHAR(40) NOT NULL,
  departmentname VARCHAR(20) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stockquantity INTEGER(11) NOT NULL,
  PRIMARY KEY (itemid)
  
);

INSERT INTO products (productname, departmentname, price, stockquantity)

VALUES  ("Barbie Doll", "toys", 5.24, 625),
("Light & Fit Raspberry Yogurt", "food", 3.25, 788),
("Reeses Peanut Butter Eggs ", "food", 3.48, 222),
("Transformers Hot Rod", "toys", 18.75, 244),
("Banana Boat Sunscreen Lotion ", "personal care", 8.94, 345),
("Dr. Bronner's Lavender Liquid Soap", "personal care", 18.99, 122),
("Jif Creamy Peanut Butter, 40 oz", "food", 5.44, 176),
("Athletic Works Solid Baseball Cap", "clothing", 7.44, 333),
("Open Back Dress", "clothing", 39.99, 101),
("Fresh Red Cherries", "food", 5.71, 89)
;