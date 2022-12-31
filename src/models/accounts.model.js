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
    changePaymentMethod: (data) => {
        new Promise((reject) => {
            db.query(
                "CALL change_payment_method(?, ?)",
                [data.customer_id, data.payment_method],
                (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        });
    },
    AddMoneyToAccount: (data) => {
        new Promise((reject) => {
            db.query(
                "CALL add_money_to_account(?, ?)",
                [data.customer_id, data.balance],
                (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        });
    },
};

module.exports = Accounts;
