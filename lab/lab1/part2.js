/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function(x) { return 1;
};

console.log('justOne success:', justOne(3) === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(x)
  {
  if (x%2 === 0)
  {
    return true;
  }
  else {
  return false;
}
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(z) {
  return isEven(justOne(z));

};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(x) {
  if ( x === false)
  return true;
  else {
    return false;
  }
};

console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(k) {
  if (isEven(k) === false)
    return true;
    else {
      return not(k);
    }
};

console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
NOTE: We expect an error until this function is written properly!
===================== */

var filterOutLessThan10 = function(list) {
var list10 = [];
  for (i=0; i < list.length; i++)
    if( list[i] > 10)
    {
   list10.push(list[i]);
 }
 return list10;
};

var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
console.log('filterOutLessThan10 success:', test);

/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var filter = function(array, isOdd) {
  var filterlist = [];
  var oddList = [];
    for (i=0; i < array.length; i++) {
      if (isOdd(array[i]) === true) {
          filterlist.push(array[i]);
        }
        else {
          oddList.push(array[i]);
        }
        return oddList;
      }
    return list;
};

var test2 = filter([4, 11], isOdd).length === 1 && filter([4, 11], isOdd)[0] === 11;
console.log('filter success:', test2);
