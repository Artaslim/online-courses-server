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
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectCourse = courses.find((course) => course._id === id);
  res.send(selectCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((course) => course.category_id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log("online-courses-server", port);
});
