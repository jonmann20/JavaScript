/***** Weapon *****/
function Weapon(c, d) {
    this.cost = c;
    this.damage = d;
}

Weapon.prototype.attack = function (target) {
    if (target.dist > 10)
        console.log("can't reach target");
    else {
        target.health -= this.damage;
        console.log(target.health);
    }
}


/***** Hero *****/
function Hero(h) {
    this.health = h;
    this.sword = new Weapon(10, 10);
}

Hero.prototype.attack = function (target) {
    return this.sword.attack(target);
}

/***** Main ******/
var enemy = { health: 100 };
var hero = new Hero(100);


/*
    1) Javascript looks at the hero object, but can't find the attack() method
    2) Javascript then delegates to hero.prototype
    3) hero's prototype calls sword.attack() which delegates to in sword.prototype
    4) sword's prototype contains the attack() method

    This is similar to how c++ objects work, but looks through a prototype chain as opposed to a class chain.
*/
hero.attack(enemy);
