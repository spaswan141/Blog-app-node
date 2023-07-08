const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			requireTLS:true,
			auth: {
				user: 'shubhammpaswan@gmail.com',
				pass: 'nzxzpxwpitugipyq'
			}
		});

		await transporter.sendMail({
			from: 'shubhammpaswan@gmail.com',
			to: email,
			subject:subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
