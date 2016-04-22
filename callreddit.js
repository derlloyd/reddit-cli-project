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
    name: 'List all subreddits',
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
                reddit.sortSubredditsOptions(listOfSubs);
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
        console.log(obj.data.author);
        console.log("________________________________")
    });
    getUserChoice();
}

function listOfSubs(newArray) {
    newArray.forEach(function(obj) {
        console.log(obj.data.title.red.bold);
        console.log(obj.data.url.blue.underline);
        // console.log("Upvotes: " + obj.data.ups);
        // console.log(obj.data.author);
        console.log("________________________________")
    });
}




getUserChoice();