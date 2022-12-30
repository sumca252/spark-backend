/**
 * Roles Model
 */

const db = require("../config/db/database.js");

const Roles = {
    getAllRoles: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_roles()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getRoleById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_role_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
};

module.exports = Roles;
