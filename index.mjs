import express from "express";
import * as dotenv from "dotenv";
import fs from "fs";
import routerUser from "./routes/users.mjs";
import routerRecipe from "./routes/recipes.mjs";
import foodDishes from "./data/dishes.js";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/recipes", routerRecipe);
app.use("/users", routerUser);

let names = [];
app.get("/", (req, res, next) => {
	if (names.length == 0) {
		for (let i = 0; i < foodDishes.length; i++) {
			const el = foodDishes[i];
			names.push(el.name);

			if (i == foodDishes.length - 1) {
				res.json(el.name);
			}
		}
	} else {
		res.json(names);
	}
	// res.json(foodDishes[0].name);
});

app.use((req, res, next) => {
	let date = new Date(Date.now());
	console.log("Time:", date.toString());
	next();
});

app.listen(PORT, () => console.log(`Server having fun at 🌀🌀🌀: http://localhost:${PORT}/`));
