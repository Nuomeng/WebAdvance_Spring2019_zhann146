var canvas;
var col;

var sw=4;
var speed=0;
var hue;
var sat;
var bright;
//var bright;
function setup(){

  canvas = createCanvas(500,400);
   // image(img, 0, 0);
  background('#f8f8f8');
  canvas.position(700,150);

  canvas.style('margin-top','100px');
  text('Try it yourself !', 200, 20);
  text('Press space to clean the canvas.', 150, 380);

}

function draw() {

var hue=map(mouseX,0,width*2,0,300);
colorMode(HSB,360,10,10);

if(mouseX>0&&mouseX<((width*3)/7)){
  hue=map(mouseX,0,width/3,350,360);
  bright=7;
  sat=9;
}else if (mouseX>=((width*3)/7)&&mouseX<=((width*4)/7)) {
  bright=1;
  sat=7;
  hue=1;
}else {
  hue=map(mouseX,((width*4)/7),width,120,140);
  bright=5;
  sat=3;
}
  //colorMode(RGB);
  //col = color(hue,30,50);

stroke(hue,sat,bright);

  sw= brushStroke();
  strokeWeight(sw);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


function brushStroke(){

  //constrain speed by location "mouseX,mouseY,pmouseX,pmouseY"
var speed = (abs(mouseX-pmouseX) + abs(mouseY-pmouseY))/4;
  speed = constrain(speed, 1, 100);

// strokewright changing by locatin
  speed *= -1;
  sw += speed + 3;

  // contrain strokewright  between 2px-25px
  sw = constrain(sw, 4, 25);
  //println("instSpeed = " + speed + "   sw = " + sw);
  return sw;
}

function keyPressed(){
  if(key==' '){
     background('#f8f8f8');

   }

}
