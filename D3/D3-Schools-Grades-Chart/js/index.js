var app = app || {};
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});

app.main = (function(){

	console.log('Loading app.');





	
	


	var init = function(){
		console.log('Initializing app.');

	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);



