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



function sortHomeOptions(callback) {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select a sorting method',
        choices: ['hot', 'new', 'rising', 'controversial', 'top', 'gilded', 'wiki', 'promoted'],
        default: 'hot'
    }).then(
        function(selection) {
            getSortedHomepage(selection.choice, callback);    
        }
    )
}


function getSortedHomepage(sortingMethod, callback) {
  // Load reddit.com/{sortingMethod}.json and call back with the array of posts
  // sorting method chosen froma - list already validated
    var address = "http://reddit.com/" + sortingMethod + "/.json";
    callReddit(address, callback);
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
        choices: ['hot', 'new', 'rising', 'controversial', 'top', 'gilded', 'wiki', 'promoted'],
        default: 'hot'
    }]).then(
        function(selection) {
            getSortedSubreddit(selection.subred, selection.sort, callback);    
        }
    )
}


function getSortedSubreddit(subreddit, sortingMethod, callback) {
  // Load reddit.com/r/{subreddit}/{sortingMethod}.json and call back with the array of posts
  // sorting method chosen froma - list already validated
    var address = "http://reddit.com/r/" + subreddit + "/" + sortingMethod + ".json";
    callReddit(address, callback);
}



function sortSubredditsOptions(callback) {
    inquirer.prompt({
        type: 'list',
        name: 'sort',
        message: 'Select a sorting method',
        choices: ['hot', 'new'],
        default: 'hot'
    }).then(
        function(selection) {
            getSortedSubreddits(selection.sort, callback);    
        }
    )
}

function getSortedSubreddits(sortingMethod, callback) {
  // Load reddit.com/subreddits.json and call back with an array of subreddits
    var address = "http://reddit.com/subreddits/" + sortingMethod + ".json";
    callReddit(address, callback);
}


// Export the API
module.exports = {
    sortHomeOptions: sortHomeOptions,
    sortSubredditOptions: sortSubredditOptions,
    sortSubredditsOptions: sortSubredditsOptions
};
