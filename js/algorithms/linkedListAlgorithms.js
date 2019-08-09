	class Node {
		constructor(val, next) {
			this.val = val;
			this.next = next;
		}
	}

	function print(node) {
		console.log('NodeList');
		
		do {
			console.log(' ', node.val);
		}
		while(node = node.next);
	}

	function reverse(node) {
		let i = node;
		let j = node.next;
		let prev = i;
		let next;

		i.next = undefined;  // point at previous node

		while(j) { // not at end of list
			console.log(i, j);

			next = j.next;
			j.next = i; // point at previous node

			i = j;
			j = next;
			prev = i;
		}

		return prev;
	}


	let c = new Node('c');
	let b = new Node('b', c);
	let a = new Node('a', b);

	print(a);
	let newHead = reverse(a);
	print(newHead);

linkedListAlgorithms = function () {
	return {
		init: function(){
		    that = this

            var g = new Node('g', null)
            var f = new Node('f', g)
            var e = new Node('e', f)
            var d = new Node('d', e)
		    var c = new Node('c', d)
		    var b = new Node('b', c)

		    head = new Node('a', b)

		    print()
		},

		findThirdFromLast: function () {
		    var i = 0,
                result = head,
                ptr = head

		    while(ptr != null){
		        if(i++ >= 3)
		            result = result.next

                ptr = ptr.next
		    }

            return result
		}
	}

    var that = null,
        head

    function print() {
        var n = head,
            str = ''

	    while(n != null){
	        str += n.val + ' --> '
            n = n.next
	    }
	    str += ' null'

        console.log(str)
	}

}()

$(function(){
    var x = linkedListAlgorithms
    x.init()

    var third2last = x.findThirdFromLast()

    console.log(third2last)


})
