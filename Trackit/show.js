function showList (list) {

  var $ul = $('ul'); // tell jQuery to select the ul (Unordered List)

  if ($ul.length == 0) console.error('You are missing a <ul></ul> in your index.html');

  // update HTML
  $ul.html( makeListHTML(list) ); // html is a jQuery function 

  // add behaviour to the list items
  $('li').on('click', function()
             {
    var personId = $(this).attr('id')
    var person = list[personId]
    showProfile(person)
  })
}

function showProfile (person) {
  var personHTML = makePersonHTML(person)

  $('#person').html(personHTML)

  $('#home').hide();
  $('#details').show();
}

function makeListHTML (list) {
  var html = '' // empty for now, we'll add HTML as we loop through the list 
  var total = list.length

  // loop through list
  var counter = 0
  while (counter < total) 
  {
    var person = list[counter]
    var li = makeListItemHTML(person, counter)

    // add the list item to the html
    html += li

    // update the counter, to avoid infinite loops!
    counter = counter + 1
  }
  return html
}

function makeListItemHTML (country, index) 
{
  // li = List Item
  var li  = '<li id="' + index + '">' 
  + '<img src="'+ country.image + '">'
  + '<h2 class="country">' + country.name + '</h2>' 
  + '</li>'        

  return li        
}

function makePersonHTML (country) {
  /*
    This function creates some nice HTML around the person's data
    Return something like this:
    <h2>Yuki</h2>
    <img src="http://cdn.themill.com/media/00000010245.jpg">
    <div class="about">
        I make cakes for parties and special occasion. Contact me about your next cake!
    </div>
    <button id="submit">Message Yuki now</button>
  */

  var html = '<h2 class="country">' + country.name  + '</h2>' 
  + '<img src="' + country.image + '">' 
  + '</div>'
  + '<button>' + '<a class="buttontext" target="_blank" href="'+ country.wikipage + '">Know more about ' + country.name  +  '</a>' + '</button>' 


  return html        
}