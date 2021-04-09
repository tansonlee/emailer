const sendEmail = require("./email.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app running on port ${PORT}`));

router.post("/", (req, res) => {
	const { subject, body } = req.body;
	console.log(req.body);
	sendEmail(`PERSONAL WEBSITE ${subject}`, `BODY:\n${body}`);
	res.status(201).send({ status: "success" });
});

router.get("/", (req, res) => {
	console.log("here");
	res.send({
		val1: "value",
	});
	// sendEmail("hello", "body");
});
