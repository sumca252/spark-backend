/**
 * Accounts Model
 */

const db = require("../config/db/database.js");

const Accounts = {
    getAllAccounts: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_accounts()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getAccountByCustomerId: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL get_account_by_customer_id(?)",
                [id],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(rows[0]);
                }
            );
        });

        return result;
    },
};

module.exports = Accounts;
