const express = require("express");
const students = require("./data/students.json");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`This is using nodemon`);
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => student.id == id);
  if (student) {
    res.json(student);
    return;
  }

  res.status(404).json({ message: "Gak ketemu bang" });
});

app.listen(port, () => {
  console.log(`the express js app is running on port ${port}`);
});
