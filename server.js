const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser'); // INITIALIZE BODY-PARSER AND ADD IT TO APP






app.use(bodyParser.urlencoded({ extended: true }));


venues = ["Metropolitan Opera House", "Make School", "IMAX Movie Theater", "UC Berkeley"]

events = ["Cookies and Code", "Phantom of the Opera", "Crazy Rich Asians", "CalHacks"]

//INDEX
app.get('/', (req, res) => {
        //start of the promise
        res.json(venues)
    })

    app.listen(port, () => {
      console.log('App listening on port 3000!')
  })

// //SHOW one venue
// app.get('/venues/', (req, res) => {
//
//         res.send(Json(venues[0]))
//
// })
