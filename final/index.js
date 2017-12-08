var grid = d3.divgrid();

function wrap(text, width) {
  text.each(function(d) {

    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy"));
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);

      }
    }
  });
}
$('.table-select select').change(function(){
  d3.selectAll('svg').remove();
  d3.selectAll('#data_table div').remove();
  d3.csv('data/academy_awards_'+ $('.table-select select option:selected').text() +'.csv', function(data) {
    table_generator(data);

    viz_2(data);

    viz_1(data);
  });
 });
 d3.csv('data/academy_awards_'+ $('.table-select select option:selected').text() +'.csv', function(data) {
   table_generator(data);

   viz_2(data);

   viz_1(data);
 });


function table_generator(grid_data){
  d3.select('#data_table')
    .datum(grid_data)
    .call(grid);
  $('.cell').width( $("#data_table").width() / 5 )
  d3.select('#data_table .header')
    .append('div')
    .attr('id','table_divider_top');
  $('.row:last').attr('id','adjust_row')

  d3.selectAll('.cell').each(function(d,i){
    if(i > 5){

    if(d3.select(this).text().match(/^YES/g)){

      d3.select(this).style('color','#36972C')

    }else if(d3.select(this).text().match(/^NO/g)){
      d3.select(this).style('color','#e05a44')
    }
  }
  })
}

function viz_2(data){
  var wrap = d3.textwrap();

  var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = $('.model-2-svg-container').width() +500 - margin.left - margin.right,
    height = $('.model-2-svg-container').height() - margin.top - margin.bottom;

  var svg = d3.select('.model-2-svg-container')
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //by nonime times
  var dataSorted = (() => {
    let temp = _.groupBy(data,(d) => d.Nominee);
    return _.sortBy(temp,(d) => d.length).reverse();
  })();
  //scale
  var x = d3.scalePoint().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  x.domain( dataSorted.map( e => e[0].Nominee) );
  y.domain([0, d3.max(dataSorted, function(d) { return d.length; })]);

  //draw chart
  svg.selectAll('.dot')
    .data(dataSorted).enter().append('circle')
    .attr('class',(d) => 'dot '+ d[0].Nominee)
    .attr('r',5)
    .attr('cx', _d => x(_d[0].Nominee))
    .attr('cy', _d => y(_d.length))
    .style("fill", '#4E504C')

  //mouseover
  svg.selectAll('.dot').on('mouseover',function(e){
    d3.select(this)
      .attr('r',10)
      .style('fill','#DC5E50');

    var popUp = {
      x: +d3.select(this).attr('cx') + 20,
      y: +d3.select(this).attr('cy') + 10,
      width: 250,
      height: 100
    }
    //bg
    svg.append('rect')
      .attr('class','popup')
      .attr('x', +popUp.x)
      .attr('y', +popUp.y)
      .attr('width',popUp.width)
      .attr('height',popUp.height)
      .attr('fill','#C3C4C9')
      .attr('rx',5)
    //header
    svg.append('text')
      .attr('class','popup Nominee-name')
      .attr('x', +popUp.x + 10)
      .attr('y', +popUp.y + 20)
      .text(() => d3.select(this).datum()[0].Nominee)

    //content
    svg.append('text')
      .attr('class','popup wrap')
      .attr('x', popUp.x )
      .attr('y', popUp.y +40 )
      .attr('dy', 0 )
      .text(() => d3.select(this).datum().reduce((a,c,i) => a + ' | ' + c.Category ,""))

      wrap.bounds({width:popUp.width , height: popUp.height - 20 }).method('tspans')
      d3.select('.wrap').call(wrap);

  }).on('mouseout',function(e){
    d3.selectAll('.wrap').remove();
    d3.selectAll('.popup').transition().duration(100).style('opacity',0).on('end',function() {
      d3.select(this).remove()
    })
    d3.select(this)
      .attr('r',5)
      .style('fill','#4E504C');
  })

    //y axis
    svg.append("g")
        .call(d3.axisLeft(y));
}

function viz_1(data){
  var wrap = d3.textwrap();

  var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = $('.model-1-svg-container').width() - margin.left - margin.right,
    height = $('.model-1-svg-container').height() - margin.top - margin.bottom;

  var svg = d3.select('.model-1-svg-container')
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var dataSorted = (() => {
    let f = [];
    let temp = _.sortBy(_.groupBy(data,(d) => d.Nominee),(d) => d.length).reverse();
    temp.forEach((d) => {
        d = _.filter(d,function(elem){ return elem["Won?"].toUpperCase() === "YES" })
        if(d.length >0) f.push(d)
    });
    return f;
  })();

  //scale
  var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);

  var y = d3.scaleLinear()
          .range([height, 0]);
  x.domain(dataSorted.map(function(d) { return d[0].Nominee; }));
  y.domain([0, d3.max(dataSorted, function(d) { return d.length; })]);

  svg.selectAll(".bar")
      .data(dataSorted)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d[0].Nominee); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.length); })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", '#4E504C')

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll(".tick text")
      .remove()


  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));


  svg.selectAll('rect').on('mouseover',function(e){
    d3.select(this)
      .style('fill','#DC5E50');

    var popUp = {
      x: +d3.select(this).attr('x') + 20,
      y: 10,
      width: 350,
      height: 100
    }
    //bg
    svg.append('rect')
      .attr('class','popup')
      .attr('x', +popUp.x)
      .attr('y', +popUp.y)
      .attr('width',popUp.width)
      .attr('height',popUp.height)
      .attr('fill','#C3C4C9')
      .attr('rx',5)
    //header
    svg.append('text')
      .attr('class','popup Nominee-name')
      .attr('x', +popUp.x + 10)
      .attr('y', +popUp.y + 20)
      .text(() => d3.select(this).datum()[0].Nominee)

      //content
      svg.append('text')
        .attr('class','popup wrap')
        .attr('x', popUp.x )
        .attr('y', popUp.y +40 )
        .attr('dy', 0 )
        .text(() => d3.select(this).datum().reduce((a,c,i) => a + ' | ' + c.Category ,""))

        // wrap.bounds({width:popUp.width , height: popUp.height - 20 }).method('tspans')
        // d3.select('.wrap').call(wrap);


  })
  .on('mouseout',function(d){
    d3.selectAll('.wrap').remove();

    d3.select(this)
      .style("fill", '#4E504C');

    d3.selectAll('.popup').transition().duration(100).style('opacity',0).on('end',function() {
      d3.select(this).remove()
    })


  })

}
