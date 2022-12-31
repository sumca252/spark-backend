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
                "CALL update_log_by_log_id(?, ?, ?, ?, ?, ?, ?, ?, ? , ?)",
                [
                    data.start_time,
                    data.end_time,
                    data.start_longitude,
                    data.end_longitude,
                    data.start_latitude,
                    data.end_latitude,
                    data.customer_id,
                    data.price_id,
                    data.scooter_id,
                    data.id,
                ],
                (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        });
    },
};

module.exports = logs;
