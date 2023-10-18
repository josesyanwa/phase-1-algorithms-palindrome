
  // Write your algorithm here
function isPalindrome(str) {
  return str === str.split(``).reverse().join(``);
}


/* 
  Add your pseudocode here
  -Split string
  -Reverse string
  -Join characters into string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
