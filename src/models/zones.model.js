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
    addZone: (zone) => {
        new Promise((resolve, reject) => {
            db.query("CALL add_zone(?)", [zone.type], (err) => {
                if (err) {
                    reject(err);
                }
            });
        });
    },
    updateZoneById: (zone) => {
        new Promise((resolve, reject) => {
            db.query(
                "CALL update_zone_by_id(?, ?)",
                [zone.id, zone.type],
                (err) => {
                    if (err) {
                        reject(err);
                    }
                }
            );
        });
    },
};

module.exports = Zones;
