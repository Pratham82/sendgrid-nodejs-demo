const sgMail = require('@sendgrid/mail')
require('dotenv').config()

//setting API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Building a message object
const message = {
  to: 'mali.prathamesh82@gmail.com',
  from: 'mali.prathamesh18@gmail.com',
  subject: 'Test Email sent via Sendgrid',
  text: 'New Subject ',
  html: '<h1>This is test Email sent via SendGrid</h1>',
}

//Sending email
sgMail.send(message)
