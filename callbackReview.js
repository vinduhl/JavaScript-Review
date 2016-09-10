/* Declare and Define the functions here that will make the function calls below work properly */

function first(nameArray, callback) {
  callback(nameArray[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last(nameArray, callback) {
  callback(nameArray[nameArray.length - 1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.

function contains(name, nameArray, callback) {
  callback(nameArray.indexOf(name) !== -1);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function map(numbersArray, callback) {
  for(var i = 0; i < numbersArray.length; i++) {
    numbersArray[i] = callback(numbersArray[i]);
  }

  return numbersArray;
}


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
console.log(map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
}));




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function uniq(namesArray, callback) {
  for(var i = namesArray.length - 1 ; i > 0; i--) {
    if(i !== namesArray.indexOf(namesArray[i])) {
      namesArray.splice(i, 1);
    }
  }
  callback(namesArray);
  return namesArray;
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function each(namesArray, callback) {
  for(var i = 0; i < namesArray.length; i++) {
    callback(namesArray[i], i);
  }
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function getUserById(id, usersArray, callback) {
  for(var i = 0; i < usersArray.length; i++) {
    var user = usersArray[i];
    if(user.id === id) {
      callback(user);
      break;
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


function find(numbersArray, callback) {
  for(var i = 0; i < numbersArray.length; i++) {
    if(callback(numbersArray[i])) {
      return numbersArray[i];
    }
  }
}

//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];
console.log(find(numbers, function(num){
  return num % 2 == 0; //should return 2
}));
