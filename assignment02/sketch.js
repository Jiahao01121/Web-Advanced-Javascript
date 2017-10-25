var conter = 0;
var navigatorr;
var a = 0.7;
var y_value = 80;
var y_value_for_11 = 300;
var y_value_for_31 = 520;

function setup() {
  loadJSON("data/FinalDataForVizSample.json", drawData);
  loadJSON("data/data_Jan_11_Sample_200.json", drawData_11);
  loadJSON("data/data_Jan_31_Sample_200.json", drawData_31);
  miller = loadFont("data/Miller-DisplaySC.otf");

createCanvas(windowWidth,windowHeight);
  navigatorr = createGraphics(windowWidth, windowHeight);
  background(0);
}

function draw() {
    navigatorr.fill(0,255);
    navigatorr.noStroke();
    navigatorr.rect(0, 0, width, height);
    navigatorr.fill(255);
    var Mx = map(mouseX,0,windowWidth,0,windowWidth/2)
    navigatorr.stroke(255, 204, 0);
    navigatorr.strokeWeight(1);
    navigatorr.line(Mx, 0, Mx, 200);
    image(navigatorr, 0, 0, windowWidth, 25);
    var time = map(mouseX,40,windowWidth-40,0,86400000);
    // console.log(moment.utc(new Date(time).toUTCString()).format('hh:mm A'));
    // console.log(new Date(time).getUTCMinutes());
    if(mouseX>40 && mouseX<windowWidth-40){
      fill(255, 255, 255);
      textSize(25);
      text("TAXI | WEATHER DATA",1112,22);
      if(mouseX<map(58740000,0,86400000,40,windowWidth-40)){
      text(moment.utc(new Date(time).toUTCString()).format('hh:mm A'),mouseX+20,20);
      }


      if(mouseX>map(58740000,0,86400000,40,windowWidth-40)){
        text(moment.utc(new Date(time).toUTCString()).format('hh:mm A'),mouseX-120,20);
      }
      //jan11
      if(mouseX>map(63060000,0,86400000,40,windowWidth-40) && mouseX<map(69120000,0,86400000,40,windowWidth-40)){
        fill(255, 255, 255);
        textSize(12);
        text("Jan 11 Rain",mouseX-200,20);
        console.log("aaa");
      }
      //jan16
      if(mouseX>map(3060000,0,86400000,40,windowWidth-40) && mouseX<map(12060000,0,86400000,40,windowWidth-40)){
        fill(255, 255, 255);
        textSize(12);
        text("Jan 16 Rain",mouseX+140,20);
        console.log("aaa");
      }
      //jan31
      if(mouseX>map(13860000,0,86400000,40,windowWidth-40) && mouseX<map(24300000,0,86400000,40,windowWidth-40)){
        fill(255, 255, 255);
        textSize(12);
        text("Jan 31 Rain",mouseX+140,20);
        console.log("aaa");
      }
      textFont(miller);

    }

    strokeWeight(1);
    fill(255, 255, 255);
    strokeWeight(1);

    line( map(3060000,0,86400000,40,windowWidth-40),45,map(3060000,0,86400000,40,windowWidth-40),725 );
    strokeWeight(1);

    line( map(6660000,0,86400000,40,windowWidth-40),45,map(6660000,0,86400000,40,windowWidth-40),725 );
    strokeWeight(1);

    line( map(12060000,0,86400000,40,windowWidth-40),45,map(12060000,0,86400000,40,windowWidth-40),725 );
    //11 Jan
    line( map(63060000,0,86400000,40,windowWidth-40),45,map(63060000,0,86400000,40,windowWidth-40),725 );

    line( map(69120000,0,86400000,40,windowWidth-40),45,map(69120000,0,86400000,40,windowWidth-40),725 );
    //31 Jan
    line( map(13860000,0,86400000,40,windowWidth-40),45,map(13860000,0,86400000,40,windowWidth-40),725 );

    line( map(24300000,0,86400000,40,windowWidth-40),45,map(24300000,0,86400000,40,windowWidth-40),725 );

    fill(0);
}


