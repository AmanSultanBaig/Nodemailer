var nodemailer = require('nodemailer');
 
var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-gmail-password'
  }
});
 
var mailOptions = {
   from: 'youremail@gmail.com',
   to: 'your-first-email@gmail.com, your-second-email@gmail.com',
   subject: 'Sending Email using Node.js',
   html: '<h1>Welcome</h1><p>That was easy!</p>' ,
   attachments: [{
       filename: 'text1.txt',
       content: 'hello world!'
   }
}
 
mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});
