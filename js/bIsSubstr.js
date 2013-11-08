function bIsSubstr(A, B){
	if(A.length === 0){
		return (B.length === 0);
	}
	else if(B.length === 0){
		return false;
	}

	var i = 0,
		j = 0
	;

	while(i < A.length && j < B.length){
		if(A[i] === B[j]){
			++i;
			++j;
		}
		else{
			++i;
		}
	}

	return (j === B.length);
}


var A = "",
	B = "x"
;

var answer = bIsSubstr(A,B);

document.writeln("Answer: " + answer);

