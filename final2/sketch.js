function setup() {

  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();

  mic.start();
}

function draw() {
  var vol = mic.getLevel();
  var colB = map(vol, 0, 1, 255, -50);
  var colR = map(vol, 0, 1, 0, 500);
  

  background(colR, 0, colB);
  
 
  var h = map(vol, 0, 1, height/2, 0);
  var a = map(vol, 0, 1, height/2, height);

  strokeWeight(40) ;
   strokeCap(SQUARE) ;
   
   stroke(random(255),random(255), random(255));
   line(width/4, h, width/4, a);
   
   stroke(random(255),random(255), random(255));
   line(width/2, h, width/2, a);
   
   stroke(random(255),random(255), random(255));
   line(width*0.75, h, width*0.75, a);
  
  
}