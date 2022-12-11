/**
 * Scooters Model
 */

const db = require("../config/db/database.js");

const Scooters = {
    getAllScooters: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_scooters()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    /**
     * Adds a scooter to the database
     *
     * @param {*} scooter
     */
    addScooter: (scooter) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL add_scooter(?, ?, ?, ?, ?)",
                [
                    scooter.battery,
                    scooter.status_id,
                    scooter.longitude,
                    scooter.latitude,
                    scooter.price_id,
                ],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(rows[0]);
                }
            );
        });
    },
    getScooterById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_scooter_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
    updateScooterById: (id, scooter) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL update_scooter_by_id(?, ?, ?, ?, ?, ?)",
                [
                    id,
                    scooter.battery,
                    scooter.status_id,
                    scooter.longitude,
                    scooter.latitude,
                    scooter.price_id,
                ],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(rows[0]);
                }
            );
        });
    },
    deleteScooterById: (id) => {
        new Promise((resolve, reject) => {
            db.query("CALL delete_scooter_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });
    },
};

module.exports = Scooters;
