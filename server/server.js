const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/contact', (req, res) => {
    const { fullname, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS  
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ca9488@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `Full name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error.message);
            return res.status(500).send('Failed to send message.');
        }
        console.log('Message sent successfully!');
        res.status(200).send('Message sent successfully!');
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
