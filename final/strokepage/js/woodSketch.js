
var rects = [];
var dragRec;
var isDragging;
var clickOffset;
var img1;// radical

var imga;
var imgb;
var imgc;
var imgd;
var imge;
var imgf;
var imgg;
var imgh;
var imgi;
var imgg;
var imgk;
var imgl;
var imgm;
var imgn;
var imgo;
var imgp;
var imgq;
var imgr;
var imgs;
var imgt;
var imgu;
var imgv;
var imgw;
var imgx;
var imgy;
var imgz;

var myFont;
var contents="";

var database;

function preload() {
    img1 = loadImage("img/woodCanvas.png");

    imga = loadImage("img/stroke/a@1x.png");
    imgb = loadImage("img/stroke/b@1x.png");
    imgc = loadImage("img/stroke/c@1x.svg");
    imgd = loadImage("img/stroke/d@1x.png");
    imge = loadImage("img/stroke/e@1x.png");
    imgf = loadImage("img/stroke/f@1x.png");
    imgg = loadImage("img/stroke/g@1x.png");
    imgh = loadImage("img/stroke/h@1x.png");
    imgi = loadImage("img/stroke/i@1x.png");
    imgg = loadImage("img/stroke/g@1x.png");
    imgk = loadImage("img/stroke/k@1x.png");
    imgl = loadImage("img/stroke/l@1x.png");
    imgm = loadImage("img/stroke/m@1x.png");
    imgn = loadImage("img/stroke/n@1x.png");
    imgo = loadImage("img/stroke/o@1x.png");
    imgp = loadImage("img/stroke/p@1x.png");
    imgq = loadImage("img/stroke/q@1x.png");
    imgr = loadImage("img/stroke/r@1x.png");
    imgs = loadImage("img/stroke/s@1x.png");
    imgt = loadImage("img/stroke/t@1x.png");
    imgu = loadImage("img/stroke/u@1x.png");
    imgv = loadImage("img/stroke/v@1x.png");
    imgw = loadImage("img/stroke/w@1x.png");
    imgx = loadImage("img/stroke/x@1x.png");
    imgy = loadImage("img/stroke/y@1x.png");
    imgz = loadImage("img/stroke/z@1x.png");

    myFont = loadFont('../img/FZLTKSK.TTF');

}

// ------------------ ------------------ canvas setup ------------------ -----------------//
var cnv
function setup() {

    cnv =createCanvas(420, 420);
    cnv.parent('canvascontainer');

    var saveButton = select('#saveButton');
    saveButton.mousePressed(saveDrawing);


    var x = windowWidth/2;
    //var y = windowHeight/2;
    cnv.position(x, 140);
    cnv.style('background-color','rgba(250, 250, 250,0)');
    cnv.style('margin-top','40px');
    cnv.style('left','50%');


    keyPressed();
    isDragging = false;

    var pos = nowPos(img1.width, img1.height);
    rects.push(new Rectangle(pos, img1));

    var config = {
    apiKey: "AIzaSyCdb-FfO7Ob588uw39WzRF4g_5VqRAITQk",
    authDomain: "ms1final-5a0aa.firebaseapp.com",
    databaseURL: "https://ms1final-5a0aa.firebaseio.com",
    projectId: "ms1final-5a0aa",
    storageBucket: "ms1final-5a0aa.appspot.com",
    messagingSenderId: "426395509849"
    };
    firebase.initializeApp(config);


    // Get a reference to the database service
    // var database = firebase.database();
    // var ref = database.ref("drawings");
    // ref.on("value", gotAll, errData);


}

function draw() {

   clear();
  rects.forEach(function (r) { return r.draw(); });
  stroke(200);
  dashedLine(30, 414, 180, 414, 4, 4);

    textFont(myFont);
    textSize(24);
    text(contents, 40, 405);



}

// ------------------ ------------------ key type  ------------------ -----------------//
function keyTyped() {
  contents += key;
}

// ------------------ ------------------ drag stroke  ------------------ -----------------//
var Rectangle = (function () {
    function Rectangle(pos, img) {
        this.pos = pos;
        this.img = img;
        this.width = img.width;
        this.height = img.height;
    }
    Rectangle.prototype.draw = function () {
        image(this.img, this.pos.x, this.pos.y);
    };
    Rectangle.prototype.hits = function (hitpos) {
        if (hitpos.x > this.pos.x &&
            hitpos.x < this.pos.x + this.width &&
            hitpos.y > this.pos.y &&
            hitpos.y < this.pos.y + this.height) {
            return true;
        }
        return false;
    };
    return Rectangle;
}());



