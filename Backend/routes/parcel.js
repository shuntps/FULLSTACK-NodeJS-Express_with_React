const express = require("express");
const router = express.Router();

const {
   createParcel,
   getAllParcels,
   updateParcel,
   getOneParcel,
   getUsersParcels,
   deleteParcel,
} = require("../controllers/parcel");
const {
   verifyToken,
   verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

// Add parcel
router.post("/", verifyToken, createParcel);

// Get all parcel
router.get("/", verifyTokenAndAuthorization, getAllParcels);

// Update parcel
router.put("/:id", updateParcel);

// Get one parcel
router.get("/find/:id", getOneParcel);

// Get users parcels
router.get("/me", getUsersParcels);

// Deleting parcel
router.delete("/:id", deleteParcel);

module.exports = router;
