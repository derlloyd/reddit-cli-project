var inquirer = require('inquirer');
var reddit = require('./reddit.js')
require('colors')


var menuChoices = [{
    name: 'Show homepage',
    value: 'HOMEPAGE'
}, {
    name: 'Show subreddit',
    value: 'SUBREDDIT'
}, {
    name: 'List subreddits',
    value: 'SUBREDDITS'
}, {
    name: 'Exit',
    value: 'EXIT'
}];

function getUserChoice() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: menuChoices
    }).then(
        function(answers) {
            if (answers.menu === 'HOMEPAGE') {
                reddit.sortHomeOptions(listOfPosts);
            }
            else if (answers.menu === 'SUBREDDIT') {
                reddit.sortSubredditOptions(listOfPosts);
            }
            else if (answers.menu === 'SUBREDDITS') {
                reddit.sortSubredditsOptions(listOfSubreddits);
            }
            else if (answers.menu === 'EXIT') {
                return;
            }
        }
    )
}

function listOfPosts(newArray) {
    newArray.forEach(function(obj) {
        console.log(obj.data.title.red.bold);
        console.log(obj.data.url.blue.underline);
        console.log("Upvotes: " + obj.data.ups);
        console.log("Author: " + obj.data.author);
        console.log("-------------------------------------------")
    });
    console.log("-------------------------------------------")
    getUserChoice();
}



function listOfSubreddits(newArray) {
    var subredditChoice = newArray.map(function(obj) {
        var rObj = {};
        rObj["name"] = obj.data.display_name;
        rObj["value"] = obj.data.display_name;
        return rObj;
    });
    
    getUserChoiceOfSubreddit(subredditChoice);
}

function getUserChoiceOfSubreddit(subArray) {
    inquirer.prompt({
        type: 'list',
        name: 'choiceId',
        message: 'Which Subreddit do you want?',
        choices: subArray
    }).then(
        function(answers) {
            reddit.getSubreddit(answers.choiceId, listOfPosts); 
        }
    )
}



getUserChoice();


