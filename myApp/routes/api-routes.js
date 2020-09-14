const router = require("express").Router();

const Workout  = require("../models/workouts.js");
// performs the same as db = require('../models'); and calling
// db.Workout.<METHOD>

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(400).json(err);
      });
  });

    // route to our index page
    router.post("/api/workouts", ({ body }, res) => {
        console.log("api-routes body: ", body);
        Workout.create({})
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    router.put("/api/workouts/:id", (req, res) => {
        console.log("req body: ", req.body);
        Workout.updateOne({_id: req.params.id }, {$push: {"exercises" : req.body}}, 
            // runValidators will ensure new exercises meet our schema reqs.
            { new: true, runValidators: true }
        ).then(dbWorkouts => {
            res.json(dbWorkouts);
        }).catch(err => {
            res.status(400).json()
        })
    })




module.exports = router;