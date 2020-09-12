const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workouts = new Schema({
    day: {
        type: Date,
    },
    exercises: [    
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]

});

const Workouts = mongoose.model("Workouts", workouts);

module.exports = Workouts;