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
-- add scooter PROCEDURE
--
DROP PROCEDURE IF EXISTS `add_scooter`;
DELIMITER ;;

CREATE PROCEDURE `add_scooter`(
    IN `a_battery` INT, 
    IN `a_status_id` INT, 
    IN `a_longitude` DECIMAL(10, 8), 
    IN `a_latitude` DECIMAL(10, 8), 
    IN `a_price_id` INT
)
BEGIN 
INSERT INTO 
    `scooter` (`battery`, `status_id`, `longitude`, `latitude`, `price_id`)
VALUES 
    (a_battery, a_status_id, a_longitude, a_latitude, a_price_id);
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
    IN `a_price_id` INT
)
BEGIN
UPDATE 
    `scooter`
SET 
    `battery` = a_battery,
    `status_id` = a_status_id,
    `longitude` = a_longitude,
    `latitude` = a_latitude,
    `price_id` = a_price_id
WHERE 
    `id` = a_id;
END;;
DELIMITER ;

--
-- soft delete a specific scooter by id
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
    IN `a_latitude` DECIMAL(10, 8)
)
BEGIN 
INSERT INTO 
    `city` (`name`, `country`, `longitude`, `latitude`)
VALUES 
    (a_name, a_country, a_longitude, a_latitude);
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
    IN `a_latitude` DECIMAL(10, 8)
)
BEGIN
UPDATE 
    `city`
SET 
    `name` = a_name,
    `country` = a_country,
    `longitude` = a_longitude,
    `latitude` = a_latitude
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
        `password`, 
        `email`, 
        `phone`, 
        `role_id`
    )
VALUES 
    (
        a_first_name, 
        a_last_name,
        a_password,
        a_email,
        a_phone,
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

-- ---------------------------------------------------------------------------
-- PROCEDURES
-- ---------------------------------------------------------------------------


