/**
 * Stations Model
 */

const db = require("../config/db/database.js");

const Stations = {
    getAllStations: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_stations()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getStationById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_station_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
};

module.exports = Stations;
