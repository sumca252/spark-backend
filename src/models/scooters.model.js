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
    getAllScooterInCityByCityId: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL get_all_scooters_in_city_by_city_id(?)",
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
    getAllScooterInStationByStationId: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL get_all_scooters_in_station_by_station_id(?)",
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
    addScooter: (scooter) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL add_scooter(?, ?, ?, ?, ?, ?, ?)",
                [
                    scooter.battery,
                    scooter.status_id,
                    scooter.longitude,
                    scooter.latitude,
                    scooter.price_id,
                    scooter.speed,
                    scooter.station_id,
                ],
                (err) => {
                    if (err) {
                        reject(err);
                    }
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
    updateScooterById: (scooter) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL update_scooter_by_id(?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    scooter.id,
                    scooter.battery,
                    scooter.status_id,
                    scooter.longitude,
                    scooter.latitude,
                    scooter.price_id,
                    scooter.speed,
                    scooter.station_id,
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
    updateRentedScooterById: (scooter) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL update_rented_scooter_by_id(?, ?, ?, ?, ?, ?)",
                [
                    scooter.id,
                    scooter.battery,
                    scooter.status_id,
                    scooter.longitude,
                    scooter.latitude,
                    scooter.speed,
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
            db.query("CALL delete_scooter_by_id(?)", [id], (err) => {
                if (err) {
                    reject(err);
                }
            });
        });
    },
    rentScooter: (scooterId, userId, startLong, startLat) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL rent_scooter(?,?,?,?)",
                [scooterId, userId, startLong, startLat],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(rows[1][0]);
                }
            );
        });

        return result;
    },

    returnScooter: (scooterId, userId, endLong, endLat, time, status) => {
        return new Promise((resolve, reject) => {
            db.query(
                "CALL return_scooter(?,?,?,?,?,?)",
                [scooterId, userId, endLong, endLat, time, status],
                (err, rows) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(rows[0][0]);
                }
            );
        });
    },
};

module.exports = Scooters;
