const Parcel = require("../models/Parcel");

// Add parcel
const createParcel = async (req, res) => {
   const newParcel = Parcel(req.body);
   try {
      const parcel = await newParcel.save();
      res.status(201).json(parcel);
   } catch (error) {
      res.status(500).json(error);
   }
};

// Get all parcel
const getAllParcels = async (req, res) => {
   try {
      const parcels = await Parcel.find().sort({ createdAt: -1 });
      res.status(200).json(parcels);
   } catch (error) {
      res.status(500).json(error);
   }
};

// Update parcel
const updateParcel = async (req, res) => {
   try {
      const parcel = await Parcel.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
      );
      res.status(201).json(parcel);
   } catch (error) {
      res.status(500).json(error);
   }
};

// Get one parcel
const getOneParcel = async (req, res) => {
   try {
      const parcel = await Parcel.findById(req.params.id);
      res.status(200).json(parcel);
   } catch (error) {
      res.status(500).json(error);
   }
};

// Get users parcels
const getUsersParcels = async (req, res) => {
   try {
      const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
         createdAt: -1,
      });
      res.status(200).json(parcels);
   } catch (error) {
      res.status(500).json(error);
   }
};

// Deleting parcel
const deleteParcel = async (req, res) => {
   try {
      await Parcel.findByIdAndDelete(req.params.id);

      res.status(200).json({ message: "Parcel has been deleted!" });
   } catch (error) {
      res.status(500).json(error);
   }
};

module.exports = {
   createParcel,
   getAllParcels,
   updateParcel,
   getOneParcel,
   getUsersParcels,
   deleteParcel,
};