function drawData(d){
  // console.log(d);
    for(var i = 0; i<130; i++){
      y_value +=1.5;
      for(var it = 0; it<d[i].length; it++){
          // console.log(d[i][it].x_1)
          var x1AfterMap = map(d[i][it].x_1,0,86400000,40,windowWidth-40);
          var x2AfterMap = map(d[i][it].x_2,0,86400000,40,windowWidth-40);
          // strokeWeight(d[i][it].thickness  );
          // strokeWeight()

          // var colorV = Math.floor( map(d[i][it].colorValue,0,15,255,50) );
          /*color scale
          ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
          */
          // var from = color(26,30,0);
          var from =color('rgba(26,30,0,'+a + ')')
          // var to = color(245, 235, 19);
          var to = color('rgba(245,235,19,'+a + ')')
        if(d[i][it].colorValue <2 && d[i][it].colorValue >=0 ){
          // stroke("#ffffcc",0.8);
          // stroke(lerpColor(from, to, 0.11))
          stroke('rgba(128,0,38,'+a + ')');
        };
        if(d[i][it].colorValue <4 && d[i][it].colorValue >=2 ){
          // stroke("#ffeda0",0.);
          // stroke(lerpColor(from, to, 0.22))
          stroke('rgba(189,0,38,'+a + ')');

        };
        if(d[i][it].colorValue <6 && d[i][it].colorValue >=4 ){
          // stroke("#fed976",0.);
          // stroke(lerpColor(from, to, 0.33))
          stroke('rgba(227,26,28,'+a + ')');
        };
        if(d[i][it].colorValue <8 && d[i][it].colorValue >=6 ){
          // stroke("#feb24c",0.);
          // stroke(lerpColor(from, to, 0.44))
            stroke('rgba(254,178,76,'+a + ')');
        };
        if(d[i][it].colorValue <10 && d[i][it].colorValue >=8 ){
          // stroke("#fd8d3c",0.);
          // stroke(lerpColor(from, to, 0.55))
          stroke('rgba(252,78,42,'+a + ')');
        };
        if(d[i][it].colorValue <12 && d[i][it].colorValue >=10 ){
          // stroke("#fc4e2a",0.);
          // stroke(lerpColor(from, to, 0.66))
          stroke('rgba(253,141,60,'+a + ')');
        };
        if(d[i][it].colorValue <14 && d[i][it].colorValue >=12 ){
          // stroke("#e31a1c",0.);
          // stroke(lerpColor(from, to, 0.77))
          stroke('rgba(254,217,118,'+a + ')');

        };
        if(d[i][it].colorValue <16 && d[i][it].colorValue >=14 ){
          // stroke("#bd0026",0.);
          // stroke(lerpColor(from, to, 0.88))
          stroke('rgba(255,237,160,'+a + ')');

        };
        if(d[i][it].colorValue <20 && d[i][it].colorValue >=16 ){
          // stroke("#800026",0.);
          // stroke(lerpColor(from, to, 0.99))
          stroke('rgba(255,255,204,'+ a + ')');
//
        };
          line(x1AfterMap , y_value , x2AfterMap , y_value);
      }
  }

//text
noStroke();
fill(255, 255, 255);
textSize(7);
text("12:51AM",map(3060000,0,86400000,40,windowWidth-40)-12,35);
text("01:51AM",map(6660000,0,86400000,40,windowWidth-40) -12,35);
text("03:21AM",map(12060000,0,86400000,40,windowWidth-40) -12,35);

//11
text("05:31PM",map(63060000,0,86400000,40,windowWidth-40) -12,35);
text("07:31PM",map(69120000,0,86400000,40,windowWidth-40) -12,35);

//31
text("03:51AM",map(13860000,0,86400000,40,windowWidth-40) -5,35);
text("06:45AM",map(24300000,0,86400000,40,windowWidth-40) -12,35);

textFont("Helvetica");
textSize(50);
fill('rgba(255,255,255,0.5)');
text("Jan 11 2013",1030+ 110+3, 303+192 );
text("Jan 16 2013",1030+110, 83+192);

//line
stroke(91, 91, 91);
strokeWeight(2);
// console.log(Date.parse("2013-01-16 12:51:00") - 1358312400000);
}

