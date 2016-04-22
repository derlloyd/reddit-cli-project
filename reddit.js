var request = require('request');
var inquirer = require('inquirer');

function callReddit(address, callback) {
    request(address, function(err, result) {
        var resultObj = JSON.parse(result.body);
        if (typeof callback === "function") {
            callback(resultObj.data.children);
        }
    })
}

function getSubreddit(subred, callback) {
    var address = "http://reddit.com/r/" + subred + "/.json";
    request(address, function(err, result) {
        var resultObj = JSON.parse(result.body);
        if (typeof callback === "function") {
            callback(resultObj.data.children);
        }
    })
}


function sortHomeOptions(callback) {
    inquirer.prompt({
        type: 'list',
        name: 'sort',
        message: 'Select a sorting method',
        choices: ['hot', 'new', 'rising', 'controversial', 'top', 'gilded'],
        default: 'hot'
    }).then(
        function(selection) {
            var address = "http://reddit.com/" + selection.sort + "/.json";
            callReddit(address, callback);
        }
    )
}


function sortSubredditOptions(callback) {
    inquirer.prompt([{
        type: 'input',
        name: 'subred',
        message: 'Input a subreddit name',
    }, {
        type: 'list',
        name: 'sort',
        message: 'Select a sorting method',
        choices: ['hot', 'new', 'rising', 'controversial', 'top', 'gilded'],
        default: 'hot'
    }]).then(
        function(selection) {
            var address = "http://reddit.com/r/" + selection.subred + "/" + selection.sort + ".json";
            callReddit(address, callback);
        }
    )
}

function sortSubredditsOptions(callback) {
    inquirer.prompt({
        type: 'list',
        name: 'sort',
        message: 'Select a sorting method',
        choices: ['popular', 'new'],
        default: 'popular'
    }).then(
        function(selection) {
            var address = "http://reddit.com/subreddits/" + selection.sort + ".json";
            callReddit(address, callback);
        }
    )
}

// Export the API
module.exports = {
    sortHomeOptions: sortHomeOptions,
    getSubreddit: getSubreddit,
    sortSubredditOptions: sortSubredditOptions,
    sortSubredditsOptions: sortSubredditsOptions
};
