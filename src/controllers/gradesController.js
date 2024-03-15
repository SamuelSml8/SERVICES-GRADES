const Grade = require("../models/gradeModel.js");

const createGrade = async (req, res) => {
  const data = req.body;
  try {
    const newGrade = new Grade(data);

    if (data.grade.length <= 0) {
      return res.status(400).json({
        ok: false,
        message: "grade is obligated",
        data: null,
      });
    }

    const saveGrade = await newGrade.save();
    return res.status(201).json({
      ok: true,
      message: "Grade created",
      data: saveGrade,
    });
  } catch (error) {
    console.error("Error creating the grade", error);
    return res.status(500).json({
      ok: false,
      message: "Server internal error",
      data: null,
    });
  }
};

const getAllGrades = async (req, res) => {};

const getGradeById = async (req, res) => {};

module.exports = { createGrade, getAllGrades, getGradeById };
