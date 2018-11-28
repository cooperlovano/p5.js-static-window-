var ourtext;
var pos=25;
var num = 90;
var y=10;

function setup() {
  cnv=createCanvas(120, 120);
  cnv.parent('logoHouse');
  noStroke();
  //img = loadImage("Rectangle3.png");  // Load the image
  img = loadImage("Oval2.png");  // Load the image
}

function draw() {
  //background(267, 54, 113);
  background(25, 0, 145);
  fill(255);

 image(img, 0, pos-120);
 image(img, 0, pos-0);
 image(img, 0, pos+120);
image(img, 0, pos+240);
 image(img, 0, pos+360);
 image(img, 0, pos+480);
  image(img, 0, pos+600);
 image(img, 0, pos+720);








/*

 ourtext2q= "cooper lovano";
  text(ourtext2q, 4, pos-20);
  ourtext3q= "cooper lovano";
  text(ourtext3q, 4, pos-40);
  ourtext4q= "cooper lovano";
  text(ourtext4q, 4, pos-60);ourtext5q= "cooper lovano";
  text(ourtext5q, 4, pos-80);
  ourtext6q= "cooper lovano";
  text(ourtext6q, 4, pos-100);
  ourtext7q= "cooper lovano";
  text(ourtext7q, 4, pos-120);
  ourtext8q= "cooper lovano";
  text(ourtext8q, 4, pos-140);


  ourtext= "cooper lovano";
  text(ourtext, 4, pos);
  ourtext2= "cooper lovano";
  text(ourtext2, 4, pos+20);
  ourtext3= "cooper lovano";
  text(ourtext3, 4, pos+40);
  ourtext4= "cooper lovano";
  text(ourtext4, 4, pos+60);ourtext5= "cooper lovano";
  text(ourtext5, 4, pos+80);
  ourtext6= "cooper lovano";
  text(ourtext6, 4, pos+100);
  ourtext7= "cooper lovano";
  text(ourtext7, 4, pos+120);
  ourtext8= "cooper lovano";
  text(ourtext8, 4, pos+140);

    ourtext= "cooper lovano";
  text(ourtext, 4, pos);
  ourtext2= "cooper lovano";
  text(ourtext2, 4, pos+160);
  ourtext3= "cooper lovano";
  text(ourtext3, 4, pos+180);
  ourtext4= "cooper lovano";
  text(ourtext4, 4, pos+200);ourtext5= "cooper lovano";
  text(ourtext5, 4, pos+220);
  ourtext6= "cooper lovano";
  text(ourtext6, 4, pos+240);
  ourtext7= "cooper lovano";
  text(ourtext7, 4, pos+260);
  ourtext8= "cooper lovano";
  text(ourtext8, 4, pos+280);

  */

  //rect(25, pos, 50, 50);
  //ourtext= "stories and stories and stories";
  //text(ourtext, 10, pos);
  
}

function rep1(){
  for (i=0; i<3; i++){
    ourtext= "stories and stories and stories";
    text(ourtext, i, pos);
  }
}
function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}