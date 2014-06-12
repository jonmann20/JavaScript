function Car(color){
	this.getName = "Car";

	this.color = color || "#fff";
}

Car.prototype = (function(){
	var isMoving = false;

	return {
		color: "",


		changeColor: function(color){
			this.color = color;
		},

		determinePrice: function(){
			return 10;
		}
	};
})();
