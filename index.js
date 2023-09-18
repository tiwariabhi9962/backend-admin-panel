const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://abhitiwari9961:maheshdalle@cluster0.3ckbizs.mongodb.net/"
);

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("sever is running");
});
