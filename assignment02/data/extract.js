var fs = require('fs');
// var async = require('async')
var csv = require('fast-csv')
var prosessedData = [];


var stream = fs.createReadStream('trip_data_1.csv');

csv.fromStream(stream,{headers : ["medallion",,,,,"pickup_datetime","dropoff_datetime",,,"trip_distance",,,,,
]})
 .validate(function(data){
   return data.pickup_datetime.match(/2013-01-31/g)
   })
 .on("data-invalid",function(data){
   console.log("illegal info")
   })
 .on("data", function(data){
    console.log(data);
    prosessedData.push(data);
   })
 .on("end", function(){
      console.log("done");
      writeFile();
 });

function writeFile (){
  console.log("start writing file")
  fs.writeFileSync("data_Jan_31.json",JSON.stringify(prosessedData));
}
