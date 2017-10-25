var _ = require('underscore');
var fs = require('fs');
var final = [];
fs.readFile("data_Jan_31.json",'utf8',function(e,d){
  var data = JSON.parse(d);


  for(var i = 0; i<data.length;i++){
    data[i].pickup_datetime = Date.parse(data[i].pickup_datetime) - 1359608400000;
    data[i].dropoff_datetime = Date.parse(data[i].dropoff_datetime) - 1359608400000;
    //1357880400000 is the millisecends in 2013-01-11 00:00:00;
    // 1359608400000 is the millisecends in 2013-01-31 00:00:00;
  };
  var a = _.groupBy(data,"medallion");
  _.each(a,function(aa){
    final.push(aa);
   })
   cb();
});

function cb(){
  fs.writeFileSync("data_Jan_31_after_parse.json",JSON.stringify(final));
}
