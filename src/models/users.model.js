/**
 * User Model
 */

const db = require("../config/db/database.js");

const bcrypt = require("bcryptjs");

const Users = {
    getAllUsers: () => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_all_users()", (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            });
        });

        return result;
    },
    getUserById: (id) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_user_by_id(?)", [id], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
    getUserByEmail: (email) => {
        const result = new Promise((resolve, reject) => {
            db.query("CALL get_user_by_email(?)", [email], (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows[0]);
            });
        });

        return result;
    },
    getUserByUsername: (username) => {
        console.log(username);
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL get_user_by_username(?)",
                [username],
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
    createUser: (user) => {
        const hashedPassword = bcrypt.hashSync(user.password, 10);

        user.password = hashedPassword;

        new Promise((resolve, reject) => {
            db.query(
                "CALL add_user(?, ?, ?, ?, ?, ?)",
                [
                    user.first_name,
                    user.last_name,
                    user.password,
                    user.email,
                    user.phone,
                    user.role_id,
                ],
                (err, rows) => {
                    if (err) {
                        reject(err);
                        console.log(err);
                    }
                    resolve(rows[0]);
                }
            );
        });
    },
    updateUserById: (user) => {
        const result = new Promise((resolve, reject) => {
            db.query(
                "CALL update_user_by_id(?, ?, ?, ?, ?, ?, ?)",
                [
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.password,
                    user.email,
                    user.phone,
                    user.role_id,
                ],
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

module.exports = Users;
