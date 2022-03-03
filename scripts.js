function newItem(){

  // 1. Adding a new item to the list of items:

  let li = $('<li></li>');
  // inputValue defined by val function on #input class
  let inputValue = $('#input').val();
  // Adds inputValue to li
  li.append(inputValue);

  if (inputValue === '') {
    alert("Please write something");
  } else {
    $('#list').append(li);
  }

  // 2. Crossing out an item from the list of items:

  // Changes li class to strike. CSS adds 'line through
  function crossOut() {
    li.toggleClass("strike");
  }
  // eventListener calls crossOut, then toggles li class
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  // 3(i). Adding the delete button "X":

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  // Creates the X
  crossOutButton.append(document.createTextNode('X'));
  // Adds to li element
  li.append(crossOutButton);

  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  function deleteListItem(){
    // Adds CSS class to be not visible anymore
    li.addClass("delete")
  }
  
  // Function deleteListItem is activated with a click on the button
  crossOutButton.on("click", deleteListItem);

  // 4. Reordering the items:
  $('#list').sortable();

}
