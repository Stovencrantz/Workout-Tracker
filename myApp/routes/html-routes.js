const router = require("express").Router();
const path = require("path");

    // route to our index page
    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
    // route to our stats page
    router.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })

    // route to our continue exercise page
    router.get("/exercise?", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })

    // route to our new exercise page
    router.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })

    module.exports = router;