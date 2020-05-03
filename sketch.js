// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
   
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  //Making snake
  snake = new Snake();
  foodLocation();
}
//making food appear in random locations
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}
//making the snake move
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(199,0,255);
  //what happens when the snake eats the food 
  if (snake.eat(food)) {
    foodLocation();
  }
  //increase the size of the snake nd displays it again
  snake.update();
  snake.show();

//what happens when the snake falls out of the the canvas
  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}