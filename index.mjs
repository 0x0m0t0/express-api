import express from "express";
import * as dotenv from "dotenv";
const app = express();
const PORT = 3000;
dotenv.config();

app.use(express.json());
app.use((req, res, next) => {
	let date = new Date(Date.now());
	console.log("Time:", date.toString());
	next();
});

app.get("/", (req, res) => {
	res.send("Home page");
});

app.get("/users", (req, res) => {
	res.send("Users Page");
	console.log("users page");
});

app.listen(PORT, () => console.log(`Server having fun at 🌀🌀🌀: http://localhost:${PORT}/`));
