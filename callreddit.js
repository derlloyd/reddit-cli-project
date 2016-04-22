var inquirer = require('inquirer');
var reddit = require('./reddit.js')


var menuChoices = [
  {name: 'Show homepage', value: 'HOMEPAGE'},
  {name: 'Show subreddit', value: 'SUBREDDIT'},
  {name: 'List subreddits', value: 'SUBREDDITS'},
  {name: 'Exit', value: 'EXIT'}
];

var sortOptions = [
  {name: 'hot'},
  {name: 'new'},
  {name: 'rising'},
  {name: 'controversial'},
  {name: 'top'},
  {name: 'gilded'},
  {name: 'wiki'},
  {name: 'promoted'}
];


inquirer.prompt({
  type: 'list',
  name: 'menu',
  message: 'What do you want to do?',
  choices: menuChoices
}).then(
  function(answers) {
    if (answers === 'HOMEPAGE') {
        // reddit.getHomepage(console.log);
    }
    else if (answers === 'SUBREDDIT') {
        reddit.getSortedSubreddit()
    }
    
    
    console.log(answers);
  }
);
