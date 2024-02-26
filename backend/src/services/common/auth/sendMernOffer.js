const { afterRegistrationSuccess } = require("@/emailTemplate/emailVerfication");
const nodemailer = require("nodemailer");
const { loadSetting } = require("@/middlewares/settings");

const sendMernOffer = async ({ email, name }) => {
  const settings = await loadSetting();
  const mern_app_email = settings["mern_app_email"];

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_SECRET,
    },
  });

  const mailOption = {
    from: mern_app_email,
    to: email,
    subject: 'Are you want to customize this app or build your own SaaS?',
    html: afterRegistrationSuccess({ name }),
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.error("error sending mail: ", error);
    } else {
      console.log("email sent: ", info.response);
    }
  });
};

module.exports = sendMernOffer;
