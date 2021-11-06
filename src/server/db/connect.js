const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://philippaubert:h3VPdv7GsYAWt7T@cluster0.six8b.mongodb.net/datapop?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO DB"))
  .catch((err) => console.log(err));
