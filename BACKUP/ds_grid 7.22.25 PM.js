function setup() {
  createCanvas(windowWidth, windowHeight);
  
  stroke(255);
  noFill();
  
  beginShape();
  vertex(0, height);
  vertex(width/2, 0);
  vertex(width, height);
  endShape();
  
  beginShape();
  vertex(0, height/2);
  vertex(width/2, height);
  vertex(width, height/2);
  endShape();
  
  beginShape();
  vertex(0, height/1.335);
  vertex(width/2, height/2);
  vertex(width, height/1.335);
  endShape();
  
  line(0, 0, width, height);
  line(0, height, width, 0);
  line(width/2, 0, width/2, height);
}

function draw() {
  
}