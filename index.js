const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("New API running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((course) => course.category_id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log("online-courses-server", port);
});
