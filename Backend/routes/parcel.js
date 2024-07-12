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

// Add parcel
router.post("/", createParcel);

// Get all parcel
router.get("/", getAllParcels);

// Update parcel
router.put("/:id", updateParcel);

// Get one parcel
router.get("/find/:id", getOneParcel);

// Get users parcels
router.get("/me", getUsersParcels);

// Deleting parcel
router.delete("/:id", deleteParcel);

module.exports = router;
