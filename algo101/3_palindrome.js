function palindrome(str) {

// first i have to pretty the string up.
  // 3 replace functions and toLowerCase() which is self explanatory.
  // the first replace() is a little strange. that is a regular 
  // expression i admittedly had to look up from stack overflow.
  // the second replace is just getting rid of the underscores.
  // which is something the first magic left out.
  // and for the 3rd i have to do it again with spaces. 
  // The 2nd and 3rd replace are for UnderScores and Spaces.
  // both of which i'm sure have some regex answer.
  str = str.replace(/\W/g, '').replace("_", "").replace(' ', '');

 //self explanatory. toLowerCase() is a default in
  // javascript for strings.
 str = str.toLowerCase();
  
 // NOw that the string is pretty, I have to check it against 
  // the reverse of itself. Ultimately FCC just wants a boolean 
  // returned back. so...
   return (str === str.split("").reverse().join("")); 
}
palindrome("not a palindrome");
palindrome("racecar");
palindrome("Ra_c*^* ecar");


