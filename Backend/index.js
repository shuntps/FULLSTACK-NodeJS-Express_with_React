const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const parcelRoute = require("./routes/parcel");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/parcel", parcelRoute);

// DATABASE CONNECTION
const DB = process.env.DB;
mongoose
   .connect(DB)
   .then(() => {
      console.log("DB connection is successful");
   })
   .catch((err) => {
      console.log(err);
   });

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
