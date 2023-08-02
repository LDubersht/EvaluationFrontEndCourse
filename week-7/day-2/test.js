const moment = require('moment')
//import moment from "moment"
console.log(new Date())
let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017
const urllib = require('urllib')

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})