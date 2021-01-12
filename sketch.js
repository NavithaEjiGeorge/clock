
function setup() {
  createCanvas(800,500);
  angleMode(DEGREES);

  
}

function draw() {
  background(0);  
  

  fill(255);
  textSize(24);
  textStyle("bold");
 // text("~Tick - Tock Clock ~ :D;",100,400);
 // text("Blue and Yellow Color Denotes Second Hand",50,450);

  translate(200,200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
 let sc = second();


  stroke("blue");
  strokeWeight(7);
  noFill();
  let end  = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);

  stroke("red");
  strokeWeight(7);
  noFill();
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);

  stroke("green");
  strokeWeight(7);
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
 
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  

  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();

stroke("black");
point(0,0);

  
}