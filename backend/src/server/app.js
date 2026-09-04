import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.json("HELLO WORLD!!__!!!!");
})

const connect = async () => {
	const client = await pool.connect();
	try {
		const response = await client.query("SELECT * FROM posts");
		const { rows } = response;
		console.log(rows);
	} catch (e) {
		console.error(`There's an error ${e} line 34`);
	} finally {
		client.release()
	}
}

const start = async () => {
	try {
		//await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`server is listening on ${port}...`));
	} catch (error) {
		console.error(error);
	}
};

start();
