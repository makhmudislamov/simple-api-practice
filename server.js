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


//SHOW one (hard-coded) venue
app.get('/venues/:index', (req, res) => {

        res.json(venues[req.params.index])

})

app.listen(port, () => {
  console.log('App listening on port 3000!')
})
