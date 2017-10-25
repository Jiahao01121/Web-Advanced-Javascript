var fs = require("fs");
var _ = require('underscore');
fs.readFile("data_Jan_31_after_parse.json",'utf8',function(e,d){
  var data = JSON.parse(d);

  var sample = _.sample(data,200);
  fs.writeFileSync("data_Jan_31_Sample_200.json",JSON.stringify(sample));
})
