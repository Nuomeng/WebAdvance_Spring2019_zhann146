var app = app || {};
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});

app.main = (function(){

	console.log('Loading app.');


function importData(){

	var svg = d3.select("svg"),
	width = svg.attr("width"),
	height = svg.attr("height");

	var simulation = d3.forceSimulation()
	.force("charge",d3.forceManyBody().strength(-200))
	.force("x",d3.forceX(width/2))
	.force("y",d3.forceY(height/2))
	.on("tick",ticked);

	//this is my node and links
	var link = svg.selectAll(".link"),
	node = svg.selectAll(".node");

	d3.json("graph.json", function(graph){

		simulation.nodes(graph.nodes);
		simulation.force("link").links(graph.link);
		link = link.data(graph.links)
		.enter().append("line")
		.attr("class","link");

		node = node.data(graph.nodes)
		.enter().append("circle")
		.attr("class","node")
		.attr("r",10)
		.style("fill",function(d){return d.id;});
	});

	function ticked(){
		link.attr("x1",function(d){return d.source.x})
		.attr("y1",function(d){return d.source.y})
		.attr("x2",function(d){return d.target.x})
		.attr("y2",function(d){return d.target.y})
	}

}






	var init = function(){
		console.log('Initializing app.');
		importData();

	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
