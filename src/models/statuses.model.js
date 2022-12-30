/**
 * Statuses Model
 */

const db = require("../config/db/database.js");

const Statuses = {
    getAllStatuses: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_statuses()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getStatusById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_status_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
};

module.exports = Statuses;
