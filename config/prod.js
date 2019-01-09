//prod.js - production keys
module.exports = {
  googleClientID: process.env.GOOGLE_AUTH_ID,
  googleClientSecret: process.env.GOOGLE_AUTH_SECRET,
  googleCalendarKey : process.env.GOOGLE_CALENDAR_KEY,
  outlookClientID : process.env.OUTLOOK_CLIENT_ID,
  outlookClientSecret : process.env.OUTLOOK_CLIENT_SECRET
  // mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  twilioAcc: process.env.TWILIO_ACC,
  twilioAuth: process.env.TWILIO_AUTH,
  domain: process.env.DOMAIN
}
