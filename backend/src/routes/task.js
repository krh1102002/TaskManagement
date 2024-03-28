const express = require("express");
const {
  addTask,
  updateTask,
  deleteTask,
  getAllTask,
} = require("../controllers/task");
const { isAuthorized } = require("../middleware/isAuthorized");

const router = express.Router();

//Getting all tasks of User
router.get("/", isAuthorized, getAllTask);

//For Adding Tasks
router.post("/", isAuthorized, addTask);

// For Updating a Tasks
router.put("/", isAuthorized, updateTask);

// For Deleting a Task
router.delete("/", isAuthorized, deleteTask);

module.exports = router;
