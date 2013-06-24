$(function () {
    //var h = hashClass
    //h.init(100)

    //var str = "A boring concatonation designating every gramatical helping in jumping kuerig my my my at my in my"
    //var arr = str.split(' ')

    //for (var i in arr) {
    //    h.put(arr[i])
    //}

    //h.sortByCount()
    //h.print()

    var s = stringAlgorithms

    //console.log(s.removeChar('typxo', 'x'))
    //console.log(s.reverse('amazing'))
    //console.log(s.isPalindrome('hih'))

    for(var i=0; i < 9; ++i)
        console.log(s.rotate('string', i, false))

    // abc ... 0,3,6
    // bca ... 1,4,7
    // cab ... 2,5,8


})