function View(bgColor) {
    this.bgColor = bgColor;
}

View.prototype = (function () {
    var then;
    var x = 0;

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

        p: new Promise(function (resolve) {
            then = resolve;
        })
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

view.p.then(function () {
    clearInterval(inter);
    view = new View("red");
    view.render();
});

var inter = setInterval(view.update, 1000 / 10);
//console.log(view);
