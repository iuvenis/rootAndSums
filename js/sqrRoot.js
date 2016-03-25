function SquareFinder(input){
var sum      = 0;
var sqrRoot  = 0;
var allRoots = 0;

  if(typeof(input) !== "number"){
    return false;
  } else {
    sqrRoot = Math.sqrt(input);
    for (var i = 1; input >= i; i++){
        allRoots = Math.sqrt(i);
        sum+=allRoots;
    }
  }
  return {
  sum:sum,
  sqrRoot:sqrRoot
  };
}

module.exports = SquareFinder;
