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
    p.parking_cost,
    sc.speed,
    st.id AS station_id,
    st.name AS station_name,
    c.id AS city_id,
    c.name AS city_name
FROM
    scooter AS sc
    JOIN status AS s 
        ON s.id = sc.status_id
    JOIN price AS p 
        ON p.id = sc.price_id
    JOIN station AS st 
        ON st.id = sc.station_id
    JOIN city AS c 
        ON c.id = st.city_id
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
    c.latitude,
    c.area
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
    u.username,
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
    u.username,
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
    u.username,
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
-- view all_stations
--

DROP VIEW IF EXISTS `all_stations`;

CREATE VIEW `all_stations` AS
SELECT
    s.id,
    s.name AS station_name,
    s.city_id,
    c.name AS city_name,
    c.country,
    z.type AS zone_type,
    s.longitude,
    s.latitude
FROM
    station AS s
    JOIN city AS c ON c.id = s.city_id
    JOIN zone AS z ON z.id = s.zone_id
ORDER BY
    s.id ASC;


--
-- get all logs
--
DROP VIEW IF EXISTS `all_logs`;

CREATE VIEW `all_logs` AS
SELECT
    l.id,
    DATE_FORMAT(l.start_time, "%Y-%m-%d %H:%i") AS start_time,
    DATE_FORMAT(l.end_time, "%Y-%m-%d %H:%i") AS end_time,
    l.start_longitude,
    l.end_longitude,
    l.start_latitude,
    l.end_latitude,
    l.customer_id,
    GROUP_CONCAT(u.first_name, ' ', u.last_name) AS customer_name,
    p.start_cost,
    p.travel_cost,
    p.parking_cost,
    l.scooter_id
FROM logs AS l 
    JOIN customer AS c 
        ON c.id = l.customer_id
    JOIN user AS u 
        ON u.id = c.user_id
    JOIN price AS p 
        ON p.id = l.price_id
GROUP BY
    l.id
ORDER BY
    l.id ASC;





--
-- all payments
--
-- DROP VIEW IF EXISTS `all_payments`;
-- 
-- CREATE VIEW `all_payments` AS
-- SELECT
--     py.id,
--     py.payment_method,
--     py.account_id,
--     GROUP_CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
--     c.email,
--     pr.start_cost,
--     pr.travel_cost,
--     pr.parking_cost,
--     DATE_FORMAT(py.date, '%d-%m-%Y') AS date 
-- FROM
--     payment AS py
--     JOIN account AS ac ON ac.id = py.account_id
--     JOIN price AS pr ON pr.id = py.price_id
--     JOIN all_customers AS c ON c.id = ac.customer_id
-- GROUP BY
--     py.id
-- ORDER BY
--     py.id ASC;
-- 

-- 
-- -------------------------------------------------------------------------
-- views
-- ---------------------------------------------------------------------------