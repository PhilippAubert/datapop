const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("CONNECTED TO DB !!"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
