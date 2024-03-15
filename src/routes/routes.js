const express = require("express");
const router = express.Router();
const {
  createGrade,
  getAllGrades,
  getGradeById,
} = require("../controllers/gradesController.js");

router.get("/api/grades", getAllGrades);
router.get("/api/grades/:id", getGradeById);
router.post("/api/grades/create", createGrade);

module.exports = router;
