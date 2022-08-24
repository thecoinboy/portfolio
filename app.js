import express from 'express'
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'
export const app = express();
const router = express.Router();
dotenv.config({ path: "./config/config.env" })

router.post("/contact", (req, res) => {
    const { values } = req.body
    const { name, email, subject, message  } = values  
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    const mailOption = {
        from: email,
        to: process.env.EMAIL,
        text: `Subject : ${subject}, Name : ${name}, E-mail : ${email}, Message : ${message}`,
    }

    transporter.sendMail(mailOption, ((err) => {
        if (err) {
            res.status(500).send({ err: err })
        } else {
            res.status(200).send({ message: "Message sent successfully" })
        }
    }))
})
export default router;









// netmptzvhusoyksb   pass



