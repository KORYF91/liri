# Liri.boT

--------------------------------------------------------------------------------------------

## How can the Liri bot help you today? 

With a simple click of the enter button liri can search for movies, music, concert information and excute pre-written commands.
This is a console based program and the ultility can be endless. Using a varity of technonlgies and little logic can go along way. This set can make it the internet accessable throgh the command line. This seem like an arcahic way to use or "surf the internet", depending on the code written.

############################################################################################

### What does the Liri.boT actually do??

There are four simple commands that will allow to access the vast knowledge the Liri.boT holds. To use the built-in commands you will need to declare node (command name) and then what you are wanting to search. By combining the a few methods and calling functions into play, we are able to use and query API's in other ways. we are also able to read and write to files and store them on where needed. WARNING - all the installs can crash your computer but you just need to be careful and keep this in mind, the more packages required the more space is take on the computers hard-drive. 

############################################################################################

Command 1 - movie-this. this function will search the OMBD which is an opensource movie database to provide the information requested. Using the command node liri.js (the function)--> movie-this and (what you want to search)--> the lion king.

THE RESPONSE - once the search is executed information presented back will be 
* Movie(s)

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

+++ EXAMPLE +++ 

![image1](/images/movie.this.example.png)

############################################################################################

Command 2 - spotify-this-song - Starting with creating a json package file I installed the stopify api for node from the NPM.
 ++[npm (Click the Link here)](https://www.npmjs.com/package/node-spotify-api)++
![image2](/images/spotify.web.png)

Once the packages is required and installed we were able to code the responses from the returned data.  this search simliar to command 1 requires node liri.js spotify-this-song and the song name.

THE RESPONSE - 
* Artist(s)

 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from

* If no song is provided then your program will output "Wrong song name".
* If no song is provided then your program will default to "The Sign" by Ace of Base.
## +++ EXAMPLE +++ 

![image3](/images/spotify.this.song.png)

## +++ ERROR +++

![image4](/images/err.spotify.this.song.png)

############################################################################################

Command  3 - concert-this. This function will allow to access the bands in town api and search for your favorite artist and/or band and provide the upcoming tour-dates if available. This function uses the moment method in order to display the times and date properly. which was another package we had to install and initailize in order to use.


THE RESPONSE - 
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

## +++ EXAMPLE +++ 

![image5](/images/concert.this.exam.png)

############################################################################################
 
Command 4 - do-what-it-says. This one might seem more complicated than it is. It's actually very self-explaintory. You using the command node liri.js do-what-it-says, this function access the text file linked and uses the information in the file to execute one the command functions.


THE RESPONSE - 
* Artist(s)

 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from

* If no song is provided then your program will output "Wrong song name".
* If no song is provided then your program will default to "The Sign" by Ace of Base.

## +++ EXAMPLE +++ 

![image6](/images/do.what.says.png)

############################################################################################