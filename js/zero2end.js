// Given: array of random ints
// Task: push all 0's to the end of the array
//		 O(1) space
//		 O(n) time

function test(a){
	var b = [1,9,8,4,2,7,6,0,0,0,0];

	for(var i=0; i < a.length; ++i){
		if(a[i] !== b[i])
			return false;
	}

	return true;
}

function zero2end(a){
	var count = 0;

	for(var i=0; i < a.length; ++i){
		if(a[i] !== 0)
			a[count++] = a[i];	
	}	


	while(count < a.length)
		a[count++] = 0;
}


var A = [1,9,8,4,0,0,2,7,0,6,0];

zero2end(A);

document.writeln("Answer: " + A);
document.writeln("Test: " + test(A));
