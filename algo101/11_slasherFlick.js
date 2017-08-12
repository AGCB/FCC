
function slasher(arr, howMany) {
 var output = [];
  if (howMany === 0) { 
    output = arr;
  }
  /* I started initially with the logic below (in the else clause) but found that
  I was failing on all of the tests that checked for howMany of 0.
  I hard coded the if statement and put the rest in an else clause.
  */
  else {
     output = arr.splice(howMany,arr.length-1);
  }
 
  return output;
}
