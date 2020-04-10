const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_sh32xzcc:3d33sjfton860ao5mtf4ba4jh7@ds245518.mlab.com:45518/heroku_sh32xzcc";
mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
