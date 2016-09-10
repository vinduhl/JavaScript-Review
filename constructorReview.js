//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function person(name, age, height) {
  return {
    name: name
    , age: age
    , height: height
  };
}


//Create a animal array and a person array.

  //code here
var animalsArray = [];
var personsArray = [];


//Create two instances of Animal and push those into your animal array

  //code here
var dog = new Animal("dog", "Duke", 4, "gray", ["dog food", "carrots", "chicken", "beef"]);
var cat = new Animal("cat", "Sam", 4, "orange", ["cat food", "tuna", "cat treats"]);
animalsArray.push(dog);
animalsArray.push(cat);

//Create two instances of person and push those into your person array.

  //code here
var laura = person("Laura", 35, "5 ft 6 in");
var daniel = person("Daniel", 43, "5 ft 9 in");
personsArray.push(laura);
personsArray.push(daniel);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  if(this.food && this.food.length > 0) {
    alert(this.name + " ate " + this.food[Math.floor((Math.random() * this.food.length - 1) + 1)] + ".");
  }
}

cat.eat();
dog.eat();

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?

  //Answer:
  //No. Because the person function returns an object that is not created using a constructor function, and therefore adding another
  //property to each instance of person via prototype is not possible.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
      It returns an object instance.
  2) What's a good way to describe the keyword 'this'
      The keyword 'this' represents the object context based on what executed the function.
  3) Can a normal function which creates an object and then returns that object use the prototype?
      No. Because the object returned is not created using the 'new' keyword and therefore was not created from a function.
  4) What happens if you forget to use 'new' when calling a constructor?
      It will not return an instance of an object.
*/