function keyPressed() {

  //imga
  if (keyCode === 65) {
        var pos = randomPos(imga.width, imga.height);
        rects.push(new Rectangle(pos, imga));
      }

  //imgb
  if (keyCode === 66) {
        var pos = randomPos(imgb.width, imgb.height);
        rects.push(new Rectangle(pos, imgb));
      }

  //imgc
  if (keyCode === 67) {
    var pos = randomPos(imgc.width, imgc.height);
    rects.push(new Rectangle(pos, imgc));
  }

  //imgd
  if (keyCode === 68) {
    var pos = randomPos(imgd.width, imgd.height);
    rects.push(new Rectangle(pos, imgd));
  }

  //imge
  if (keyCode === 69) {
        var pos = randomPos(imge.width, imge.height);
        rects.push(new Rectangle(pos, imge));
      }

  //imgf
  if (keyCode === 70) {
        var pos = randomPos(imgf.width, imgf.height);
        rects.push(new Rectangle(pos, imgf));
      }

  //imgg
  if (keyCode === 71) {
    var pos = randomPos(imgg.width, imgg.height);
    rects.push(new Rectangle(pos, imgg));
  }

  //imgh
  if (keyCode === 72) {
    var pos = randomPos(imgh.width, imgh.height);
    rects.push(new Rectangle(pos, imgh));
  }

  //imgi
  if (keyCode === 73) {
        var pos = randomPos(imgi.width, imgi.height);
        rects.push(new Rectangle(pos, imgi));
      }

  //imgg
  if (keyCode === 74) {
        var pos = randomPos(imgg.width, imgg.height);
        rects.push(new Rectangle(pos, imgg));
      }

  //imgk
  if (keyCode === 75) {
    var pos = randomPos(imgk.width, imgk.height);
    rects.push(new Rectangle(pos, imgk));
  }

  //imgl
  if (keyCode === 76) {
    var pos = randomPos(imgl.width, imgl.height);
    rects.push(new Rectangle(pos, imgl));
  }

  //imgm
  if (keyCode === 77) {
        var pos = randomPos(imgm.width, imgm.height);
        rects.push(new Rectangle(pos, imgm));
      }

  //imgn
  if (keyCode === 78) {
        var pos = randomPos(imgn.width, imgn.height);
        rects.push(new Rectangle(pos, imgn));
      }

  //imgo
  if (keyCode === 79) {
    var pos = randomPos(imgo.width, imgo.height);
    rects.push(new Rectangle(pos, imgo));
  }

  //imgp
  if (keyCode === 80) {
    var pos = randomPos(imgp.width, imgp.height);
    rects.push(new Rectangle(pos, imgp));
  }

  //imgq
  if (keyCode === 81) {
    var pos = randomPos(imgq.width, imgq.height);
    rects.push(new Rectangle(pos, imgq));
  }

  //imgr
  if (keyCode === 82) {
    var pos = randomPos(imgr.width, imgr.height);
    rects.push(new Rectangle(pos, imgr));
  }

  //imgs
  if (keyCode === 83) {
        var pos = randomPos(imgs.width, imgs.height);
        rects.push(new Rectangle(pos, imgs));
      }

  //imgt
  if (keyCode === 84) {
        var pos = randomPos(imgt.width, imgt.height);
        rects.push(new Rectangle(pos, imgt));
      }

  //imgu
  if (keyCode === 85) {
    var pos = randomPos(imgu.width, imgu.height);
    rects.push(new Rectangle(pos, imgu));
  }

  //imgv
  if (keyCode === 86) {
    var pos = randomPos(imgv.width, imgv.height);
    rects.push(new Rectangle(pos, imgv));
  }

  //imgw
  if (keyCode === 87) {
        var pos = randomPos(imgw.width, imgw.height);
        rects.push(new Rectangle(pos, imgw));
      }

  //imgx
  if (keyCode === 88) {
        var pos = randomPos(imgx.width, imgx.height);
        rects.push(new Rectangle(pos, imgx));
      }

  //imgy
  if (keyCode === 89) {
    var pos = randomPos(imgy.width, imgy.height);
    rects.push(new Rectangle(pos, imgy));
  }

  //imgz
  if (keyCode === 90) {
    var pos = randomPos(imgz.width, imgz.height);
    rects.push(new Rectangle(pos, imgz));
  }

}
function randomPos(marginRight, marginBottom) {
    return createVector(random(0, 420- marginRight), random(0, 400 - marginBottom));
}

