const express = require("express");
const router = express.Router();

const { deleteUser, getAllUsers } = require("../controllers/user");

// Deleting user
router.delete("/:id", deleteUser);

// Get all users
router.get("/", getAllUsers);

module.exports = router;
