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
    getStationByZoneType: (zoneType) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL get_station_by_zone_type(?)",
                [zoneType],
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
    getStationByCityIdAndZoneId: (cityId, zoneId) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL get_station_by_city_id_and_zone_id(?, ?)",
                [cityId, zoneId],
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
    addStation: (station) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL add_station(?, ?, ?, ?, ?)",
                [
                    station.name,
                    station.zone_id,
                    station.longitude,
                    station.latitude,
                    station.city_id,
                ],
                (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        });
    },
    updateStationById: (station) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL update_station_by_id(?, ?, ?, ?, ?, ?)",
                [
                    station.id,
                    station.name,
                    station.zone_id,
                    station.longitude,
                    station.latitude,
                    station.city_id,
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

module.exports = Stations;
