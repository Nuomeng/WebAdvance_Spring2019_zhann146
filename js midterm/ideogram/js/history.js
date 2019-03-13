$(document).ready(function() {

  var html = $('html');
  var viewport = $(window);
  var viewportHeight = viewport.height();

  var scrollMenu = $('#timeline');
  var timeout = null;

  function menuFreeze() {
    if (timeout !== null) {
      scrollMenu.removeClass('freeze');
      clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
      scrollMenu.addClass('freeze');
    }, 2000);
  }
  scrollMenu.mouseover(menuFreeze);

  /* ////////////////////////////////////////////////////////////////////////
	   Build the Scroll Menu based on Sections .scroll-item
	 ////////////////////////////////////////////////////////////////////////*/

  var sectionsHeight = {},
    viewportheight, i = 0;
  var scrollItem = $('.scroll-item');
  var bannerHeight;


  function sectionListen() {
    viewportHeight = viewport.height();
    bannerHeight = (viewportHeight);
    $('.section').addClass('resize');
    scrollItem.each(function() {
      sectionsHeight[this.title] = $(this).offset().top;
    });
  }

  sectionListen();
  viewport.resize(sectionListen);
  viewport.bind('orientationchange', function() {
    sectionListen();
  });

  var count = 0;

  scrollItem.each(function() {
    var anchor = $(this).attr('id');
    var title = $(this).attr('title');
    count++;
    $('#timeline ul').append(
      '<li><a id="nav_' + title + '" href="#' + anchor + '"> <span>' + title + '</span> ' + anchor + '</a></li>');
  });


  function menuListen() {
    var pos = $(this).scrollTop();
    pos = pos + viewportHeight * 0.625;  // height / scroll


    for (i in sectionsHeight) {
      if (sectionsHeight[i] < pos) {
        $('#timeline a').removeClass('active');
        $('#timeline a#nav_' + i).addClass('active');;

        var newHash = '#' + $('.scroll-item[title="' + i + '"]').attr('id');
        if (history.pushState) {
          history.pushState(null, null, newHash);
        } else {
          location.hash = newHash;
        }

        } else {
        $('#timeline a#nav_' + i).removeClass('active');
        if (pos < viewportHeight - 120) {
          history.pushState(null, null, ' ');
        }
      }
    }
  }
  scrollMenu.css('margin-top', scrollMenu.height() / 2 * -1);

  /* ////////////////////////////////////////////////////////////////////////
	   Smooth Scroll for Anchor Links and URL refresh
	   //////////////////////////////////////////////////////////////////////// */

  scrollMenu.find('a').click(function() {
    var href = $.attr(this, 'href');
    $('html').animate({
      scrollTop: $(href).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;
  });

  /* ////////////////////////////////////////////////////////////////////////
	   Put functions on Scroll Event
	   ////////////////////////////////////////////////////////////////////////*/

  function scrollEvent() {
    menuListen();
    menuFreeze();
  }

  scrollEvent();
  viewport.on('scroll', function() {
    scrollEvent();
    //			window.requestAnimationFrame(scrollHandler);
  });
});
