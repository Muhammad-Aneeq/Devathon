const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  description: String,
  price: Number,
});

const Course = mongoose.model.Course || mongoose.model("Course", courseSchema);

module.exports = Course;
