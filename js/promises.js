function View(bgColor) {
    // public data and methods
    this.bgColor = bgColor;
    this.x = 0;
}

View.prototype = (function () {
    // static private data and methods

    // public data and methods (that need access to privates)
    return {
        // promises hack
        then: function (callback) {
            this.then = callback;
        },

        update: function () {
            if (this.x++ === 30) {
                this.then();
            }
        },

        render: function () {
            document.body.style.backgroundColor = this.bgColor;
        }
    };
})();


var title = new View("red");
title.then(function () {
    view = lvl;
    view.render();
});

var lvl = new View("orange");
lvl.then(function () {
    view = last;
    view.render();
});

var last = new View("purple");
last.then(function () {
    title.x = lvl.x = last.x = 0;
    view = title;
    view.render();
});


var view = title;
view.render();
var inter = setInterval(function () {
    view.update()
}, 1000 / 60);
