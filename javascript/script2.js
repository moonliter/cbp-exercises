console.log(document);
var my_button = document.getElementById('the-button');
console.log(my_button);


var message_element = document.getElementById('message');
console.log(message_element);
console.log(typeof message_element);

console.log(message_element.innerHTML);


function change_html() {
   message_element.innerHTML = '<em>something</em> happened';
}

var button_counter = 0;
function increase_counter(); {
    var message = 'This button was clicked ' + button_counter + ' times';
    button_counter = button_counter + 1;
    var button = document.getElementById('counter_button');
    button.innerHTML = message;

}
//classname