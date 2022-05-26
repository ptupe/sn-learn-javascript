//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString(); // <<< .toString converts variable i to a string
gs.info(typeof i);
gs.info(typeof iStr); 
gs.info(typeof iStr + ' iStr=' + iStr + ' & iStr + 2 =' + (iStr+2)); // <<< addition of integer 2 with a string gives incorrect results
var n = parseInt(iStr); // <<< parseInt(iStr) converts variable iStr to an integer
gs.info(typeof n + ' n=' + n + '& n + 2 =' + (n+2));
var f = parseFloat(iStr); // <<< parseFloat(iStr) converts variable iStr to a float
gs.info(typeof f + ' f=' + f + '& f + 2.4 =' + (f+2.4));


// Exercise - 3 string variables , print lengths, concatenate them, print length of new string
var a = 'JavaScript';
var b = 'with';
var c = 'Chuck';
gs.info(a.length +'+'+ b.length +'+'+ c.length);
var conCat = a + b + c;
gs.info(typeof conCat + ' conCat=' + conCat + ' & it\'s length is' + conCat.length);
var conCatNew = a +'\n'+ b +'\n'+ c;
gs.info(typeof conCatNew + ' conCatNew=\n' + conCatNew + ' & it\'s length is' + conCatNew.length);
