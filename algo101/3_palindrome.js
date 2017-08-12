function palindrome(str) {
  // Good luck!
  str = str.replace(/\W/g,'')//letters only
           .replace('_','')//take out underscores
           .toLowerCase()//self-explanatory
           .replace(' ','');//take out spaces
  
  return str===str.split('')
                  .reverse()
                  .join('');//will return true only if 
                            //it is a palindrome
  
}
