function isPalindrome(word) {
  let reverseWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
//console.log(isPalindrome("cook"))
//console.log(isPalindrome("level"))

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  1.Create a variable which will store the word in a reverse form.
    Using for loop, append each letter of the word to the new variable from the last letter of the word to the first one.
  2.compare the new variable with the word being passed as argument.
    If the words match, return true, else return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false")
  console.log("=>", isPalindrome("cat"));

  console.log("");

  console.log("Expecting: false")
  console.log("=>", isPalindrome("javascript"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
