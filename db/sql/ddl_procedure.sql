-- ---------------------------------------------------------------------------
-- PROCEDURES
-- ---------------------------------------------------------------------------
--
-- add scooter PROCEDURE
--
DROP PROCEDURE IF EXISTS `get_all_scooters`;

DELIMITER ;;

CREATE PROCEDURE `get_all_scooters`()
BEGIN
SELECT 
    * 
FROM 
    all_scooters;
END;;

DELIMITER ;

--
-- get scooter by scooter id 
--
DROP PROCEDURE IF EXISTS `get_city_by_scooter_id`;

DELIMITER ;;
CREATE PROCEDURE `get_city_by_scooter_id`(
    IN `a_scooter_id` INT
)

BEGIN
SELECT 
    ac.id,
    ac.longitude,
    ac.latitude,
    ac.area
FROM
    scooter AS sc
    JOIN all_stations AS st
        ON sc.station_id = st.id
    JOIN all_cities AS ac
        ON st.city_id = ac.id 
WHERE
    sc.id = a_scooter_id ;
END;;

DELIMITER ;
--
--
-- add scooter PROCEDURE
--
DROP PROCEDURE IF EXISTS `add_scooter`;
DELIMITER ;;

CREATE PROCEDURE `add_scooter`(
    IN `a_battery` INT, 
    IN `a_status_id` INT, 
    IN `a_longitude` DECIMAL(10, 8), 
    IN `a_latitude` DECIMAL(10, 8), 
    IN `a_price_id` INT,
    IN `a_speed` INT,
    IN `a_station_id` INT
)
BEGIN 
INSERT INTO 
    `scooter` (
        `battery`, 
        `status_id`, 
        `longitude`,
        `latitude`, 
        `price_id`,  
        `speed`, 
        `station_id`
    )
VALUES 
    (
        a_battery, 
        a_status_id, 
        a_longitude, 
        a_latitude, 
        a_price_id, 
        a_speed, 
        a_station_id
    );
END;;
DELIMITER ;

--
-- get scooter by id
--
DROP PROCEDURE IF EXISTS `get_scooter_by_id`;
DELIMITER ;;
CREATE PROCEDURE `get_scooter_by_id`(
    IN `a_id` INT
)
BEGIN
SELECT 
    *
FROM
    all_scooters
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- update a specific scooter by id
--
DROP PROCEDURE IF EXISTS `update_scooter_by_id`;

DELIMITER ;;

CREATE PROCEDURE `update_scooter_by_id`(
    IN `a_id` INT,
    IN `a_battery` INT, 
    IN `a_status_id` INT, 
    IN `a_longitude` DECIMAL(10, 8), 
    IN `a_latitude` DECIMAL(10, 8), 
    IN `a_price_id` INT,
    IN `a_speed` INT,
    IN `a_station_id` INT
)
BEGIN
UPDATE 
    `scooter`
SET 
    `battery` = a_battery,
    `status_id` = a_status_id,
    `longitude` = a_longitude,
    `latitude` = a_latitude,
    `price_id` = a_price_id,
    `speed` = a_speed,
    `station_id` = a_station_id
WHERE 
    `id` = a_id;
END;;
DELIMITER ;

--
-- 
--
DROP PROCEDURE IF EXISTS `delete_scooter_by_id`;
DELIMITER ;;

CREATE PROCEDURE `delete_scooter_by_id`(
    IN `a_id` INT
)

BEGIN
UPDATE 
    `scooter`
SET 
    `status_id` = 6
WHERE 
    `id` = a_id;
END;;
DELIMITER ;

--
-- get all cities
--
DROP PROCEDURE IF EXISTS `get_all_cities`;
DELIMITER ;;

CREATE PROCEDURE `get_all_cities`()

BEGIN
SELECT 
    *
FROM
    all_cities;
END;;

DELIMITER ;

--
-- get all scooters in a city
--
DROP PROCEDURE IF EXISTS `get_all_scooters_in_city_by_city_id`;

DELIMITER ;;

CREATE PROCEDURE `get_all_scooters_in_city_by_city_id`(
    IN `a_city_id` INT
)

