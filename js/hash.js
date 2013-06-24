hashClass = function () {
    var that = null,
        size = -1,
        table = [/*{ val: '@', count: 0 }, ... */]

    return {
        init: function (s) {
            that = this
            size = s

            for (var i = 0; i < s; ++i) {
                table.push({
                    val: '@',
                    count: 0
                })
            }
        },

        get: function (val) {
            return table[hash(val)]
        },

        put: function (v) {
            var c = table[hash(v)].count + 1

            table[hash(v)] = {val: v, count: c}
        },

        print: function (unused) {
            unused = (typeof (unused) !== 'undefined') ? unused : false

            for (var i in table) {
                if (unused || table[i].val != '@')
                    console.log(table[i])
            }
        },

        sortByCount: function () {
            sort.bubble(table, function (a, b) {
                return a.count > b.count
            })
        }
    }

    // TODO: doesn't work for counting duplicate words
    function hash(k) {
        var num = 2166136261

        for (var i in k) {
            num *= 16777619
            num ^= k.charCodeAt(i)
        }

        if (num < 0)
            num *= -1

        return num % size
    }

}()

$(function () {
    var h = hashClass
    h.init(100)

    var str = "A boring concatonation designating every gramatical helping in jumping kuerig my my my at my in my"
    var arr = str.split(' ')
  
    for (var i in arr) {
        h.put(arr[i])
    }

    h.sortByCount()
    h.print()

})