var request = require('request');

function callReddit(address, callback) {
    request(address, function(err, result) {
        var resultObj = JSON.parse(result.body);
        if (typeof callback === "function") {
            callback(resultObj.data.children);
        }
    })
}


/*
This function should "return" the default homepage posts as an array of objects
*/
function getHomepage(callback) {
  // Load reddit.com/.json and call back with the array of posts
    var address = "http://reddit.com/.json";
    callReddit(address, callback);
}


/*
This function should "return" the default homepage posts as an array of objects.
In contrast to the `getHomepage` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedHomepage(sortingMethod, callback) {
  // Load reddit.com/{sortingMethod}.json and call back with the array of posts
  // sorting method chosen froma - list already validated
    var address = "http://reddit.com/" + sortingMethod + "/.json";
    callReddit(address, callback);
}


/*
This function should "return" the posts on the front page of a subreddit as an array of objects.
*/
function getSubreddit(subreddit, callback) {
  // Load reddit.com/r/{subreddit}.json and call back with the array of posts
    var address = "http://reddit.com/r/" + subreddit + ".json";
    callReddit(address, callback);
}
    

/*
This function should "return" the posts on the front page of a subreddit as an array of objects.
In contrast to the `getSubreddit` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedSubreddit(subreddit, sortingMethod, callback) {
  // Load reddit.com/r/{subreddit}/{sortingMethod}.json and call back with the array of posts
  // sorting method chosen froma - list already validated
    var address = "http://reddit.com/r/" + subreddit + "/" + sortingMethod + ".json";
    callReddit(address, callback);
}



/*
This function should "return" all the popular subreddits
*/
function getSubreddits(callback) {
  // Load reddit.com/subreddits.json and call back with an array of subreddits
    var address = "http://reddit.com/subreddits.json";
    callReddit(address, callback);
}

function getSortedSubreddits(sortingMethod, callback) {
  // Load reddit.com/subreddits.json and call back with an array of subreddits
    var address = "http://reddit.com/subreddits/" + sortingMethod + ".json";
    callReddit(address, callback);
}


// Export the API
module.exports = {
    getHomepage: getHomepage, // do not need
    getSortedHomepage: getSortedHomepage,
    getSubreddit: getSubreddit, // do not need
    getSortedSubreddit: getSortedSubreddit,
    getSubreddits: getSubreddits, // do not need
    getSortedSubreddits: getSortedSubreddits
};
