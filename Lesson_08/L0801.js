//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString(); // <<< .toString converts variable i to a string
gs.info(typeof i);
gs.info(typeof iStr); 

var n = parseInt(iStr); // <<< parseInt(iStr) converts variable iStr to an integer
gs.info(typeof n + ' n=' + n + '& n + 2 =' + (n+2));
var f = parseFloat(iStr); // <<< parseFloat(iStr) converts variable iStr to a float
gs.info(typeof f + ' f=' + f + '& f + 2.4 =' + (f+2.4));
