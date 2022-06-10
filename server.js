const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
// const Model = require("./models")

const app = express();


app.use(express.json());

const username = "muskan";
const password = "muskan";
const cluster = "<cluster0";
const dbname = "reporrtgen";

mongoose.connect(
  'mongodb+srv://muskan:muskan@cluster0.nrggp.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(6000, () => {
  console.log("Server is running at port 6000");
});