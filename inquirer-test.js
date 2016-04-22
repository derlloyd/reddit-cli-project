var inquirer = require('inquirer');

// var menuChoices = [
//   {name: 'Show homepage', value: 'HOMEPAGE'},
//   {name: 'Show subreddit', value: 'SUBREDDIT'},
//   {name: 'List subreddits', value: 'SUBREDDITS'}
// ];

// inquirer.prompt({
//   type: 'list',
//   name: 'menu',
//   message: 'What do you want to do?',
//   choices: menuChoices
// }).then(
//   function(answers) {
//     console.log(answers);
//   }
// );

inquirer.prompt(questions, function(answers){

  console.log(answers); //an object containing the user response.

});


var questions = [{
  name: 'firstName',
  message: 'What is your first name?'
}, {
  name: 'operatingSystem',
  message: 'What is your operating System?',
  default: 'Windows'
}, {
  name: 'favoriteColor',
  message: 'What is your favorite rainbow Color?',
  type: 'input'
  // choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
  // filter: function (str){
  //   return str.toLowerCase();
}
]
