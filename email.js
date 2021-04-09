const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
	host: "smtp-mail.outlook.com",
	secureConnection: false,
	port: 587,
	tls: {
		ciphers: "SSLv3",
	},
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const sendEmail = (subject, body) => {
	let mailOptions = {
		from: process.env.FROM,
		to: process.env.TO,
		subject: subject,
		text: body,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			return console.log("Error", err);
		}
		return console.log("Email sent!!");
	});
};

module.exports = sendEmail;
