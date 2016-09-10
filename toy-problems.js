/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
var plusOneSum = function(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i] + 1;
  }
  return sum;
}
console.log(plusOneSum([1, 2, 3, 4]));


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

function flatten(array) {

  var flatArray = [];

  for(var i = 0; i < array.length; i++) {
      var arrayElement = array[i];
      if(Array.isArray(arrayElement)) {
        var tempArray = flatten(arrayElement);
        for(var j = 0; j < tempArray.length; j++) {
          flatArray[flatArray.length] = tempArray[j];
        }
      } else {
        flatArray[flatArray.length] = arrayElement;
      }
  }
  return flatArray;
}

console.log(flatten([1, 2, [3, [4], 5, 6], 7]));


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var letterNumArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3", "d1", "d2", "d3"];

function regroup(array) {

  function reverseString(string) {
    return string.split("").reverse().join("");
  }

  //Reverse the order of the strings in each element
  for(var i = 0; i < array.length; i++) {
    array[i] = reverseString(array[i]);
  }
  //Sort them so that they are in alphanumeric order
  array.sort();

  //Reverse each element again
  for(var i = 0; i < array.length; i++) {
    array[i] = reverseString(array[i]);
  }
  return array;
}

console.log(regroup(letterNumArray)); //result: ["a1", "b1", "c1", "d1", "a2", "b2", "c2", "d2", "a3", "b3", "c3", "d3"]


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

var positiveIntegersArray = [2, 3, 8, 23, 98, 1, 54, 355, 84, 5];


function playWithNumbersArray(myArray) {

  console.log("myArray: " + myArray);

  var newArray = shuffleAndTakeAway(myArray);
  console.log("myArray: " + myArray);
  console.log("newArray: " + newArray);

  return findMissing(myArray, newArray);


  function shuffleAndTakeAway(array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
      var currentElement = array[i];
      var switchWithIndex = getSwitch(i, array.length - 1);
      newArray[i] = array[switchWithIndex];
      newArray[switchWithIndex] = currentElement;
    }

    newArray.splice(newArray.length - 1, 1);
    return newArray;
  }

  function getSwitch(originalNum, maxNum) {
    var random = 0;
    do {
      random = Math.floor(Math.random() * (maxNum + 1));
    } while (random === originalNum);
    return random;
  }

  function findMissing(firstArray, secondArray) {

    for(var i = 0; i < firstArray.length; i++) {
        if(secondArray.indexOf(firstArray[i]) === -1) {
          return firstArray[i];
        }
    }

    return "";
  }

}


console.log("what's missing: " + playWithNumbersArray(positiveIntegersArray));



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
