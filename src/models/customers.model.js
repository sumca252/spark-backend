/**
 * Customers Model
 */

const db = require("../config/db/database.js");

const Customers = {
    getAllCustomers: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_customers()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getCustomerById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_customer_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
    getCustomerByEmail: (email) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_customer_by_email(?)", [email], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
    updateCustomeByCustomerId: (customer) => {
        console.log("customerModel", customer);

        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL update_customer_by_id(?, ?, ?, ?, ?,?)",
                [
                    customer.id,
                    customer.first_name,
                    customer.last_name,
                    customer.username,
                    customer.email,
                    customer.phone,
                ],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    console.log(rows[0][0]);
                    resolve(rows[0][0]);
                }
            );
        });

        return result;
    },
};

module.exports = Customers;
