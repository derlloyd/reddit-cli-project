
// var newArray = [{
//     id: 001
// }, {
//     id: 002
// }, {
//     id: 003
// }]

// function listOfSubreddits(x) {
//     var subredditChoice = x.map(function(obj) {
//         var rObj = {};
//         rObj["name"] = obj.id;
//         rObj["value"] = obj.id;
        
//     })
//     console.log(subredditChoice);
// }


// listOfSubreddits(newArray);


var newArray = [{
    key:1, data:{title: "first", id: 001}
    
}, {
    key:2, data:{title: "second", id: 002}
    
}, {key:3, data: {title: "third", id: 003}
    
}];

var subredditChoice = newArray.map(function(obj){ 
   var rObj = {};
   rObj["name"] = obj.data.title;
   rObj["value"] = obj.data.id;
   return rObj;
});

console.log(newArray);
console.log(subredditChoice);