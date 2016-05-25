var databaseURL = "https://codeyourapp2.firebaseio.com/";

var database = new Firebase( databaseURL );






var form = jQuery( 'form' ); // use jQuery to select the <form>
var person = {}; // we'll use jQuery to grab the data from the <form> and store it inside person

// when you submit the form...
form.submit( function( event ) 
{
  // stop this from reloading
  event.preventDefault();

  // put the form data inside person 
  person = form.serializeJSON( {parseBooleans: true, parseNumbers: true, checkboxUncheckedValue: "false"} );

  // log what's inside person
  console.log( person );

  // send person to the database
  database.push( person, onPersonPushed );
});

function onPersonPushed( error, data ) 
{
  if (!error) 
  {
    alert('Success!');
    document.forms['form'].reset();
     //form[0].reset(); // un-comment this line if you want the form to be cleared from previous values
    console.log('Success!', data);
  }
  else
  {
    alert('Something went wrong, try again!');
    console.error(error);
  }

}

document.getElementById("form").reset();