BEGIN
SELECT 
    *
FROM
    all_scooters
WHERE
    city_id = a_city_id;
END;;

DELIMITER ;

--
-- get all scooters in a station 
--
DROP PROCEDURE IF EXISTS `get_all_scooters_in_station_by_station_id`;

DELIMITER ;;

CREATE PROCEDURE `get_all_scooters_in_station_by_station_id`(
    IN `a_station_id` INT
)

BEGIN
SELECT 
    *
FROM
    all_scooters
WHERE
    station_id = a_station_id;
END;;

DELIMITER ;








--
-- get specific city by id
--
DROP PROCEDURE IF EXISTS `get_city_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_city_by_id`(
    IN `a_id` INT
)

BEGIN
SELECT 
    *
FROM
    all_cities
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- add city
--
DROP PROCEDURE IF EXISTS `add_city`;

DELIMITER ;;

CREATE PROCEDURE `add_city`(
    IN `a_name` VARCHAR(255), 
    IN `a_country` VARCHAR(255), 
    IN `a_longitude` DECIMAL(10, 8), 
    IN `a_latitude` DECIMAL(10, 8),
    IN `a_area` DECIMAL(10, 2)
)
BEGIN 
INSERT INTO 
    `city` (`name`, `country`, `longitude`, `latitude` , `area`)
VALUES 
    (a_name, a_country, a_longitude, a_latitude , a_area);
END;;

DELIMITER ;

--
-- update a specific city by id
--

DROP PROCEDURE IF EXISTS `update_city_by_id`;
DELIMITER ;;
CREATE PROCEDURE `update_city_by_id`(
    IN `a_id` INT,
    IN `a_name` VARCHAR(255), 
    IN `a_country` VARCHAR(255), 
    IN `a_longitude` DECIMAL(10, 8), 
    IN `a_latitude` DECIMAL(10, 8),
    IN `a_area` DECIMAL(10, 2)
)
BEGIN
UPDATE 
    `city`
SET 
    `name` = a_name,
    `country` = a_country,
    `longitude` = a_longitude,
    `latitude` = a_latitude,
    `area` = a_area

WHERE 
    `id` = a_id;
END;;

DELIMITER ;

--
-- Get all users
--
DROP PROCEDURE IF EXISTS `get_all_users`;

DELIMITER ;;

CREATE PROCEDURE `get_all_users`()
BEGIN
SELECT 
    *
FROM
    all_users;
END;;

DELIMITER ;

--
-- add user
--

DROP PROCEDURE IF EXISTS `add_user`;
DELIMITER ;;

CREATE PROCEDURE `add_user`(
    IN `a_first_name` VARCHAR(255), 
    IN `a_last_name` VARCHAR(255), 
    IN `a_username` VARCHAR(255),
    IN `a_password` VARCHAR(255), 
    IN `a_email` VARCHAR(255), 
    IN `a_phone` VARCHAR(255), 
    IN `a_role_id` INT
)
BEGIN 
INSERT INTO 
    `user` (
        `first_name`, 
        `last_name`,
        `username`,
        `password`, 
        `email`, 
        `phone`, 
        `role_id`
    )
VALUES 
    (
        a_first_name, 
        a_last_name,
        a_username,
        a_password,
        a_email,
        a_phone,
        a_role_id
    );

SELECT LAST_INSERT_ID() INTO @user_id;

-- 
INSERT INTO `customer` (`user_id`) VALUES (@user_id);

SELECT LAST_INSERT_ID() INTO @customer_id;

INSERT INTO `account` 
    (`customer_id`, `balance`, `payment_method`) 
VALUES (@customer_id, "0", "CARD");

-- 
SELECT * FROM `all_users` WHERE `id` = @user_id;
END;;

DELIMITER ;

--
-- add user with email
--

DROP PROCEDURE IF EXISTS `add_user_with_username_or_email`;
DELIMITER ;;

CREATE PROCEDURE `add_user_with_username_or_email`(
    IN `a_first_name` VARCHAR(255), 
    IN `a_last_name` VARCHAR(255), 
    IN `a_username` VARCHAR(255),  
    IN `a_email` VARCHAR(255),
    IN `a_role_id` INT
)
BEGIN
INSERT INTO 
    `user` (
        `first_name`, 
        `last_name`, 
        `username`,
        `email`, 
        `role_id`
    )
