/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
// week 2, lab2 part 1
var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
  var exampleSum = 0;
_.each(theArray, function(datum) {
  if (typeof datum === "string")
  {
  exampleSum = exampleSum + datum.length;
  }
  else if (typeof datum === "number")
  {
  exampleSum = exampleSum + datum;
  }
  else
  {
    console.log("Not sure how to proceed " , datum);
  }
});
console.log(exampleSum);

//Week 2, Lab1, part2


_.each(_.range(1,101), function(num) {
  if( num % 3===0 && num % 5===0)
  {
    console.log("FizzBuzz");
  }
  else if(num % 3=== 0)
  {
    console.log("Fizz");
  }
  else if (num % 5 === 0)
  {
    console.log("Buzz");
  }
  else
  {
  console.log(num);
  }
});


// for( var i = 1; i <101; i++) {
//     if(i%3 && i%5 === 0) {
//       console.log("FizzBuzz");
//     }else if(i%5 ===0) {
//       console.log("Buzz");
//     }else if(i%3 === 0) {
//       console.log("Fizz");
//       }else{
//         console.log(i);
//       }
//       };
