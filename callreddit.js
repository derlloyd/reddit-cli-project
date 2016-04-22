var inquirer = require('inquirer');
var reddit = require('./reddit.js')


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
                reddit.sortHomeOptions(listObject);
            }
            else if (answers.menu === 'SUBREDDIT') {
                reddit.sortSubredditOptions(listObject);
            }
            else if (answers.menu === 'SUBREDDITS') {
                reddit.sortSubredditsOptions(listObject);
            }
            else if (answers.menu === 'EXIT') {
                return;
            }
        }
    )
}

function listObject(obj) {
    console.log(typeof obj);
}


console.log(typeof getUserChoice());