VALUES 
    (
        a_first_name, 
        a_last_name,
        a_username,
        a_email,
        a_role_id
    );

END;;

DELIMITER ;

--
-- get specific user by id
--
DROP PROCEDURE IF EXISTS `get_user_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_user_by_id`(
    IN `a_id` INT
)

BEGIN
SELECT 
    *
FROM
    all_users
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- get specific user by email
--

DROP PROCEDURE IF EXISTS `get_user_by_email`;

DELIMITER ;;

CREATE PROCEDURE `get_user_by_email`(
    IN `a_email` VARCHAR(255)
)
BEGIN
SELECT 
    *
FROM
    all_users
WHERE
    email = a_email;
END;;

DELIMITER ;

--
-- get user by username
--
DROP PROCEDURE IF EXISTS `get_user_by_username_or_email`;

DELIMITER ;;

CREATE PROCEDURE `get_user_by_username_or_email`(
    IN `a_username` VARCHAR(255),
    IN `a_email` VARCHAR(255)
)
BEGIN
SELECT 
    *
FROM
    all_users
WHERE
    username = a_username OR email = a_email;
END;;

DELIMITER ;



--
-- update a specific user by id
--

DROP PROCEDURE IF EXISTS `update_user_by_id`;

DELIMITER ;;

CREATE PROCEDURE `update_user_by_id`(
    IN `a_id` INT,
    IN `a_first_name` VARCHAR(255), 
    IN `a_last_name` VARCHAR(255), 
    IN `a_password` VARCHAR(255), 
    IN `a_email` VARCHAR(255), 
    IN `a_phone` VARCHAR(255), 
    IN `a_role_id` INT
)
BEGIN
UPDATE 
    `user`
SET 
    `first_name` = a_first_name,
    `last_name` = a_last_name,
    `password` = a_password,
    `email` = a_email,
    `phone` = a_phone,
    `role_id` = a_role_id
WHERE 
    `id` = a_id;
END;;

DELIMITER ;

--
-- get all roles
--

DROP PROCEDURE IF EXISTS `get_all_roles`;
DELIMITER ;;

CREATE PROCEDURE `get_all_roles`()

BEGIN
SELECT 
    *
FROM
    all_roles;
END;;

DELIMITER ;

--
-- get role by id
--
DROP PROCEDURE IF EXISTS `get_role_by_id`;
DELIMITER ;;

CREATE PROCEDURE `get_role_by_id`(
    IN `a_id` INT
)
BEGIN
SELECT 
    *
FROM
    all_roles
WHERE
    id = a_id;
END;;

DELIMITER ;
--
-- get all customers
--

DROP PROCEDURE IF EXISTS `get_all_customers`;

DELIMITER ;;

CREATE PROCEDURE `get_all_customers`()

BEGIN
SELECT 
    *
FROM
    all_customers;
END;;

DELIMITER ;

--
-- get customer by id
--

DROP PROCEDURE IF EXISTS `get_customer_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_customer_by_id`(
    IN `a_id` INT
)

BEGIN
SELECT 
    *
FROM
    all_customers
WHERE
    id = a_id;
END;;

DELIMITER ;


--
-- get all accounts
--

DROP PROCEDURE IF EXISTS `get_all_accounts`;

DELIMITER ;;

CREATE PROCEDURE `get_all_accounts`()

BEGIN
SELECT 
    *
FROM
    all_accounts;
END;;

DELIMITER ;

--
-- get account by customer id
--

DROP PROCEDURE IF EXISTS `get_account_by_customer_id`;

DELIMITER ;;

CREATE PROCEDURE `get_account_by_customer_id`(
    IN `a_customer_id` INT
)

BEGIN
SELECT 
    *
FROM
    all_accounts
WHERE
    customer_id = a_customer_id;
END;;

DELIMITER ;

--
-- get all statuses
--

DROP PROCEDURE IF EXISTS `get_all_statuses`;

