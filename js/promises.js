function View(bgColor) {
    this.bgColor = bgColor;
    this.x = 0;
}

View.prototype = (function () {

    return {
        doResolve: null,

        // alias for promise
        then: function (r) {
            this.doResolve = r;
        },

        update: function () {
            console.log(this.x);
            if (this.x++ === 5) {
                this.doResolve();
            }
        },

        render: function () {
            console.log(this.bgColor);
            document.body.style.backgroundColor = this.bgColor;
        }
    };
})();


var title = new View("red");
title.then(function () {
    console.log("inRed");
    view = lvl;
    view.render();
});

var lvl = new View("orange");
lvl.then(function () {
    console.log("inOrange");
    view = last;
    view.render();
});

var last = new View("purple");
last.then(function () {
    console.log("inPurple");
    clearInterval(inter);
});


var view = title;
view.render();
var inter = setInterval(function () {
    view.update()
}, 1000 / 3);
