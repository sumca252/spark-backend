-- ---------------------------------------------------------------------------
-- views
-- ---------------------------------------------------------------------------
--
--
--
-- view all scooters
--
DROP VIEW IF EXISTS `all_scooters`;

CREATE VIEW `all_scooters` AS
SELECT
    sc.id,
    sc.battery,
    s.status,
    sc.longitude,
    sc.latitude,
    p.start_cost,
    p.travel_cost,
    p.parking_cost
FROM
    scooter AS sc
    JOIN status AS s ON s.id = sc.status_id
    JOIN price AS p ON p.id = sc.price_id
ORDER BY
    sc.id;

--
-- view all cities
--
DROP VIEW IF EXISTS `all_cities`;

CREATE VIEW `all_cities` AS
SELECT
    c.id,
    c.name,
    c.country,
    c.longitude,
    c.latitude
FROM
    city AS c
ORDER BY
    c.id;

--
-- get all users
--
DROP VIEW IF EXISTS `all_users`;

CREATE VIEW `all_users` AS
SELECT
    u.id,
    u.first_name,
    u.last_name,
    u.password,
    u.email,
    u.phone,
    r.role
FROM
    user AS u
    JOIN role AS r ON r.id = u.role_id
ORDER BY
    u.id;

--
-- customers
--
DROP VIEW IF EXISTS `all_customers`;

CREATE VIEW `all_customers` AS
SELECT
    u.id,
    u.first_name,
    u.last_name,
    u.email,
    u.phone,
    r.role
FROM
    user AS u
    JOIN role AS r ON r.id = u.role_id
WHERE
    r.role = 'customer'
ORDER BY
    u.id ASC;

--
-- view all_roles
--
DROP VIEW IF EXISTS `all_roles`;

CREATE VIEW `all_roles` AS
SELECT
    r.id,
    r.role
FROM
    role AS r
ORDER BY
    r.id ASC;

--
-- view all_admins
--
DROP VIEW IF EXISTS `all_admins`;

CREATE VIEW `all_admins` AS
SELECT
    u.id,
    u.first_name,
    u.last_name,
    u.password,
    u.email,
    u.phone,
    r.role
FROM
    user AS u
    JOIN role AS r ON r.id = u.role_id
WHERE
    r.role = 'admin'
ORDER BY
    u.id ASC;

--
-- view all_accounts
--
DROP VIEW IF EXISTS `all_accounts`;

CREATE VIEW `all_accounts` AS
SELECT
    ac.id,
    ac.customer_id AS customer_id,
    u.id AS user_id,
    u.first_name,
    u.last_name,
    ac.balance,
    ac.payment_method
FROM
    account AS ac
    JOIN customer AS c ON c.id = ac.customer_id
    JOIN user AS u ON u.id = c.user_id
    JOIN role AS r ON r.id = u.role_id
WHERE
    r.role = 'customer'
GROUP BY
    ac.id
ORDER BY
    ac.id ASC;

-- 
---------------------------------------------------------------------------
-- views
-- ---------------------------------------------------------------------------