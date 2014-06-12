function extend(childInstance, parentInstance){
	var name;
	for (name in parentInstance){
	    if(!(name in childInstance)){
	        childInstance[name] = parentInstance[name];
	    }
	}
}

function SportsCar(car){
	this.getName = "SportsCar";

	if(typeof(car) === "undefined" || car.getName !== "Car"){
		car = new Car();
	}
	
	this.super = car;
	extend(this, car);
}

SportsCar.prototype = (function(){
	return {
		hasSpoiler: false,

		// override
		determinePrice: function(){
			//console.log(this.super.determinePrice());
			return 25;
		}
	};
})();