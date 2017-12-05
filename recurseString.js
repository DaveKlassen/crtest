#!/usr/bin/env node

/*
 * This is the fastest implementation
 */

function reverseString(string, count) {
  var revStr = "";

   if (count >= (string.length - 1)) {
      revStr += string[count];
      return(revStr);
   } else {
      revStr += reverseString(string, count + 1);
      revStr += string[count];
   }
  return (revStr);
}

function recurseString(string) {
  let len = string.length - 1;
  let count = 0;

  return(reverseString(string, count));
}

function normalReversing(string) {
  let len = string.length - 1;
  let revStr = "";

  for (let i = len; i >= 0; i--) {
    revStr += string[i];
  }

  return (revStr);
}



console.log(reverseString("Haymesh", 0) );
console.log(recurseString("Haymesh") );
console.log(normalReversing("Haymesh") );

