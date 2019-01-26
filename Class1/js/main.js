console.log("test");

var GreetingConatiner;

GreetingConatiner = "Hello";
console.log(GreetingConatiner);

// DEBUG:
alert('Greetings:' + GreetingConatiner);
/*the way to find out if the var is working*/

document.write('<p>' + GreetingConatiner + '</p>');
/*document.write(); use to add a css into html*/
var arrange = document.getElementsByClassName('msg');
/* 把 .msg class 赋予 arrange*/

var atributes = ["Green","Gold","Red"];

for (var i = 0; i < atributes.length;i++){
  for(var i = 0; i< arrange.length;i++){
    arrange[i].innerHTML = atributes[i]; /*go to html and put ""*/
  }
}
