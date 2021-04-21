const Project = require("../model/Project");
const Tag = require("../model/Tag");
let nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = {
  showProject: async (req, res) => {
    try {
      const project = await Project.find()
        .select("_id title description image link tagId")
        .populate({ path: "tagId", select: "_id name" });
      res.status(200).json({ message: "Success", data: project });
    } catch (error) {
      res.status(500).json({ message: "Internal Message Error" });
    }
  },

  contact: async (req, res) => {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log("Eror: ", err);
      else console.log("Info: ", info);
    });

    res.status(200).send();
  },
};
