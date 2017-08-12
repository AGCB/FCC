
function chunkArrayInGroups(arr, size) {
  var output = [];
  for(var i =0; i<arr.length;i+=size) {
    output.push(arr.slice(i,i+size));
  }
  return output;
}
//notice that with this algo, we leave arr unmodified. 
//slicing from i lets us get away with this. 
//every iteration increases i not just by 1 (like most of my forLoops do, but by i+=size)
