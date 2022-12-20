--
-- role
--
LOAD DATA LOCAL INFILE './csv/role.csv' 
INTO TABLE `role` 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- user
--
LOAD DATA LOCAL INFILE './csv/user.csv' 
INTO TABLE `user` 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    -- ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n'
IGNORE 1 LINES
;

--
-- customer
--
LOAD DATA LOCAL INFILE './csv/customer.csv' 
INTO TABLE `customer` 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- account
--
LOAD DATA LOCAL INFILE './csv/account.csv' 
INTO TABLE account 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- status
--
LOAD DATA LOCAL INFILE './csv/status.csv' 
INTO TABLE status 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- price
--
LOAD DATA LOCAL INFILE './csv/price.csv' 
INTO TABLE price 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- city
--
LOAD DATA LOCAL INFILE './csv/city.csv' 
INTO TABLE city 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- zone
--
LOAD DATA LOCAL INFILE './csv/zone.csv' 
INTO TABLE zone 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- station
--
LOAD DATA LOCAL INFILE './csv/station.csv' 
INTO TABLE station 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;


--
-- scooter
--
LOAD DATA LOCAL INFILE './csv/scooter.csv' 
INTO TABLE scooter 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    -- ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- payment
--
LOAD DATA LOCAL INFILE './csv/payment.csv' 
INTO TABLE payment 
CHARACTER SET utf8 
FIELDS 
    TERMINATED BY ',' 
    ENCLOSED BY '"' 
LINES 
    TERMINATED BY '\n' 
IGNORE 1 LINES
;

--
-- logs
--
-- LOAD DATA LOCAL INFILE './csv/logs.csv'
-- INTO TABLE logs
-- CHARACTER SET utf8
-- FIELDS 
--     TERMINATED BY ','
--     ENCLOSED BY '"'
-- LINES
--     TERMINATED BY '\n'
-- IGNORE 1 LINES
-- ;