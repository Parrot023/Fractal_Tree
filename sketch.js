//Fractal tree
//using p5.js and p5.dom.min.js
//learned from
//Daniel Shiffman
//https://youtu.be/0jjeOYMjmDU

var slider;
var checkbox;
var angle = 0;

function setup() {
  //canvas
  createCanvas(600, 600);
  background(0);
  //HTML slider
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);


  // put setup code here
}

function draw() {
  background(0);
  //translate moves 0,0 to a place you specify
  //in this case it is width / 2, height.
  //before 0,0 were the top left corner
  translate(width / 2, height);
  stroke(255);
  strokeWeight(1);
  //branches is the funcion the draws
  //the branches and keeps calling it self
  //this is called recursion
  branch(150);

  //sets angle to the value given by the slider
  if (document.getElementById('checkbox').checked) {
    angle = slider.value();
  } else {
    angle += 0.02;
  }

}

//recursion
//the function is calling it self over and over again
function branch(len) {
  line(0, 0, 0,  - len);
  translate(0, -len);
  //if len is less than 4 the function wont
  //call it self to prevent an infinite loop
  if (len > 4) {
    //push is saving the current translate
    push();
    rotate(angle);
    //the branches get shorter every time
    branch(len * 0.67);
    //pop goes back to the translate that we saved with push
    pop();
    //the branches get shorter every time
    push();
    rotate(-angle);
    //the branches get shorter over time
    branch(len * 0.67);
    //pop goes back to the translate that we saved with push
    pop();
  }
}
