/**
 * Authentication routes
 */
const router = require("express").Router();
const passport = require("passport");

const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const User = require("../models/users.model.js");

// Strategies for passport
require("../config/passport/strategies.js");

// Local authentication
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "Please fill in all fields to login",
        });
    }

    console.log({ login: req.body });

    const user = await User.getUserByEmail(email);

    if (user.length === 0) {
        return res.status(401).json({
            status: 401,
            success: false,
            message: "User not found Incorrect email",
        });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (isMatch) {
        const token = jsonwebtoken.sign(
            { email: user[0].email },
            process.env.JWT_SECRET,
            {
                expiresIn: 3600,
            }
        );

        return res.status(200).json({
            status: 200,
            user: {
                id: user[0].id,
                first_name: user[0].first_name,
                last_name: user[0].last_name,
                username: user[0].username,
                email: user[0].email,
                phone: user[0].phone,
                role_id: user[0].role_id,
                token: token,
            },
        });
    }

    return res.status(401).json({
        status: 401,
        success: false,
        message: "Incorrect password",
    });
});

router.post("/register", (req, res) => {
    const { firstName, lastName, username, email, password, phone, roleId } =
        req.body;

    if (!firstName || !lastName || !email || !password || !phone || !roleId) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "Please fill in all fields to register a new user account",
        });
    }

    console.log({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
        phone: phone,
        role_id: roleId,
    });

    User.createUser({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
        phone: phone,
        role_id: roleId,
    });

    return res.status(200).json({
        status: 200,
        success: true,
        message: "User created successfully",
    });
});

// Github authentication
router.get(
    "/github",
    passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: process.env.FRONTEND_URL,
        failureRedirect: "/api/v1/auth/failure",
    })
);

// Google authentication
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.FRONTEND_URL,
        failureRedirect: "/api/v1/auth/failure",
    })
);

router.get("/success", (req, res) => {
    if (req.user) {
        return res.status(200).json({
            status: 200,
            message: "Authentication successful",
            user: req.user,
        });
    }

    return res.status(401).json({
        status: 401,
        success: false,
        message: "Authentication failed",
    });
});

router.get("/failure", (req, res) => {
    return res.status(401).json({
        status: 401,
        success: false,
        message: "Authentication failed",
    });
});

router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect(process.env.FRONTEND_URL);
    });
});

module.exports = router;
