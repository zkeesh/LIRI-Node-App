//==========
// LIBRARIES
//==========

var inquirer = require('inquirer');
var Twitter = require('twitter');
var color = require('cli-color'); // for coloring console output to make it easier to read for the user

//====================
// INTIIAL USER INPUT 
//====================

/* var to store the user's selected command*/
var userCommand;

/* this function takes in one of the following commands: 
// my-tweets
// spotify-this-song
using inquirer prompt */
function getCommandFromUser() {
  inquirer.prompt({
    type: 'list',
    choices: ['my-tweets','spotify-this-song', 'movie-this','do-what-it-says'],
    message: 'What can I do for you?',
    name: 'command'
  }).then(function(userData){
    userCommand = userData.command;
    fireActionFromCommand(userCommand);
  });
}