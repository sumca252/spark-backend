/**
 * Zones model
 */

const db = require("../config/db/database.js");

const Zones = {
    getAllZones: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_zones()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getZoneById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_zone_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
};

module.exports = Zones;
