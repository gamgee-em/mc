DROP DATABASE IF EXISTS moving_db;
CREATE DATABASE moving_db;
USE moving_db;

CREATE TABLE customer(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    f_name VARCHAR(30) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    email VARCHAR(90) NOT NULL,
    phone VARCHAR(10) NOT NULL
);

CREATE TABLE user(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    f_name VARCHAR(30) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    admin BOOLEAN NOT NULL,
    email VARCHAR(90) NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE job(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    service_date INT NOT NULL,
    starting_address VARCHAR(250) NOT NULL,
    inbetween_address VARCHAR(250) NOT NULL,
    ending_address VARCHAR(250) NOT NULL,
    hourly_rate INT NOT NULL,
    tolls INT NOT NULL,
    fuel INT NOT NULL,
    elevator BOOLEAN NOT NULL,
    servicing_employees VARCHAR(250),
    misc_info VARCHAR(250),
    customer_id INT UNSIGNED,
    INDEX customer_ind (customer_id),
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE SET NULL,
    user_id INT UNSIGNED,
    INDEX user_ind (user_id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE SET NULL 
);