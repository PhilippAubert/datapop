import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('mongodb connected to docker '))
	.catch(err => console.error('mongoose connetion error:', err));

app.get('/', (req, res) => {
	res.json({ message: "HELLO WORLD!! Database status: connected" });
	const start = async () => {
		try {
		} catch (error) {
			console.error(error);
		}
	}
	start();
});

app.listen(PORT, console.log(`server is listening on ${PORT}...`));
