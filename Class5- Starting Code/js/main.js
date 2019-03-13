window.addEventListener('DOMContentLoaded',function(e){
  e.preventDefault();

  console.log("test");

  scrollEvent();



//   window.addEventListener('scroll',function(){
//     var navOffset =(window.pageYOffset!=undefined)?window.pageYOffset:
//     (document.documentElement || document.body.parentMode || document.body).navOffset;
// console.log(navOffset);
//
// });



var navOffset =$("nav").offset().top;
console.log(navOffset);

// $(window).scroll(function(){
//   var scrollPos=$(window).scrollTop();
//
//   var stickNav=$("nav");
//   scrollMenu(stickNav);
//
//   function scrollMenu(){
//     if(scrollPos >= navOffset){
//       $(".menubar").addClass("fixed");
//       $("nav").addClass("fixed");
//     }else{
//       $(".menubar").removeClass("fixed");
//       $("nav").removeClass("fixed");
//     }
//   }
//
// });



//另外一种方法
$(window).scroll(function(){
  var scrollPos=$(window).scrollTop();

  var stickNav=$("nav");
  scrollMenu(stickNav);

  var stickMenu=$(".menubar");
  scrollMenu(stickMenu);

  function scrollMenu(e){
    if(scrollPos >= navOffset){
      e.addClass("fixed");
    }else{
      e.removeClass("fixed");
    }
  }

  var  firstOff = $('#first').offset().top-50;
  var  secondOff = $('#second').offset().top-50;
  var  thirdOff = $('#third').offset().top-50;
  var  fourthOff = $('#fourth').offset().top-50;
  var  fifthOff = $('#fifth').offset().top-50;


  if(scrollPos >= firstOff){
    $('.t1').addClass('appear');
  }else{
    $('.t1').removeClass('appear');
  }

});

});

function scrollEvent(){
  $('nav li a').click(function(){

    var myTarget = $(this.hash); // get the #
    myTarget = myTarget.length&&myTarget;

    var targetOffset = myTarget.offset().top;
    console.log('targetOffset ='+targetOffset);
    $('html,body').animate({scrollTop: targetOffset},1000);
  });
}
