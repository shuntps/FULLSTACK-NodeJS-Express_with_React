const User = require("../models/User");

// Deleting user
const deleteUser = async (req, res) => {
   try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
         return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({
         message: "The user has been deleted successfully",
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

// Get all users
const getAllUsers = async (req, res) => {
   try {
      const users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

module.exports = { deleteUser, getAllUsers };
