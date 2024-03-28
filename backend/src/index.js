const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const user = require("./routes/user");
const task = require("./routes/task");

const app = express();
const PORT = process.env.PORT || 5501;
env.config();
console.log(process.env.MONGO_URL, "");

app.use(express.json());

app.use(helmet());
app.use(cors());

// Connection with Mongo Database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Database connection failed", error.message);
  });

app.use("/user", user);
app.use("/task", task);

app.listen(PORT, () => {
  console.log("Server is Running on PORT 4000");
});
