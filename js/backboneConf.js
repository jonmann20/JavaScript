var Backbone; // stop errors

//---------- DESIGN PATTERNS ----------\\
//---- restful
// get /users
// post /users/1, data: {fname: "Time"}

// mozilla persona: automated login
// single responsibility principle


//---------- BACKBONE MODELS ----------\\
var Elt = Backbone.Model.extend({
	defaults: {
		title: "if this is an object",
		note: "it is copied to all sub classes"
	}
});

var Elt = Backbone.Model.extend({
	initialize: function(){
		
		this.on("change:artist", function(){
			// called when the artist attr changes
		});
		
	}
});

var eltModel = new Elt();

eltModel.save();	// push to server
eltModel.fetch();	// overwrite this instance with new data from server
eltModel.destroy();	// destroy model on server


//---------- BACKBONE VIEWS ----------\\
var eltView = Backbone.View.extend({
	el: $(".thisEltAlreadyExists"),
	events: {
		"click li": "playSong"		// uses jQuery.on()
	},
	render: function(){
		// use template here
		
		// this.$el accesses HTML associated with eltView 
		
		this.listenTo(this.model, "change", this.render, this); // listenTo auto gc'd
		
	},
	playSong: function(){
		// 
	}
});

//---- template: HTML partial that accepts JS object to fill in data pieces
/*
	<script type="html/template">
		<h1><%= title %></h1>
	</script>

	possible to pre-compile html templates into .ejs files to improve perf
*/


// views can be destroyed by calling remove (does not remove memory -- NOT garbage collected)

//---------- BACKBONE COLLECTIONS ----------\\
// collection: ordered set of models

var Song = new Elt();
var Song2 = new Elt();

var Lib = Backbone.Collection.extend({
	model: function(){	// polymorphism
		if(1){
			return Song;
		}
		else {
			return Song2;
		}
	}
});

var songCollection = new Lib({
	
});

var lowBit = songCollection.where({q: "poor"});
songCollection.remove(lowBit);


Lib.add(Song2, {at: 1}); // insert Song2 Model into Lib collection[1]

//---- Underscore methods (any _method can be used in backbone); use low dash for better perf
// perf problems typically exists in DOM manipulation not looping/algorithms 
/*
	get(modelByID) 
	at(reternModelAtIndex)
	where(returnArrFilteredByAttr)
	pluck(getAttrFromEachModelInCollection)
*/

//---- syncing data w/server
var Playlist = Backbone.Collection.extend({
	model: Song,
	url: "/songs"
});
var dubstep = new Playlist();

// Backbone.sync()		calls $.ajax()
dubstep.fetch();		// request to "/songs"
// .save()
// .destroy()
// .create()

// override sync with:
	// localStorage
		// avoids storing data on server
	// websockets
	


// jQuery deferreds (promises)
/*
	pending --> success
	pending --> failure

*/

songCollection.fetch().then(function(){
	songCollection.view.render();
});


//---------- BACKBONE ROUTING ----------\\
// HTML5 History API
// push/pop history state
// allows hash changes events to produce full URLs and enable browser navigation

var Router = Backbone.Router.extend({
	
});

var rt = new Router();

rt.navigate({
	trigger: true,	// call routing method
	replace: true,	// don't create history entry
	pushState: true	// doestn't use hashes?
});
