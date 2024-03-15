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

const getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.status(200).json({
      ok: true,
      message: "all Grades",
      data: grades,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Internal Server error",
      data: null,
    });
  }
};

const getGradeById = async (req, res) => {
  try {
    const gradeId = req.params.id;
    const gradeFound = await Grade.findById(gradeId);

    if (!gradeFound) {
      return res.status(404).json({
        ok: false,
        message: "Grade not found",
        data: null,
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Grade found",
      data: gradeFound,
    });
  } catch (error) {
    console.error("Error searching for gradees by id ");
    res.status(500).json({
      ok: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

module.exports = { createGrade, getAllGrades, getGradeById };
