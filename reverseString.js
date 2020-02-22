/* Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string. */

function reverseString(str) {
  if (str.length === 1) {
    return str[0];
  }
  return str.split("").pop() + reverseString(str.substring(0, str.length - 1));
}
console.log(reverseString("warrior"));
