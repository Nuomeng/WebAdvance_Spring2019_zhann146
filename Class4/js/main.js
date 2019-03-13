/*
 * Original Code by Lucien Huang!
 */

//This is the array of the images
var images = [
    "newschoolbuilding.jpg",
    "050615_Festival_052_750x563.jpg",
    "745127-original.jpg",
    "1496605813404.jpeg",
    "bigimg_parsons.png",
    "D10_01.jpg",
    "DnKbS0IX4AEBA5-.jpg",
    "exterior-PortalImages.jpg",
    "newschoolbuilding.jpg",
    "Parsons_about_5607thave.jpg",
    "Parsons-about.jpg",
    "SP16_SummerIntensive_Nector_Parsons.jpg",
    "The-New-School-Student-Life-3.jpg",
    "The-New-School’s-Parsons-School-of-Design-3.jpg",
    "tish.jpg"];

    // document.addEventListener("DOMContentLoaded",function(){
    //   console.log('test');///这里打事件的内容
    // });//添加一个事件
    document.addEventListener("DOMContentLoaded",function(){
      console.log('test');
      loadImages();
    });

var imgSwitch = 0;
// here im going to load my function
    function loadImages(){
      var putInNum=0;

      var columns = document.getElementsByClassName("column");
      var columnNum = columns.length;
      console.log(columns.length);// class = column 的数量

      for(var i=0;i<images.length;i++){
        var newImg = document.createElement("Img");// add <img> to html
        newImg.className="images";//<img class="images">
        newImg.src="./images/"+images[i];//<img class="images" src="">

        newImg.id=i;

        newImg.addEventListener("click",function(e){
          popUp(e.target.id);
          imgSwitch = e.target.id;

        }); //make imgwithch = id

        columns[putInNum].appendChild(newImg);
        putInNum++;//进入下一个 conlumn

        if(putInNum > columnNum-1){
          putInNum=0;
        } //images 加载结束 columnNum不增长了 但是 putInNum++ 所以返回

      }
    }

function popUp(imgCount){
  imgSwitch = imgCount;
  var popup = document.getElementById("popup");
  var img = document.getElementById("pic");

  popup.style.zIndex="1";
  popup.style.display="block";

  img.addEventListener("click",function(){
    close();
  });

  img.src="./images/"+images[imgCount];

}

function close(){
  var popup = document.getElementById("popup");
  popup.style.zIndex="-1";
  popup.style.display="none";
}

function change(direction){
  var numOfImg = images.length;
  var next = 0;
  var img = document.getElementById("pic");

  if ( direction==1){
    if(imgSwitch > numOfImg -2){
      next=0;
    }else{
      imgSwitch++;
      next= imgSwitch;
    }
  }else if(direction == -1){
    if(imgSwitch-1<0){
      next = numOfImg-1;
    }else{
      next = imgSwitch-1;
    }
  }
  img.src ="./images/"+images[next];
  imgSwitch = next;
}
