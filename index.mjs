import express from "express";
import * as dotenv from "dotenv";
import fs from "fs";
import routerUser from "./routes/users.mjs";
import routerRecipe from "./routes/recipes.mjs";
import foodDishes from "./data/dishes.js";
import authi from "./auth.mjs";

import ejs from "ejs";

dotenv.config();

const app = express();
const PORT = 3000;
const access = process.env.KEY_ACC;
app.use(express.json());

app.use("/recipes", routerRecipe);
app.use("/users", routerUser);

let names = [];

app.set("view engine", "ejs");
// app.set("views", "./views/pages");
app.get("/info", (req, res) => {
	let list = foodDishes.map(
		(el) =>
			// {return {
			// name:
			el.name,
		// };}
	);

	res.render("index", { list });
});
app.use((req, res, authi, next) => {});

app.get(`/`, authi, (req, res, next) => {
	// if (names.length == 0) {
	// 	for (let i = 0; i < foodDishes.length; i++) {
	// 		const el = foodDishes[i];
	// 		names.push(el.name);

	// 		if (i == foodDishes.length - 1) {
	// 			res.json(el.name);
	// 		}
	// 	}
	// } else {
	// 	res.json(names);

	// }
	console.log(req.url);

	res.json(foodDishes);
});

app.get("/secret", (req, res) => {
	res.send({ message: "secret stuff" });
});
app.use((req, res, next) => {
	let date = new Date(Date.now());
	console.log("Time:", date.toString());
	next();
});

app.listen(PORT, () => console.log(`Server having fun at 🌀🌀🌀: http://localhost:${PORT}/`));
