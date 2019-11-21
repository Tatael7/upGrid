DROP DATABASE IF EXISTS leadsDb;
CREATE DATABASE leadsDb;
USE leadsDb;

CREATE TABLE clients (
	id INT(45) AUTO_INCREMENT NOT NULL,
	name VARCHAR(20) NOT NULL,
    number BIGINT(10) NOT NULL,
    address VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    bill INT(20) NOT NULL,
    PRIMARY KEY(id)
);



INSERT INTO clients (name, number, address, email, bill)
VALUES ("john smith", 6195557777, "123 elm st", "something@gmail.com", 250),
		("armando ochoa", 6193970851, "1053 e main st", "ochoaarmando20@yahoo.com", 350.00);

SELECT * FROM clients;