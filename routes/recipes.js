const express = require("express");
const router = express.Router();
const fs = require("fs");

let list = [];
const jsonTest = async () => {
	try {
		const response = fs.readFileSync("./data/dishes.json", "utf-8");

		const result = await JSON.parse(response);
		console.log("Success:", result.foodDishes[0].name);

		const elFood = () => {
			result.foodDishes.forEach((el) => {
				list.push(" " + el.name);
			});
		};
		elFood();
	} catch (error) {
		console.error("Error:", error);
	}
};

router.get("/", (req, res) => {
	if (list.length === 0) {
		jsonTest();
		res.send("List " + list);
	} else {
		res.send("List " + list);
	}
});

router.get("/Spaghetti%20Carbonara", (req, res) => {
	if (list.length === 0) {
		jsonTest();
		res.send(list[0]);
	} else {
		res.send(list[0]);

		console.log("dish page");
	}
});
router.get("/chicken%20curry", (req, res) => {
	if (list.length === 0) {
		jsonTest();
		res.send(list[1]);
	} else {
		res.send(list[1]);

		console.log("dish page");
	}
});

module.exports = router;
