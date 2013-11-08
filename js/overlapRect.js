// http://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other
// http://silentmatt.com/rectangle-intersection/

function rectOverlap(a, b){
	// assume (x1, y1) is top left of rect

	return (a.x1 <= b.x2) &&	// a's left edge is to the right of b's right edge
	   	   (a.x2 >= b.x1) &&	// a's right edge is to the left of b's left edge
	       (a.y1 <= b.y2) &&	// a's top edge is below b's bottom edge
	       (a.y2 >= b.y1)		// a's bottom edge is above b's top edge
	;
}


var A = {
		x1: 1,
		x2: 3,
		y1: 1,
		y2: 2
	},
	B = {
		x1: 2,
		x2: 6,
		y1: 2,
		y2: 5
	}
;

var answer = rectOverlap(A,B);

document.writeln("Answer: " + answer);
