const path = require("path");
const router = require("express").Router();

const { Workout } = require("../models");

module.exports = function(app) {
    // route to our index page
    router.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(response => {
                res.json(response);

            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}

module.exports = router;