// console.log('Hello world! again');
var value = null;
var type = null;

value = '123'; // assign value '123' into variable value
type = typeof value; // finds out that value is a string and assign strings into type
console.log(type);
console.log(value);


value = '123 Times Square';

console.log(value);
type = typeof value;
console.log(type);


value = '12.3';

console.log(value);
type = typeof value;
console.log(type);



value = 'true';

console.log(value);
type = typeof value;
console.log(type);


value = true;

console.log(value);
type = typeof value;
console.log(type);



value = { foo: "bar" };

console.log(value);
type = typeof value;
console.log(type);


value = [1, 2, 3];

console.log(value);
type = typeof value;
console.log(type);









//123
//'123 Times Square'
//12.3
//true
//'true'
//[1, 2, 3]
//{ foo: 'bar' }
//document

function say_hello() { //declare the function
console.log('hello aggain')
}
say_hello(); //call function

function say_hello_to(whom) {// prints the results of putting together hello and argument
console.log('Hello, ' + whom);
}
say_hello_to('universe')

function print_type(value) {

    console.log(value);
    type = typeof value;
    console.log(type);
    console.log('"The type of \'' + value + '')
}
print_type('123');
print_type(123);
print_type('123 Times Square');
print_type(12.3);
print_type(true);
print_type( 'true')



function get_type(value) {
type = typeof value;//assign the type off value to variable
return type; // returned the type as it was assigned

}
var type = get_type('123');
console.log(type);