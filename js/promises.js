// polyfill: https://github.com/jakearchibald/ES6-Promises/blob/master/README.md
function View(bgColor) {
    this.bgColor = bgColor;
}

View.prototype = (function () {
    var then;
    var x = 0;

    var p = new Promise(function (r) {
        then = r;
    })

    return {
        update: function () {
            //console.log(x);
            if (x++ === 30) {
                then();
            }
        },

        render: function () {
            document.body.style.backgroundColor = this.bgColor;
        },

        // alias for promise
        then: function(r){
            p.then(r);
        }
    };
})();


// old way
//var view = new View(function () {
//    console.log("hit");
//    clearInterval(inter);
//});

var view = new View("orange");
view.render();

// more things here

view.then(function () {
    clearInterval(inter);
    view = new View("red");
    view.render();
});

var inter = setInterval(view.update, 1000 / 10);
//console.log(view);
