var fs = require('fs');
var filename = 'day2input.txt'
var file = fs.readFileSync(filename, "utf8");
var arr = file.trim().split('\n');


function wrapPresents(arr) {
	var totalSurfaceArea = 0;
	var totalRibbonLength = 0;
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i].toString();
		var tempArr = temp.split('x');
		for (var j = 0; j < tempArr.length; j++) {
		    var l = tempArr[0];
		    var w = tempArr[1];
		    var h = tempArr[2];
		    var lw = l * w;
		    var wh = w * h;
		    var hl = h * l;
		    var calcLeast = [lw,wh,hl].sort(function(a, b) {return a - b;});
			var tempSurfaceArea = 2*lw + 2*wh + 2*hl + calcLeast[0];
		}
		totalSurfaceArea += tempSurfaceArea;
		totalRibbonLength += 2*l + 2*w + 2*h - 2*Math.max(l,w,h) + l*w*h;
	}
	console.log(totalSurfaceArea);
	console.log(totalRibbonLength);
}

wrapPresents(arr);

