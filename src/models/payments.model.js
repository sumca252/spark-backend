/**
 * Payments Model
 */

const db = require("../config/db/database.js");

const payments = {
    getAllPayments: () => {
        return new Promise((resolve, reject) => {
            db.query("CALL get_all_payments()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });
    },
    getPaymentsByCustomerId: (customerId) => {
        return new Promise((resolve, reject) => {
            db.query(
                "CALL get_payments_by_customer_id(?)",
                [customerId],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(rows[0]);
                }
            );
        });
    },
};

module.exports = payments;
