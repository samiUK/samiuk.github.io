console.log("app.js ready to roll");

var databaseURL = "https://codeyourapp2.firebaseio.com/";

var database = new Firebase(databaseURL);
// Attach an asynchronous callback to read the data at our posts reference

var peopleList = []; //empty list

database.on("child_added", function(firebaseObject) {
  var person = firebaseObject.val();
  console.log(person);
  
  // push means add to a list
  peopleList.push(person);
});

$('#details').hide();

$('button').click( function() {
  // get user input
  var selectedOption =  $('select').val(); // this is jQuery val()
  // filter people by user selection
  var resultsList = filterAndSortList(peopleList, selectedOption);
  console.log(resultsList);
  // and show the results
  showList(resultsList);
});

$('#back').click( function(){   
  $('#home').show();
  $('#details').hide();
});