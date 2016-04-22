var inquirer = require('inquirer');
var reddit = require('./reddit.js')


var menuChoices = [
  {name: 'Show homepage', value: 'HOMEPAGE'},
  {name: 'Show subreddit', value: 'SUBREDDIT'},
  {name: 'List all subreddits', value: 'SUBREDDITS'},
  {name: 'Exit', value: 'EXIT'}
];

var sortOptions = [
    'hot',
    'new',
    'rising',
    'controversial',
    'top',
    'gilded',
    'wiki',
    'promoted'
];  // default hot

var subSortOptions = [
    'hot',
    'new'
]; // default hot

inquirer.prompt({
  type: 'list',
  name: 'menu',
  message: 'What do you want to do?',
  choices: menuChoices
}).then(
  function(answers) {
    if (answers === 'HOMEPAGE') {
        // sortOptions
        // reddit.getSortedHomepage;
    }
    else if (answers === 'SUBREDDIT') {
        // input subreddit name - test for briken link 
        // sortOptions
        // reddit.getSortedSubreddit
    }
    else if (answers === 'SUBREDDITS') {
        // get subSortOptions
        // reddit.getSortedSubreddits
    }
    else if (answers === 'EXIT') {
        // return to console
    }
    
    
    console.log(answers);
  }
);
