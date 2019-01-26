console.log('test');

var labelTitle = document.getElementById("labelTitle");
var labelSubTitle = document.getElementById("labelSubTitle");
var textDescription = document.getElementById("textDescription");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");


labelTitle.innerHTML = "Dining Options";
labelSubTitle.style.visibility = "visible";
labelSubTitle.innerHTML = "Text Adventure";

button1.textContent = "Yes";
button2.textContent = "No";

button1.onclick = function() {
  actionYesHungry()
};
button2.onclick = function() {
  actionNoHungry()
};


textDescription.innerHTML =
  "It's 11pm., you go back to the dormitory.<br><br> " +
  "Are you hungry?";


function actionYesHungry() {

  labelTitle.innerHTML = "Dining Options";
  labelSubTitle.style.visibility = "hidden";

  button1.textContent = "Yes";
  button2.textContent = "No";


  button1.onclick = function() {
    actionYesMoney()
  };
  button2.onclick = function() {
    actionNoMoney()
  };


  textDescription.innerHTML =
    "Do you have $20?";
}

function actionNoHungry() {

  labelTitle.innerHTML = "Dining Options";

  labelSubTitle.innerHTML = "Game Over";
  button1.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  textDescription.innerHTML =

    "Go to bed with a stomach ache.";
}

function actionYesMoney() {

  labelTitle.innerHTML = "Dining Options";
  labelSubTitle.style.visibility = "visible";
  labelSubTitle.innerHTML = "You Win!";

  button1.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  textDescription.innerHTML =
    "Get Pizza Delivered.";
}

function actionNoMoney() {

  labelTitle.innerHTML = "Dining Options";
  labelSubTitle.style.visibility = "hidden";

  button1.style.visibility = "visible";
  button1.textContent = "Next";
  button1.onclick = function() {
    actionNext()
  };
  button2.style.visibility = "hidden";
  textDescription.innerHTML =
    "You rummaged through the fridge and eat a week old sanwich.";

}

function actionNext() {

  labelTitle.innerHTML = "Dining Options";
  labelSubTitle.style.visibility = "visible";
  labelSubTitle.innerHTML = "Game Over";
  button1.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  textDescription.innerHTML =

    "Go to bed with a stomach ache.";
}
