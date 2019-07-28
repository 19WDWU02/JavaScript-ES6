//Variables
// ES5
var originalVariable = 'hello';

// ES6
const price = 10;
let totalPrice = 0;
totalPrice = price + totalPrice;
console.log(totalPrice);

//Functions
// ES5
function oldWay(){
  console.log('this is the old way');
}
oldWay();

console.log('----------')
// ES6
const newWay = () => {
  console.log('this is the new way');
}
newWay();

//ES5
function oldWayMyName(name){
  console.log('My name is ' + name);
}
oldWayMyName('richard');


// newWayMyName = (name) => {
//   console.log(`My name is ${name}`);
// }

newWayMyName = name => console.log(`My name is ${name}`);
newWayMyName('richard');


console.log('----------')
//Loops and Maps
const names = ['Richard', 'Brayden', 'John', 'Andy'];

//ES5
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//ES6
names.map(function(person){
  console.log(person);
});

names.map(function(person, i){
  console.log(i);
  console.log(person);
});


//Object
console.log('----------')
const me = {
  name: 'richard',
  gender: 'male',
  colour: 'red'
}

//ES5
console.log(me.name);
console.log(me['gender']);
console.log(me.colour);

//ES6
const {name, gender, colour} = me;
console.log(name);
console.log(gender);
console.log(colour);
console.log(name, gender, colour);
