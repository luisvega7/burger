CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    Id INT not null AUTO_INCREMENT,
        burger_name VARCHAR(250) NOT NULL,
        devoured BOOLEAN DEFAULT false,
        PRIMARY KEY (id)
);