function drawData_11(d){

    for(var i = 0; i<130; i++){
      y_value_for_11 +=1.5;
      for(var it = 0; it<d[i].length; it++){
          // console.log(d[i][it].x_1)
          var x1AfterMap = map(d[i][it].pickup_datetime,0,86400000,40,windowWidth-40);
          var x2AfterMap = map(d[i][it].dropoff_datetime,0,86400000,40,windowWidth-40);
          // strokeWeight(d[i][it].thickness  );
          // strokeWeight()

          // var colorV = Math.floor( map(d[i][it].colorValue,0,15,255,50) );
          /*color scale
          ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
          */
          // var from = color(26,30,0);
          var from =color('rgba(26,30,0,'+a + ')')
          // var to = color(245, 235, 19);
          var to = color('rgba(245,235,19,'+a + ')')
        if(d[i][it].trip_distance <2 && d[i][it].trip_distance >=0 ){
          // stroke("#ffffcc",0.8);
          // stroke(lerpColor(from, to, 0.11))
          stroke('rgba(128,0,38,'+a + ')');
        };
        if(d[i][it].trip_distance <4 && d[i][it].trip_distance >=2 ){
          // stroke("#ffeda0",0.);
          // stroke(lerpColor(from, to, 0.22))
          stroke('rgba(189,0,38,'+a + ')');
        };
        if(d[i][it].trip_distance <6 && d[i][it].trip_distance >=4 ){
          // stroke("#fed976",0.);
          // stroke(lerpColor(from, to, 0.33))
          stroke('rgba(227,26,28,'+a + ')');
        };
        if(d[i][it].trip_distance <8 && d[i][it].trip_distance >=6 ){
          // stroke("#feb24c",0.);
          // stroke(lerpColor(from, to, 0.44))
            stroke('rgba(254,178,76,'+a + ')');
        };
        if(d[i][it].trip_distance <10 && d[i][it].trip_distance >=8 ){
          // stroke("#fd8d3c",0.);
          // stroke(lerpColor(from, to, 0.55))
          stroke('rgba(252,78,42,'+a + ')');
        };
        if(d[i][it].trip_distance <12 && d[i][it].trip_distance >=10 ){
          // stroke("#fc4e2a",0.);
          // stroke(lerpColor(from, to, 0.66))
          stroke('rgba(253,141,60,'+a + ')');
        };
        if(d[i][it].trip_distance <14 && d[i][it].trip_distance >=12 ){
          // stroke("#e31a1c",0.);
          // stroke(lerpColor(from, to, 0.77))
          stroke('rgba(254,217,118,'+a + ')');

        };
        if(d[i][it].trip_distance <16 && d[i][it].trip_distance >=14 ){
          // stroke("#bd0026",0.);
          // stroke(lerpColor(from, to, 0.88))
          stroke('rgba(255,237,160,'+a + ')');

        };
        if(d[i][it].trip_distance <20 && d[i][it].trip_distance >=16 ){
          // stroke("#800026",0.);
          // stroke(lerpColor(from, to, 0.99))
          stroke('rgba(255,255,204,'+ a + ')');
//
        };
          line(x1AfterMap , y_value_for_11 , x2AfterMap , y_value_for_11)
      }
  }
//
// //text
// noStroke();
// fill(255, 255, 255);
// text("12:51AM",map(3060000,0,86400000,40,windowWidth-40) -50,35);
// text("01:51AM",map(6660000,0,86400000,40,windowWidth-40) -50,35);
// text("03:21AM",map(12060000,0,86400000,40,windowWidth-40) -50,35);
// //line
// stroke(91, 91, 91);
// strokeWeight(2);
// console.log(Date.parse("2013-01-16 12:51:00") - 1358312400000);

}
function drawData_31(d){

    for(var i = 0; i<130; i++){
      y_value_for_31 +=1.5;
      for(var it = 0; it<d[i].length; it++){
          // console.log(d[i][it].x_1)
          var x1AfterMap = map(d[i][it].pickup_datetime,0,86400000,40,windowWidth-40);
          var x2AfterMap = map(d[i][it].dropoff_datetime,0,86400000,40,windowWidth-40);
          // strokeWeight(d[i][it].thickness  );
          // strokeWeight()

          // var colorV = Math.floor( map(d[i][it].colorValue,0,15,255,50) );
          /*color scale
          ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
          */
          // var from = color(26,30,0);
          var from =color('rgba(26,30,0,'+a + ')')
          // var to = color(245, 235, 19);
          var to = color('rgba(245,235,19,'+a + ')')
        if(d[i][it].trip_distance <2 && d[i][it].trip_distance >=0 ){
          // stroke("#ffffcc",0.8);
          // stroke(lerpColor(from, to, 0.11))
          stroke('rgba(128,0,38,'+a + ')');
        };
        if(d[i][it].trip_distance <4 && d[i][it].trip_distance >=2 ){
          // stroke("#ffeda0",0.);
          // stroke(lerpColor(from, to, 0.22))
          stroke('rgba(189,0,38,'+a + ')');
        };
        if(d[i][it].trip_distance <6 && d[i][it].trip_distance >=4 ){
          // stroke("#fed976",0.);
          // stroke(lerpColor(from, to, 0.33))
          stroke('rgba(227,26,28,'+a + ')');
        };
        if(d[i][it].trip_distance <8 && d[i][it].trip_distance >=6 ){
          // stroke("#feb24c",0.);
          // stroke(lerpColor(from, to, 0.44))
            stroke('rgba(254,178,76,'+a + ')');
        };
        if(d[i][it].trip_distance <10 && d[i][it].trip_distance >=8 ){
          // stroke("#fd8d3c",0.);
          // stroke(lerpColor(from, to, 0.55))
          stroke('rgba(252,78,42,'+a + ')');
        };
        if(d[i][it].trip_distance <12 && d[i][it].trip_distance >=10 ){
          // stroke("#fc4e2a",0.);
          // stroke(lerpColor(from, to, 0.66))
          stroke('rgba(253,141,60,'+a + ')');
        };
        if(d[i][it].trip_distance <14 && d[i][it].trip_distance >=12 ){
          // stroke("#e31a1c",0.);
          // stroke(lerpColor(from, to, 0.77))
          stroke('rgba(254,217,118,'+a + ')');

        };
        if(d[i][it].trip_distance <16 && d[i][it].trip_distance >=14 ){
          // stroke("#bd0026",0.);
          // stroke(lerpColor(from, to, 0.88))
          stroke('rgba(255,237,160,'+a + ')');

        };
        if(d[i][it].trip_distance <20 && d[i][it].trip_distance >=16 ){
          // stroke("#800026",0.);
          // stroke(lerpColor(from, to, 0.99))
          stroke('rgba(255,255,204,'+ a + ')');
//
        };
          line(x1AfterMap , y_value_for_31 , x2AfterMap , y_value_for_31)
      }
  }

// //text
// noStroke();
// fill(255, 255, 255);
// text("12:51AM",map(3060000,0,86400000,40,windowWidth-40) -50,35);
// text("01:51AM",map(6660000,0,86400000,40,windowWidth-40) -50,35);
// text("03:21AM",map(12060000,0,86400000,40,windowWidth-40) -50,35);
// //line
// stroke(91, 91, 91);
// strokeWeight(2);
// console.log(Date.parse("2013-01-16 12:51:00") - 1358312400000);
fill('rgba(255,255,255,0.5)');
textFont("Helvetica");
noStroke();
textSize(50);
text("Jan 31 2013",1030+110, 523+192);
textSize(10);
fill('rgba(255,255,255,0.7)');
text("Data from Taxi Limousine Commission \n each day randomly draw 130 taxi from dataset",42,750);


}


//
// var pg;
// function setup() {
  // createCanvas(windowWidth, windowHeight);
  // pg = createGraphics(1200, 1200);
// }
// function draw() {
  // background(200,12,130);


  // pg.background(100);
  // pg.noStroke();
  // pg.ellipse(mouseX,10, 50, 50);
  // image(pg, 50, 50);
  // image(pg, 0, 0, 350, 50);
// }
