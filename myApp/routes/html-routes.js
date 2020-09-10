const path = require("path");

module.exports = function(app) {
    // route to our index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
    // route to our stats page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })

    // route to our continue exercise page
    app.get("/exercise?", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })

    // route to our new exercise page
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })
}