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
                sortHomeOptions()
            }
            else if (answers.menu === 'SUBREDDIT') {
                sortSubredditOptions()
            }
            else if (answers.menu === 'SUBREDDITS') {
                sortSubredditsOptions()
            }
            else if (answers.menu === 'EXIT') {
                return;
            }
        }
    )
}

function sortHomeOptions() {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select a sorting method',
        choices: ['hot', 'new', 'rising', 'controversial', 'top', 'gilded', 'wiki', 'promoted'],
        default: 'hot'
    }).then(
        function(selection) {
            reddit.getSortedHomepage(selection.choice, console.log)    
        }
    )
}


function sortSubredditOptions() {
    inquirer.prompt([{
        type: 'input',
        name: 'subred',
        message: 'Input a subreddit name',
    }, {
        type: 'list',
        name: 'sort',
        message: 'Select a sorting method',
        choices: ['hot', 'new', 'rising', 'controversial', 'top', 'gilded', 'wiki', 'promoted'],
        default: 'hot'
    }]).then(
        function(selection) {
            reddit.getSortedSubreddit(selection.subred, selection.sort, console.log)    
        }
    )
}


function sortSubredditsOptions() {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select a sorting method',
        choices: ['hot', 'new'],
        default: 'hot'
    }).then(
        function(selection) {
            reddit.getSortedSubreddits(selection.choice, console.log)    
        }
    )
}



getUserChoice();