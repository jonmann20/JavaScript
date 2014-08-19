var module = (function() {
    // private to this partial module
    var x = 100;

    // public to this module
    this.total = x;

    this.add = function(a) {
        this.total += a;
    }

    return this;
}).call(module || {});
