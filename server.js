const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser'); // INITIALIZE BODY-PARSER AND ADD IT TO APP






app.use(bodyParser.urlencoded({ extended: true }));


venues =  
