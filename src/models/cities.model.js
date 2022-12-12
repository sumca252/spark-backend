/**
 * Cities Model
 */
const db = require("../config/db/database.js");

const Cities = {
    getAllCities: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_cities()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getCityById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_city_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
    addCity: (city) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL add_city(?, ?, ?, ?)",
                [city.name, city.country, city.longitude, city.latitude],
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
    updateCityById: (id, city) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL update_city_by_id(?, ?, ?, ?, ?)",
                [id, city.name, city.country, city.longitude, city.latitude],
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

module.exports = Cities;