DELIMITER ;;

CREATE PROCEDURE `get_all_statuses`()

BEGIN
SELECT 
    *
FROM
    status
ORDER BY id ASC;
END;;

DELIMITER ;

--
-- get status by id
--

DROP PROCEDURE IF EXISTS `get_status_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_status_by_id`(
    IN `a_id` INT
)

BEGIN
SELECT 
    *
FROM
    status
WHERE
    id = a_id;
END;;

DELIMITER ;


--
-- get all prices
--

DROP PROCEDURE IF EXISTS `get_all_prices`;

DELIMITER ;;

CREATE PROCEDURE `get_all_prices`()

BEGIN
SELECT 
    *
FROM
    price;
END;;

DELIMITER ;

--
-- get price by id
--

DROP PROCEDURE IF EXISTS `get_price_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_price_by_id`(
    IN `a_id` INT
)

BEGIN
SELECT 
    *
FROM
    price
WHERE
    id = a_id;
END;;

DELIMITER ;



--
-- get all zones
--

DROP PROCEDURE IF EXISTS `get_all_zones`;

DELIMITER ;;

CREATE PROCEDURE `get_all_zones`()

BEGIN
SELECT 
    *
FROM
    zone
ORDER BY id ASC;
END;;

DELIMITER ;

--
-- add_zone
--
DROP PROCEDURE IF EXISTS `add_zone`;

DELIMITER ;;

CREATE PROCEDURE `add_zone`(
    IN `a_type` VARCHAR(255)
) 
BEGIN
INSERT INTO 
    zone (
        `type`
    )
VALUES
    (a_type);
END;;

DELIMITER ;

--
-- update_zone_by_id
--
DROP PROCEDURE IF EXISTS `update_zone_by_id`;

DELIMITER ;;
CREATE PROCEDURE `update_zone_by_id`(
    IN `a_id` INT,
    IN `a_type` VARCHAR(255)
) 
BEGIN
UPDATE 
    zone
SET
    type = a_type
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- get zone by id
--

DROP PROCEDURE IF EXISTS `get_zone_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_zone_by_id`(
    IN `a_id` INT
)

BEGIN
SELECT 
    *
FROM

    zone
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- add station
--
DROP PROCEDURE IF EXISTS `add_station`;

DELIMITER ;;

CREATE PROCEDURE `add_station`(
    IN `a_name` VARCHAR(255), 
    IN `a_zone_id` INT,
    IN `a_longitude` DECIMAL(10,8),
    IN `a_latitude` DECIMAL(10,8),
    IN `a_city_id` INT
)
BEGIN
INSERT INTO `station` 
    (`name`, `zone_id`, `longitude`, `latitude`, `city_id`) 
VALUES (a_name, a_zone_id, a_longitude, a_latitude, a_city_id);
END;;

DELIMITER ;

--
-- update station by id
--
DROP PROCEDURE IF EXISTS `update_station_by_id`;

DELIMITER ;;

CREATE PROCEDURE `update_station_by_id`(
    IN `a_id` INT,
    IN `a_name` VARCHAR(255), 
    IN `a_zone_id` INT,
    IN `a_longitude` DECIMAL(10,8),
    IN `a_latitude` DECIMAL(10,8),
    IN `a_city_id` INT
)
BEGIN
UPDATE `station`
SET 
    `name` = a_name,
    `zone_id` = a_zone_id,
    `longitude` = a_longitude,
    `latitude` = a_latitude,
    `city_id` = a_city_id
WHERE
    `id` = a_id;
END;;   

DELIMITER ;

--
-- get all stations
--

DROP PROCEDURE IF EXISTS `get_all_stations`;

DELIMITER ;;

CREATE PROCEDURE `get_all_stations`()
BEGIN
SELECT 
    *
FROM
    all_stations;
END;;

DELIMITER ;

--
-- get station by id
--

DROP PROCEDURE IF EXISTS `get_station_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_station_by_id`(
    IN `a_id` INT
)
BEGIN
SELECT 
    *
FROM
    all_stations
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- get station by city id and zone id
--
DROP PROCEDURE IF EXISTS `get_station_by_city_id_and_zone_id`;

