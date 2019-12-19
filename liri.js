// STARTING TO BUILD THE LIRI BOT
// "LINKING THE API KEYS TO THE APPLICATION"
require("dotenv").config();
var keys = require("./keys.js");
// "PACKAGE FOR SPOTIFY API"
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// "PACKAGE FOR AXIOS"
var axios = require("axios");
// "PACKAGE FOR MOMENT"
var moment = require("moment");
//"ES6 SHORT-HAND THIS ALLOWS THE USER TO ENTER MULTIPLE WORDS ON THE COMMAND LINE; AND THE APPLICATION WILL READ AND JOIN THE WORDS"
var [node, file, ...argsLiri] = process.argv
const action = argsLiri[0];
const name = argsLiri.slice(1).join(" ");
// "FUNCTION TO BEGIN THE APPLICATION: THE SWTICH STATEMENTS ARE THE COMMANDS SET TO EACH FUNCTION TO BE PERFOMED."
// "TWO PARAMETERS ARE BEING PASSED INTO THE FUNCTION, ACTION=IS THE FUNCTION TO BE PERFORMED & THE NAME IS THE USER INPUT"
function StartLiri(action, name) {
    switch (action) {
        case "concert-this": getMyBandsInfo(name);
            break;
        case "spotify-this-song": spotifyThis(name);
            break;
        case "movie-this": movieThis(name);
            break;
        case "do-what-it-says": doWhatItSay();
            break;
        default: console.log("Please check the command once again")
    }
}
// "CALLING THE FUNCTION TO BE ABLE TO EXIQUITE WHEN NEEDED!"
StartLiri(action, name)
// "SECOND FUNCTION IS THE SPOTIFY API / INSTEAD OF USING THE AJAX CALL WE LINK THE SPOTIFY AND USE THE PROMISE TO PULL THE OBJECT OF INFORMATION TO BE DISPLAYED."
function spotifyThis(songName) {
    if (songName === undefined) {
        songName === "The Sign"
    }
    // "HOW WE ARE QUERYING THE URL TO FIND THE INFORMATION REQUESTED"
    spotify.search({ type: 'track', query: songName, limit: 5 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        if (data.tracks.items.length == 0) {
            console.log("Wrong song name")
        }
        // "USED THE FOR LOOP TO LOOP THROUGH THE RETURNED DATA AND CONSOLED LOGGED THE RESPONSE."
        // "SONGS NOW STORES THE RESPONSE TRACKS AND ITEMS"
        songs = data.tracks.items
        for (var i = 0; i < songs.length; i++) {
            console.log(" ___________________________________________");
            console.log("Song name:" + songs[i].name);
            console.log("artist name: " + songs[i].artists[0].name);
            console.log("Preview Song: " + songs[i].preview_url);
            console.log("Album Name: " + songs[i].album.name);
            console.log(" ===========================================");
        }
    });

}
// "THIRD FUNCTION IS THE BANDS IN TOWN API"
// "BANDNAME NOW HOLDS THE PROCESS.ARGV THE ES6 SHORT TAKES IN: AND MAKES A REQUEST TO APPLICATION".
function getMyBandsInfo(bandName) {
    var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    // "USING AXIOS WE GRAB THE RESPONSE FROM THE QUERY AND THE PASS THE RESPONSE AS RES AND LOOP THROUGH THE DATA TO BE DISPLAYED"
    axios.get(queryURL)
        .then(function (res) {
            const bandsArray = res.data;

            for (var i = 0; i < 5; i++) {
                console.log(" ___________________________________________");
                console.log("Venue: " + bandsArray[i].venue.city + " " + bandsArray[i].venue.region + " " + bandsArray[i].venue.name)
                console.log("Show date time: " + moment(bandsArray[i].datetime).format("MM/DD/YY hh:mm A"))
                console.log(" ___________________________________________");
            }

        })
}
// "FOURTH FUNCTION CALLS THE OMBD TO GET THE MOVIE TITLE INFORMATION REQUESTED."
function movieThis(movieName) {
    var queryURL = "https://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";
    axios.get(queryURL)
        .then(function (response) {
            // console.log(response);
            const movieArray = response.data
            console.log("-------------------------------------------")
            console.log("Movie Title : " + movieArray.Title)
            console.log("Release Year : " + movieArray.Year)
            console.log("IMDB Rating : " + movieArray.imdbRating)
            console.log("Rotten Tomatoes : " + movieArray.Metascore)
            console.log("Country of Produciton Origin : " + movieArray.Country)
            console.log("Language  : " + movieArray.Language)
            console.log("Plot  : " + movieArray.Plot)
            console.log("Starring  : " + movieArray.Actors)
            console.log("-------------------------------------------")

        })
}
// "FIFTH FUNCTION - HERE WE ARE READING WHAT IS ON THE RANDOM.TXT DOC AND WITH INFORMATION PROVIDED WE ARE CALLING THE SPOTIFY FUNCTION OR/ FIRST FUNCTION!"
function doWhatItSay() {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            console.log("err while reading the file")
        }
        var dataArr = data.split(",");
        console.log(dataArr)
        StartLiri(dataArr[0], dataArr[1]);
    })
}



