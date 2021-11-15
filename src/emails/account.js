const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'geof.olson@gmail.com',
        subject: 'welcome!',
        text: `Welcome to the app, ${name}!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'geof.olson@gmail.com',
        subject: 'Confirming Cancellation',
        text: `We're sorry to see you go, ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}