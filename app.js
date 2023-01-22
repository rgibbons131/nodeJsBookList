//app.js is the Node server that runs on the local machine. This Server has some of the books that I have read

//This gathers the different modules that are required for running the server. http allows the server to be found,
//    cors is required for the localhost / live server interaction, and express allows some easier interaction with the server
const http = require("http");
const cors = require('cors');
const express = require("express");
const app = express();
app.use(cors());


// This is an object that represents some of the books I have read recently
const books = {
	"Brandon Sanderson": ["Elantris", "Mistborn: The Final Empire", "Mistborn: The Well of Assension", "Mistborn: The Hero of Ages", "Warbreaker", "The Way of Kings", "The Alloy of Law", "Words of Radiance", "Shaddows of Self", "The Bands of Mourning", "Oathbringer", "Rythm of War", "The Lost Metal"],
	"Frank Herbert": ["Dune", "Dune, Messiah"]
}
// Defining get request
app.get('/', function(req, res) {
    
    //Using the end method here allows the web page to know the server is done writing
    res.end(JSON.stringify(books))
});

//This is the server waiting for the Javascript to reach out to it
app.listen(8080, () => {
    console.log('Our express server is up on port 8080')});
