const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 5000;
const { body,validationResult } = require('express-validator');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const { google } = require("googleapis");
const { reseller } = require('googleapis/build/src/apis/reseller');
const OAuth2 = google.auth.OAuth2;

require('dotenv').config()

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(express.urlencoded({
  extended: true
}))

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req,res){
      res.sendFile(path.join(__dirname, 'client/build' , 'index.html'))
  })
}

app.use(cors());


app.route('/form')
  .post([body('email').isEmail()],(req,res) => {
    const errors = validationResult(req);
    const email = req.body.email
    const topic = req.body.topic
    const query = req.body.query
    const body = `${email} sent a message with the topic: ${topic} and content: ${query} `
  
      const myOAuth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
      )

      myOAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
        });

      const myAccessToken = myOAuth2Client.getAccessToken()

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: process.env.SECRET_EMAIL, //your gmail account you used to set the project up in google cloud console"
             clientId: process.env.CLIENT_ID,
             clientSecret: process.env.CLIENT_SECRET,
             refreshToken: process.env.REFRESH_TOKEN,
             accessToken: myAccessToken //access token variable we defined earlier
        }});

      const mailOptions = {
        from: email, 
        to: process.env.SECRET_EMAIL, 
        subject: topic, 
        text: body
      };

    if (!errors.isEmpty()) {

    console.log(error)

    } else {
      transport.sendMail(mailOptions, function(error, info){
        
        if(error){
          
          res.status(400).send({message: "failed"})

        }else{
        
          res.status(200).send({message: "success"})

        };
    });
    }
  
  });


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});
