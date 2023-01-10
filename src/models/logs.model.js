/**
 * Logs model
 */
const db = require("../config/db/database.js");

const logs = {
    getAllLogs: () => {
        return new Promise((resolve, reject) => {
            db.query("CALL get_all_logs()", (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });
    },
    getLogById: (id) => {
        return new Promise((resolve, reject) => {
            db.query("CALL get_log_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });
    },
    createLog: (data) => {
        return new Promise((resolve, reject) => {
            db.query(
                "CALL create_log(?, ?, ?, ?, ?)",
                [
                    data.start_longitude,
                    data.start_latitude,
                    data.customer_id,
                    data.price_id,
                    data.scooter_id,
                ],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(rows[0][0]);
                }
            );
        });
    },
    updateLogByLogId: (data) => {
        return new Promise((reject) => {
            db.query(
                "CALL update_log_by_log_id(?, ?, ?, ?)",
                [data.id, data.end_time, data.end_longitude, data.end_latitude],
                (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        });
    },
    getLogByCustomerId: (customerId) => {
        return new Promise((resolve, reject) => {
            db.query(
                "CALL get_log_by_customer_id(?)",
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

module.exports = logs;
