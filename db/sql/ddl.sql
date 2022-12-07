--
-- sets encoding to UTF-8 
--
SET
    NAMES 'utf8';

--
-- Drop tables in order
--
DROP TABLE IF EXISTS `log`;

DROP TABLE IF EXISTS `station`;

DROP TABLE IF EXISTS `scooter`;

DROP TABLE IF EXISTS `payment`;

DROP TABLE IF EXISTS `account`;

DROP TABLE IF EXISTS `customer`;

DROP TABLE IF EXISTS `user`;

DROP TABLE IF EXISTS `role`;

DROP TABLE IF EXISTS `status`;

DROP TABLE IF EXISTS `price`;

DROP TABLE IF EXISTS `zone`;

DROP TABLE IF EXISTS `city`;

--
-- role
--
CREATE TABLE IF NOT EXISTS `role` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
);

--
-- user
--
CREATE TABLE IF NOT EXISTS `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `role_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
);

--
-- customer
--
CREATE TABLE IF NOT EXISTS `customer` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

--
-- account
--
CREATE TABLE IF NOT EXISTS `account` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `customer_id` INT NOT NULL,
    `balance` DECIMAL(10, 2) NOT NULL,
    `payment_method` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
);

--
--  status
--
CREATE TABLE IF NOT EXISTS `status` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(255) NOT NULL UNIQUE,
    -- available, unavailable etc.
    PRIMARY KEY (`id`)
);

--
-- price
--
CREATE TABLE IF NOT EXISTS `price` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `start_cost` DECIMAL(10, 2) NOT NULL,
    `travel_cost` DECIMAL(10, 2) NOT NULL,
    `parking_cost` DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (`id`)
);

--
-- scooter
--
CREATE TABLE IF NOT EXISTS `scooter` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `battery` INT NOT NULL,
    `status_id` INT NOT NULL,
    `longitude` DECIMAL(10, 2) NOT NULL,
    `latitude` DECIMAL(10, 2) NOT NULL,
    `price_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
    FOREIGN KEY (`price_id`) REFERENCES `price` (`id`)
);

--
-- zone 
--
CREATE TABLE IF NOT EXISTS `zone` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
);

--
-- city
--
CREATE TABLE IF NOT EXISTS `city` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL UNIQUE,
    `country` VARCHAR(255) NOT NULL UNIQUE,
    `longitude` DECIMAL(10, 2) NOT NULL UNIQUE,
    `latitude` DECIMAL(10, 2) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
);

--
-- station
--
CREATE TABLE IF NOT EXISTS `station` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL UNIQUE,
    `zone_id` INT NOT NULL,
    `longitude` DECIMAL(10, 2) NOT NULL UNIQUE,
    `latitude` DECIMAL(10, 2) NOT NULL UNIQUE,
    `city_id` INT NOT NULL,
    `scooter_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`city_id`) REFERENCES `city` (`id`),
    FOREIGN KEY (`scooter_id`) REFERENCES `scooter` (`id`),
    FOREIGN KEY (`zone_id`) REFERENCES `zone`(`id`)
);

--
-- payment
--
CREATE TABLE IF NOT EXISTS `payment` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `payment_method` VARCHAR(255) NOT NULL UNIQUE,
    `account_id` INT NOT NULL,
    `price_id` INT NOT NULL,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
    FOREIGN KEY (`price_id`) REFERENCES `price` (`id`)
);

--
-- logs
--
CREATE TABLE IF NOT EXISTS `logs` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `start_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `end_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `start_longitude` DECIMAL(10, 2) NOT NULL,
    `start_latitude` DECIMAL(10, 2) NOT NULL,
    `end_longitude` DECIMAL(10, 2) NOT NULL,
    `end_latitude` DECIMAL(10, 2) NOT NULL,
    `customer_id` INT NOT NULL,
    `price_id` INT NOT NULL,
    `scooter_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
    FOREIGN KEY (`price_id`) REFERENCES `price` (`id`),
    FOREIGN KEY (`scooter_id`) REFERENCES `scooter` (`id`)
);