DELIMITER ;;

CREATE PROCEDURE `get_station_by_city_id_and_zone_id`(
    IN `a_city_id` INT,
    IN `a_zone_id` INT
)
BEGIN
SELECT 
    *
FROM
    station AS s
WHERE
    city_id = a_city_id AND 
    zone_id = a_zone_id;

END;;

DELIMITER ;



--
-- create log
--
DROP PROCEDURE IF EXISTS `create_log`;

DELIMITER ;;

CREATE PROCEDURE `create_log`(
    IN `a_start_longitude` DECIMAL(10,8),
    IN `a_start_latitude` DECIMAL(10,8),
    IN `a_customer_id` INT,
    IN `a_price_id` INT,
    IN `a_scooter_id` INT
)
BEGIN
INSERT INTO `logs` 
    (`start_longitude`, `start_latitude`, `customer_id`, `price_id`, `scooter_id`)
VALUES
    (a_start_longitude, a_start_latitude, a_customer_id, a_price_id, a_scooter_id);

--
-- return the last inserted id by getting the last inserted id
--
SELECT LAST_INSERT_ID() INTO @log_id;
--
--
SELECT @log_id AS id;
--
END;;
DELIMITER ;

--
-- get all logs
--

DROP PROCEDURE IF EXISTS `get_all_logs`;

DELIMITER ;;

CREATE PROCEDURE `get_all_logs`()
BEGIN
SELECT 
    *
FROM
    all_logs;
END;;

DELIMITER ;

--
-- get log by id
--
DROP PROCEDURE IF EXISTS `get_log_by_id`;

DELIMITER ;;

CREATE PROCEDURE `get_log_by_id`(
    IN `a_id` INT
)
BEGIN
SELECT 
    *
FROM
    all_logs
WHERE
    id = a_id;
END;;

DELIMITER ;

--
-- get log by customer id
--
DROP PROCEDURE IF EXISTS `get_log_by_customer_id`;

DELIMITER ;;

CREATE PROCEDURE `get_log_by_customer_id`(
    IN `a_customer_id` INT
)
BEGIN
SELECT 
    *
FROM
    all_logs
WHERE
    customer_id = a_customer_id;
END;;

DELIMITER ;



--
-- update log by log id
-- 
DROP PROCEDURE IF EXISTS `update_log_by_log_id`;

DELIMITER ;;

CREATE PROCEDURE `update_log_by_log_id`(

    IN `a_log_id` INT,
    IN `a_end_time` DATETIME,
    IN `a_end_longitude` DECIMAL(10,8),
    IN `a_end_latitude` DECIMAL(10,8)
)
BEGIN
UPDATE `logs`
SET 
    `end_time` = a_end_time,
    `end_longitude` = a_end_longitude,
    `end_latitude` = a_end_latitude
WHERE
    `id` = a_log_id;
END;;

DELIMITER ;

--
-- change payment method
--
DROP PROCEDURE IF EXISTS `change_payment_method`;

DELIMITER ;;

CREATE PROCEDURE `change_payment_method`(
    IN `a_customer_id` INT,
    IN `a_payment_method` VARCHAR(255)
)
BEGIN
UPDATE `account`
SET 
    `payment_method` = a_payment_method
WHERE
    `customer_id` = a_customer_id;

END;;
DELIMITER ;

--
-- add money to account
--
DROP PROCEDURE IF EXISTS `add_money_to_account`;

DELIMITER ;;
CREATE PROCEDURE `add_money_to_account`(
    IN `a_customer_id` INT,
    IN `a_balance` DECIMAL(10,2)
)
BEGIN
UPDATE `account`
SET 
    `balance` = a_balance
WHERE
    `customer_id` = a_customer_id;
END;;

DELIMITER ;


--
-- get station by zone type
--
DROP PROCEDURE IF EXISTS `get_station_by_zone_type`;

DELIMITER ;;

CREATE PROCEDURE `get_station_by_zone_type`(
    IN `a_zone_type` VARCHAR(255)
)
BEGIN
DECLARE curr_search VARCHAR(50);
SELECT CONCAT('%', a_zone_type, '%') INTO curr_search;

