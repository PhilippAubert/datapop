import dotenv from "dotenv";
import express from "express";
import cors from "cors";
//import { Spark } from "./models/spark.js";
// import { Note } from "./models/notes.js"

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json([]);
})

const start = async () => {
  try {
    //await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
