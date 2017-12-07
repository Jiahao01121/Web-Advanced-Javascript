var num_of_circle = 30;
var iterator = 0;
var circle_collection = {};
var Circle = function(){
  this.x = Math.random(0,window.innerWidth)*window.innerWidth;
  this.y = Math.random(0,window.innerHeight - 200)*(window.innerHeight -200);
  this.toggle_x = true;
  this.toggle_y = true;
  this.panelty = 0;
  this.panelty_toggle = true;
  this.speed = Math.random(0,1)*4;
}
Circle.prototype.move = function(){
    if(this.toggle_x){this.x +=this.speed}
    else if(!this.toggle_x){this.x -=this.speed}
    if(this.toggle_y){this.y +=this.speed}
    else if(!this.toggle_y){this.y -=this.speed}
    if(this.x >= window.innerWidth ){
      this.toggle_x = false;
    }
    if(this.y >= window.innerHeight - 200){
      this.toggle_y = false;
    }
    if(this.y > pand.height && (this.x < mouseX + pand.length &&this.x > mouseX )){
      this.toggle_y = false;

    }
    if(this.x <0){
      this.toggle_x = true;
    }
    if(this.y <0){
      this.toggle_y = true;
    }
    /******************* panelty *******************/
    if(this.y > pand.height+5){
      if(this.panelty_toggle){
        this.panelty++;
        this.panelty_toggle=false
      };
    }
    if(this.y < pand.height){
      this.panelty_toggle=true
    };

    /******************* cheating mode *******************/
    if(this.y == pand.height){

    }

  }
var myFont;
var toggle = false;
var pand = {
  length : 100,
  height : window.innerHeight - 300,
  drawup : function(){
    rect(mouseX, this.height, this.length, this.length/10);
  }
}
function preload() {
  myFont = loadFont('a.ttf');
}
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  img = loadImage("b.png");

}

for (var i = 0; i < num_of_circle; i++) {
  circle_collection[i] = new Circle();
}
function draw() {
  if(!toggle){
    background(255, 204, 0);
    imageMode(CENTER);
    image(img, window.innerWidth /2, window.innerHeight -300);
    textFont(myFont)
    textSize(80)
    textAlign(CENTER);

    text("THE POND", window.innerWidth / 2, 170);

  }
  if(toggle){
    fill(random(50,100),200,random(1,255))

    background(255, 204, 0);
    noStroke();
    rect(4, window.innerHeight -200, window.innerWidth -10, window.innerHeight -200);
    var gut = (window.innerWidth-50) / num_of_circle
    for (var i = 0; i < num_of_circle; i++) {
      circle_collection[i].move();
      fill(0,random(0,255),random(0,255))

      ellipse(circle_collection[i].x, circle_collection[i].y, 5, 5);
      textSize(10)
      text(circle_collection[i].panelty, 10+(i*gut), 30 );
      textSize(30)
      textAlign(LEFT);
      text("Leaderboard", 8, 70);

    }
    pand.drawup();
    fill(random(200,255),random(200,255),random(1,255))

    textFont(myFont)
    textSize(40)
    text("Author: Will Su", window.innerWidth -400,window.innerHeight - 50);
    textSize(20)
    text("pond game", window.innerWidth -400,window.innerHeight -20 );
  }

  }
function mousePressed() {
  toggle = true;
  $('canvas').css('cursor','default')

}
