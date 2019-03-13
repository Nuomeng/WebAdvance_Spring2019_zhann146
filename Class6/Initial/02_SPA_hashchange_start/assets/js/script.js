
var app = app || {};

app.main = (function() {

	var students = [];



// load data
	function loadData(){
		$.getJSON("../students.json", function(data){
			students = data;

			generateAllStudentsHTML(students);
			$(window).trigger('hashchange');
		});
	}

// get html data
	function generateAllStudentsHTML(data){
		var list = $('.students-list');

		var source = $("#students-template").html();
		var template = Handlebars.compile(source);
		list.append(template(data));
	}

// get html data 解析url
	function render(url) {

		var temp = url.split('/')[0];
		//////////////////////////////////////////注意这个visible！！！
		$('.main-content .page').removeClass('visible');
		var map = {
			//This is landing page
			'': function(){
				$('.main-content .all-students').addClass('visible');
			}
		};
//If map template's first element is there, load addClass
		// if(map[temp]){
		// 	map[temp]();
		// }

		map[temp]();
	}


//////// setup 的function
	var init = function(){
		console.log('Initializing app.');


		loadData();

		$(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');

	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
