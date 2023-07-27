import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const access = process.env.KEY_ACC;

const authi = async (req, res, next) => {
	const apiKey = req.headers["x-api-key"];

	try {
		if (apiKey === access) {
			next();
		} else {
			throw "Invalid API key.";
		}
	} catch (error) {
		//this should return error to client
		console.log(error);
		return res.status(401).json({
			message: error,
			error: true,
		});
	}
};

export default authi;
