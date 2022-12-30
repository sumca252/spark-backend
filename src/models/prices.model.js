/**
 * Prices model
 */

const db = require("../config/db/database.js");

const Prices = {
    getAllPrices: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_prices()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getPriceById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_price_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
};

module.exports = Prices;
