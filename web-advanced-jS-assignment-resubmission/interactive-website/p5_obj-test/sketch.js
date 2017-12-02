var num_of_circle = 45;
var iterator = 0;
var circle_collection = {};
var Circle = function(){
  this.x = Math.random(0,500)*500;
  this.y = Math.random(0,500)*430;
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
    if(this.x >= 500 ){
      this.toggle_x = false;
    }
    if(this.y >= 500){
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


var pand = {
  length : 100,
  height : 450,
  drawup : function(){
    rect(mouseX, this.height, this.length, this.length/10);
  }
}

function setup() {
  createCanvas(500,500);
}

for (var i = 0; i < num_of_circle; i++) {
  circle_collection[i] = new Circle();
}
function draw() {
  background(255, 204, 0);
  noStroke();

  for (var i = 0; i < num_of_circle; i++) {
    circle_collection[i].move();
    ellipse(circle_collection[i].x, circle_collection[i].y, 5, 5);
    text(circle_collection[i].panelty, 10+(i*10), 30 );
  }
  pand.drawup();



}
