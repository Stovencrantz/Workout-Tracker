const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
      console.log("api.js res: ", res);
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();
    console.log("json: get from db: ", json);
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];
    console.log("id: ", id);
    console.log("put /api/workouts/:id");
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  },
  async createWorkout(data = {}) {
    console.log("post /api/workouts");
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    console.log("json: ", json);
    return json;
  },
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    return json;
  },
};
