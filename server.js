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
        res.json("you will see venues and the events in this website")
    })

app.get('/venues', (req, res) => {
        //start of the promise
        res.json(venues)
})


//SHOW one (hard-coded) venue >>> PEER REVIEW: /venues/venueId
app.get('/venues/venueId', (req, res) => {
        // pulling one venue from venues array
        res.json(venues[0])

})
// PEER REVIEW from Aktar and Makhmud >>>  showing one event of one venue
app.get('/venues/venueId/eventId', (req, res) => {
        // pulling some event from events array >> mocking
        res.json(events.slice(0,2))
})
app.listen(port, () => {
  console.log('App listening on port 3000!')
})
