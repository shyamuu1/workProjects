DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
id INT AUTO_INCREMENT PRIMARY KEY,
fullname VARCHAR(250) NOT NULL,
initials VARCHAR(250) NOT NULL,
title VARCHAR(250)
);

INSERT INTO USERS(fullname, initials, title) VALUES
 ('Shyam Vasanjee', 'INYSHKV', 'Developer'),
 ('John Doe', 'INYJODO', 'Sales'),
 ('Alphonse Wilson', 'INYALPW', 'Data Analytics');