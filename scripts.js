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


}
