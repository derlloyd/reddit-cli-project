var request = require('request');

/*
This function should "return" the default homepage posts as an array of objects
*/
function getHomepage(callback) {
  // Load reddit.com/.json and call back with the array of posts
    var address = "http://reddit.com/.json";
    request(address, function(err, result) {
        var resultObj = JSON.parse(result.body);
        if (typeof callback === "function") {
            callback(resultObj.data.children);
        }
    })
}


/*
This function should "return" the default homepage posts as an array of objects.
In contrast to the `getHomepage` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedHomepage(sortingMethod, callback) {
  // Load reddit.com/{sortingMethod}.json and call back with the array of posts
  // Check if the sorting method is valid based on the various Reddit sorting methods
    if (sortingMethod === "hot" || 
        sortingMethod === "new" ||
        sortingMethod === "rising" ||
        sortingMethod === "controversial" ||
        sortingMethod === "top" ||
        sortingMethod === "gilded" ||
        sortingMethod === "wiki" ||
        sortingMethod === "promoted") {
        var sort = sortingMethod;
    }
    else {
        var sort = "hot";
    }
    
    var address = "http://reddit.com/" + sortingMethod + "/.json";
    request(address, function(err, result) {
        var resultObj = JSON.parse(result.body);
        if (typeof callback === "function") {
            callback(resultObj.data.children);
        }
    })
}

getSortedHomepage("controversial", console.log)

/*
This function should "return" the posts on the front page of a subreddit as an array of objects.
*/
function getSubreddit(subreddit, callback) {
  // Load reddit.com/r/{subreddit}.json and call back with the array of posts
}

/*
This function should "return" the posts on the front page of a subreddit as an array of objects.
In contrast to the `getSubreddit` function, this one accepts a `sortingMethod` parameter.
*/
function getSortedSubreddit(subreddit, sortingMethod, callback) {
  // Load reddit.com/r/{subreddit}/{sortingMethod}.json and call back with the array of posts
  // Check if the sorting method is valid based on the various Reddit sorting methods
}

/*
This function should "return" all the popular subreddits
*/
function getSubreddits(callback) {
  // Load reddit.com/subreddits.json and call back with an array of subreddits
}

// Export the API
module.exports = {
  // ...
};
