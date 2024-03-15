const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  port:587,
  secure:false,
  auth: {
    user: 'devakalyan8590@gmail.com',
    pass: 'kvcv xssx thku bjcn' 
  }
});

// Email content
let mailOptions = {
  from: 'devakalyan8590@gmail.com',
  to: 'akhilmathewbabu@gmail.com',
  subject: 'TEXT NODEMAILER ',
  text: 'welcome to Nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

