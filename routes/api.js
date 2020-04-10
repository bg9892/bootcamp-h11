const router = require("express").Router();
const db = require("../models");

//Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    });
});

//Create workout
router.post('/api/workouts', ({ body }, res) => {
  const workout = new db.Workout(body);
  db.Workout.create(workout)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  const workoutID = req.params.id
  db.Exercise.create(req.body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: workoutID }, { $push: { exercises: _id }}, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
  .populate('exercises')
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    });
});

router.get('/api/workouts/:id', (req, res) => {
  db.Workout.findOne({ _id: req.params.id })
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err);
  });
});


module.exports = router;
