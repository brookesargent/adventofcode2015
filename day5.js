var fs = require('fs');
var filename = 'day5input.txt'
var input = fs.readFileSync(filename, "utf8").trim().split('\n');


var vowelCheck = /[aeiou]/g;
var doubleCheck = /(.)\1+/;
var exclude = /(ab|cd|pq|xy)/;
var repeatCheck = /(..).*\1/;
var spacingCheck = /(.).\1/;
var PartOne = function( word )
	{
		var match = word.match(vowelCheck);
		
		return (match !== null && match.length >= 3
			&& doubleCheck.test(word)
			&& !exclude.test(word));
	};

var PartTwo = function(word)
	{
		return repeatCheck.test(word) && spacingCheck.test(word);
	};
	
console.log(input.filter(PartOne).length);
console.log(input.filter(PartTwo).length);

	




