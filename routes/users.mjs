import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	res.send("User List");
});
router.get("/new", (req, res) => {
	res.send("User New Form");
});

router.post("/", (req, res) => {
	res.send();
});

router.get("/:id", (req, res) => {
	req.params.id;
	res.send(`user get ${req.params.id}`);
});
router.put("/:id", (req, res) => {
	req.params.id;
	res.send(`Update user get ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
	req.params.id;
	res.send(`delete user get ${req.params.id}`);
});
export default router;
