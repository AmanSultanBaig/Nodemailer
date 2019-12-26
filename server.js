const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amansultanbaig@gmail.com',
    pass: '#######' // put your password in environment file and access from there 
  }
});

let mailOptions = {
  from: 'amansultanbaig@gmail.com',
  to: 'youremail@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hey i am using nodemailer'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
