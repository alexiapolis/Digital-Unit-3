var y1 = 100;
 var y2 = 300;
 var i = 0;
 
 function setup() { 
  
   createCanvas(700, 700) 

   frameRate(13);
 }

 function draw() {
  
  background(random(255),random(255), random(255), 95);

 
   strokeWeight(20) ;
   strokeCap(SQUARE) ;
   
   stroke(229, 28, 58, 80);
   line(250, y1, 50, y2);
   
   stroke(108, 94, 169, 96);
   line(388, y1, 188, y2);
   
   stroke(255, 194, 15);
   line(526, y1, 326, y2);
   
   
    y1 = y1 + 5;
    y2 = y2 - 5;
    
   
  if (i < 6 ){
     
    y2 = y2 + 55;
    y1 = y1 + 55;
  
    i++;
    
    
    
  }
   
 }

 
 
 