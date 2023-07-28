import express from "express";
const router = express.Router();
import fs from "fs";
import foodDishes from "../data/dishes.js";
import * as dotenv from "dotenv";
dotenv.config();
const access = process.env.KEY_ACC;
let list = [];
// const jsonTest = async () => {
// 	try {
// 		let response = fs.readFileSync("./data/dishes.json", "utf-8");

// 		response = await JSON.parse(response);
// 		console.log("Success:", response);

// 		return response.foodDishes;
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// };

const logger = (req, res, next) => {
	console.log("hello there I'm a logger in this little world");
	console.log(`Accessed on ${new Date().toISOString()} at: ${req.originalUrl}`);
	next();
};
const authorizeUsersAccess = (req, res, next) => {
	if (req.query.admin === "true") {
		// /recipes?admin=true
		next();
	} else {
		res.send("ERROR: You must be an admin");
	}
};

router.use(logger);

router.get("/", authorizeUsersAccess, async (req, res) => {
	// res.send(await jsonTest());
	res.send(foodDishes);
});

router.get("/list", async (req, res) => {
	// await jsonTest();
	let list = foodDishes.map(
		(el) =>
			// {return {
			// name:
			el.name,
		// };}
	);

	res.send(list);
});

router.use(`/:dish_name/`, (req, res, next) => {
	if (req.url == `/?${access}`) {
		let dish_name = foodDishes.find((el) => el.name.toLowerCase() === req.params.dish_name.toLowerCase());
		res.send(dish_name);
	} else {
		console.log(req.url);
		next();
	}
});
router.get("/:dish_name/", async (req, res) => {
	let dish_name = foodDishes.find((el) => el.name.toLowerCase() === req.params.dish_name.toLowerCase());
	res.send({ user: "No Access" });
});

export default router;
