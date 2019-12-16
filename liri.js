// STARTING TO BUILD THE LIRI BOT

// NEED TO CONNECT THE SPOTIFY API

//NEED TO CONNECT THE OMBD

// DOWNLAD MAKE AXOIS PACKAGE FOLDER

// ADD MOMENT 
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

var [node, file, ...argsLiri] = process.argv
const action = argsLiri[0];
const name = argsLiri.slice(1).join(" ");

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
StartLiri(action, name)
function spotifyThis(songName) {
    if (songName == undefined) {
        songName = "The sign"
    }
    spotify.search({ type: 'track', query: songName, limit: 5 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        if (data.tracks.items.length == 0) {
            console.log("Wrong song name")
        }


        //console.log(data.tracks.items[0]); 
        songs = data.tracks.items
        for (var i = 0; i < songs.length; i++) {
            console.log("Song name:" + songs[i].name);
            console.log("artist name: " + songs[i].artists[0].name);
            console.log("Preview Song: " + songs[i].preview_url);
            console.log("Album Name: " + songs[i].album.name);
            console.log(" ________________");
        }
    });

}
function getMyBandsInfo(bandName) {
    var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (res) {
        const bandsArray = res.data;

        for (var i = 0; i < 5; i++) {
            console.log("Venue: " + bandsArray[i].venue.city + " " + bandsArray[i].venue.region + " " + bandsArray[i].venue.name)
            console.log("Show date time: " + moment(bandsArray[i].datetime).format("MM/DD/YY hh:mm A"))
            console.log("______________________________");
        }

    })
}
function movieThis(movieName) {
    var queryURL = "https://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";
    axios.get(queryURL)
        .then(function (response) {
            // console.log(response);
            const movieArray = response.data

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
function doWhatItSay(){
    var fs = require("fs");
    fs.readFile("random.txt","utf8", function(err, data){
        if(err)
        {
            console.log("err while reading the file")
        }
        var dataArr = data.split(",");
        console.log(dataArr)
        StartLiri(dataArr[0], dataArr[1]);
    })
}