function nowPos(marginRight, marginBottom) {
    return createVector(410-marginRight, 375-marginBottom);
}


function mousePressed() {
    var m = createVector(mouseX, mouseY);
    var index;
    rects.forEach(function (r, i) {
        if (r.hits(m)) {
            clickOffset = p5.Vector.sub(r.pos, m);
            isDragging = true;
            dragRec = r;
            index = i;
        }
    });
    if (isDragging) {
        putOnTop(index);
    }
}
function putOnTop(index) {
    rects.splice(index, 1);
    rects.push(dragRec);
}
function mouseDragged() {
    if (isDragging) {
        var m = createVector(mouseX, mouseY);
        dragRec.pos.set(m).add(clickOffset);
    }
}
function mouseReleased() {
    isDragging = false;
}

// ------------------ ------------------ dash line  ------------------ -----------------//
function dashedLine(x1, y1, x2, y2, l, g) {
  var pc = dist(x1, y1, x2, y2) / 100;
  var pcCount = 1;
  var gPercent = 0;
  var lPercent = 0;
  var currentPos = 0;
  var xx1 = 0,
    yy1 = 0,
    xx2 = 0,
    yy2 = 0;

  while (int(pcCount * pc) < l) {
    pcCount++
  }
  lPercent = pcCount;
  pcCount = 1;
  while (int(pcCount * pc) < g) {
    pcCount++
  }
  gPercent = pcCount;

  lPercent = lPercent / 100;
  gPercent = gPercent / 100;
  while (currentPos < 1) {
    xx1 = lerp(x1, x2, currentPos);
    yy1 = lerp(y1, y2, currentPos);
    xx2 = lerp(x1, x2, currentPos + lPercent);
    yy2 = lerp(y1, y2, currentPos + lPercent);
    if (x1 > x2) {
      if (xx2 < x2) {
        xx2 = x2;
      }
    }
    if (x1 < x2) {
      if (xx2 > x2) {
        xx2 = x2;
      }
    }
    if (y1 > y2) {
      if (yy2 < y2) {
        yy2 = y2;
      }
    }
    if (y1 < y2) {
      if (yy2 > y2) {
        yy2 = y2;
      }
    }

    line(xx1, yy1, xx2, yy2);
    currentPos = currentPos + lPercent + gPercent;
  }
}




// ------------------ ------------------ firebase  ------------------ -----------------//

//**********chang each timm********************
var counter = Math.ceil(Math.random() * 1000 );
/////////////
var canvas = document.getElementsByTagName("canvas")[0];

///////////////////////////////-firebase-/////////////////////////////////////////////////////////

function saveDrawing(){
  var database = firebase.storage().ref();
  canvas.toBlob(function(blob){
    console.log(blob);
    var image = new Image();
    image.src = blob;
    var metadata = {
      contentType:"image/png"
    };
    database.child("images/" + counter).put(blob,metadata).catch(function(error){
      console.log(error);
    });

  });
}

function gotAll(data) {
    var drawings = data.val();
    // Grab all the keys to iterate over the object
    var keys = Object.keys(drawings);
    // Loop through array

    for (var i = 0; i < keys.length; i++) {
      // The data for each record is in a property attributes
      // But here I'm just making a list with "id"
      var key = keys[i];
      console.log(key);
      // var li = createElement('li', '');
      // li.parent('drawings');
    }
  }

  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }


// function saveDrawing(){
//   var database = firebase.database();
//
//   var drawings=database.ref('drawings'); // drawing is the file's name in database
//   var data= {
//     word: contents,
//     // img:cnv
//   }
//
//   var drawing = drawings.push(data, dataSent);
//   console.log(drawing.key);
//
//   function dataSent(status){
//     console.log(status);
//   }
// }
//
// function gotAll(data) {
//     var drawings = data.val();
//     // Grab all the keys to iterate over the object
//     var keys = Object.keys(drawings);
//     // Loop through array
//
//     for (var i = 0; i < keys.length; i++) {
//       // The data for each record is in a property attributes
//       // But here I'm just making a list with "id"
//       var key = keys[i];
//       console.log(key);
//       // var li = createElement('li', '');
//       // li.parent('drawings');
//     }
//   }
//
//   function errData(error) {
//     console.log("Something went wrong.");
//     console.log(error);
//   }
