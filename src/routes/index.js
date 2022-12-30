const router = require("express").Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome to Spark Backend API",
    });
});

module.exports = router;
