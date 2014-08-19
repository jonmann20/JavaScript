var module = (function() {
    // private to this partial module
    var label = "x: ";

    // public to this module
    this.displayTotal = function() {
        console.log(label + this.total);
    }

    return this;
}).call(module || {});
