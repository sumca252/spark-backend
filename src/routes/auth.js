/**
 * Authentication routes
 */
const router = require("express").Router();
const passport = require("passport");

// Strategies for passport
require("../config/passport/strategies.js");

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
