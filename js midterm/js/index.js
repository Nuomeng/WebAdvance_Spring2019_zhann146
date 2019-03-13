$(document).ready(function() {
  var projects = $('.card');

  var filteredProjects = [];
  var selection = "all";
  var running = false;
  window.setTimeout(function() {
    $('.all').trigger('click');
  }, 150);

  $(window).resize(function() {
    buildGrid(filteredProjects);
  });

  $('.category-buttons a').on('click', function(e) {
    e.preventDefault();
    // addclass & removeclass when cilck the button
    if (!running) {
      running = true;
      selection = $(this).data('group');
      $('.category-buttons a').removeClass('active');
      $(this).addClass('active');


      filteredProjects = [];
      for (i = 0; i < projects.length; i++) {
        var project = projects[i];
        var dataString = $(project).data('groups');
        var dataArray = dataString.split(',');
        dataArray.pop();
        if (selection === 'all') {
          $(project).addClass('setScale').queue(function(next) {
            filteredProjects.push(project);
            next();
          }).queue(function(next) {
            $(this).removeClass('setScale');
            next();
          }).queue(function(next) {
            $(this).addClass('animating show')
            next();
          }).delay(750).queue(function() {
            running = false;
            $(this).removeClass('animating').dequeue();
          });
        } else {
          if ($.inArray(selection, dataArray) > -1) {
            $(project).addClass('setScale').queue(function(next) {
              filteredProjects.push(project);
              next();
            }).queue(function(next) {
              $(this).removeClass('setScale');
              next();
            }).queue(function(next) {
              $(this).addClass('animating show')
              next();
            }).delay(750).queue(function() {
              running = false;
              $(this).removeClass('animating').dequeue();
            });
          } else {
            $(project).queue(function(next) {
              $(this).addClass('animating');
              next();
            }).queue(function(next) {
              $(this).removeClass('show');
              next();
            }).delay(750).queue(function() {
              $(this).removeClass('animating').dequeue();
            });
          }
        }
      }
      buildGrid(filteredProjects);
    }
  })


// buildgrid 
  function buildGrid(projects) {
    var left = 0;
    var top = 0;
    var totalHeight = 0;
    var largest = 0;
    var heights = [];
    for (i = 0; i < projects.length; i++) {
      $(projects[i]).css({
        height: 'auto'
      });
      heights.push($(projects[i]).height());
    }
    var maxIndex = 0;
    var maxHeight = 0;

    for (i = 0; i <= heights.length; i++) {
      if (heights[i] > maxHeight) {
        maxHeight = heights[i];
        maxIndex = i;
        $('.guide').height(maxHeight);
      }
      if (i === heights.length) {
        for (i = 0; i < projects.length; i++) {
          $(projects[i]).css({
            position: 'absolute',
            left: left + '%',
            top: top
          });
          left = left + ($('.guide').width() / $('#grid').width() * 100) + 2;

          if (i === maxIndex) {
            $(projects[i]).css({
              height: 'auto'
            });
          } else {
            $(projects[i]).css({
              height: maxHeight
            });
          }
          if ((i + 1) % 3 === 0 && projects.length > 3 && $(window).width() >= 700) {
            top = top + $('.guide').height() + 40;
            left = 0;
            totalHeight = totalHeight + $('.guide').height() + 40;

          } else if ((i + 1) % 2 === 0 && projects.length > 2 && $(window).width() < 700 && $(window).width() >= 480) {
            top = top + $('.guide').height() + 20;
            left = 0;
            totalHeight = totalHeight + $('.guide').height() + 40;

          } else if ((i + 1) % 1 === 0 && projects.length > 1 && $(window).width() < 480) {
            top = top + $('.guide').height() + 40;
            left = 0;
            totalHeight = totalHeight + $('.guide').height() + 40;
          }
          $('#grid').height(totalHeight + $('.guide').height());
        }
      }
    }
  }
})



var app = app || {};

app.main = (function() {

	var students = [];



// load data
	function loadData(){
		$.getJSON("../typo.json", function(data){
			students = data;

			generateAllStudentsHTML(students);
			$(window).trigger('hashchange');
		});
	}

// get html data
	function generateAllStudentsHTML(data){
		var list = $('.grid');

		var source = $("#students-template").html();
		var template = Handlebars.compile(source);
		list.append(template(data));
	}

// get html data 解析url
	function render(url) {

		var temp = url.split('/')[0];
		//////////////////////////////////////////注意这个visible！！！
		$('.work .grid').removeClass('visible');
		var map = {
			//This is landing page
			'': function(){
				$('.work .grid').addClass('visible');
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