SELECT 
    *
FROM
    all_stations
WHERE
    zone_type LIKE curr_search;
END;;

DELIMITER ;


--
-- rent scooter
--
DROP PROCEDURE IF EXISTS `rent_scooter`;

DELIMITER ;;

CREATE PROCEDURE `rent_scooter`(
    IN `a_scooter_id` INT,
    IN `a_user_id` INT,
    IN `a_start_longitude` DECIMAL(10,8),
    IN `a_start_latitude` DECIMAL(10,8)
)
BEGIN
    DECLARE c_id INT;
    DECLARE ac_balance DECIMAL(10,2);
    
    SELECT id INTO c_id FROM customer WHERE user_id = a_user_id;
    SELECT balance INTO ac_balance FROM account WHERE customer_id = c_id;

    IF ac_balance > 0 THEN 
        SELECT 'You do not have enough money to rent a scooter' AS 'error'; 
    ELSE
        -- update the scooter status to rented
        UPDATE `scooter` SET `status_id` = '8' WHERE `id` = a_scooter_id;
        
        -- update the account balance
        UPDATE `account` SET `balance` = ac_balance - 1 WHERE `customer_id` = c_id;
        
        -- create a log
        CALL create_log(
            a_start_longitude, 
            a_start_latitude, 
            c_id, 
            1, 
            a_scooter_id
        );
        
        SELECT 'You have successfully rented a scooter' AS 'success';
    END IF;
END;;

DELIMITER ;

--
-- return scooter
--
DROP PROCEDURE IF EXISTS `return_scooter`;

DELIMITER ;;

CREATE PROCEDURE `return_scooter`(
    IN `a_scooter_id` INT,
    IN `a_user_id` INT,
    IN `a_end_longitude` DECIMAL(10,8),
    IN `a_end_latitude` DECIMAL(10,8),
    IN `a_distance` DECIMAL(10,2)
)
BEGIN
    DECLARE c_id INT;
    DECLARE ac_balance DECIMAL(10,2);
    DECLARE log_id INT;
    DECLARE total_price INT;
    DECLARE tr_cost INT;
    DECLARE p_cost INT; 


    -- get the customer id and account balance
    SELECT id INTO c_id FROM customer WHERE user_id = a_user_id;
    SELECT balance INTO ac_balance FROM account WHERE customer_id = c_id;

    -- get customers log id
    SELECT id INTO log_id FROM logs WHERE customer_id = c_id AND scooter_id = a_scooter_id ORDER BY id DESC LIMIT 1;

    -- calculate the total price for the traveled distance 
    -- 3 = travel_cost  + parking_cost (1+2) 
    SET total_price = a_distance * 3;

    -- update the scooter status to available
    UPDATE 
        `scooter` 
    SET 
        `status_id` = 1
    WHERE `id` = a_scooter_id;

    -- update the account balance
    UPDATE 
        `account` 
    SET 
        `balance` = ac_balance - total_price
    WHERE `customer_id` = c_id;

    -- update_log_by_log_id(log_id end_time end_longitude end_latitude)
    CALL update_log_by_log_id(
        log_id, 
        NOW(), 
        a_end_longitude, 
        a_end_latitude
    );

    SELECT 'You have successfully returned a scooter' AS 'success';

END;;

DELIMITER ;

--
-- get all payments
--
DROP PROCEDURE IF EXISTS `get_all_payments`;

DELIMITER ;;

CREATE PROCEDURE `get_all_payments`()
BEGIN
SELECT
    *
FROM 
    all_payments;
END;;

DELIMITER ;

--
-- get payments by customer id
-- 
DROP PROCEDURE IF EXISTS `get_payments_by_customer_id`;

DELIMITER ;;

CREATE PROCEDURE `get_payments_by_customer_id`(
    IN `a_customer_id` INT
)
BEGIN
SELECT
    *
FROM
    all_payments
WHERE
    customer_id = a_customer_id;
END;;

DELIMITER ;

-- ---------------------------------------------------------------------------
-- PROCEDURES
-- ---------------------------------------------------------------------------


