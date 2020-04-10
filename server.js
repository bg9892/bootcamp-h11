const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://bg9892:4Q#EDtckv3@GkTw@ds245518.mlab.com:45518/heroku_sh32xzcc", {
//   useNewUrlParser: true
// });

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://bg9892:4Q#EDtckv3@GkTw@ds245518.mlab.com:45518/heroku_sh32xzcc";
mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


