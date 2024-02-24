const { emailVerification, passwordVerification } = require("@/emailTemplate/emailVerfication");
const nodemailer = require("nodemailer");

const sendMail = async ({
  email,
  name,
  link,
  mern_app_email,
  subject = "verify your email | mern",
  type = "emailVerification",
}) => {
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
    subject: subject,
    html:
      type === "emailVerification"
        ? emailVerification({ name, link })
        : passwordVerification({ name, link }),
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.error("error sending mail: ", error);
    } else {
      console.log("email sent: ", info.response);
    }
  });
};

module.exports = sendMail;
