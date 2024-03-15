const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  grade: Number,
});

const Grade = mongoose.model("grades", gradeSchema);

module.exports = Grade;
