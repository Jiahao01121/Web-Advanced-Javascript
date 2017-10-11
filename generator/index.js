$(document).ready(test);

function test(){
  var title = ['Will','Bill','phill','jane','jesson','JJ','MM','elen','glue','eme']
  var poem = ["Emptiness is a blessing: it can’t be owned if it doesn’t exist.My father said to bloom but never fruit— a small trickle eating its way through stone. I am one kind of alive: I see everything the water sees. I told you a turn was going to come & turn the tower did. What are the master’s tools but a way to dismantle him. Who will replace the blood of my mother in me— a cold spring rising. She told me a woman made of water can never crack. Of her defeat, she said this is nothing.","means nostalgia, I’m told, but also nostalgia for what never was. Isn’t itthe same thing? At a caféin Rio flies wreathe my glass.How you would have loved this: the waitersweating his knit shirt dark. Childrenloping, in tiny suits or long shorts, draggingtoys and towels to the beach. We talk,or I talk, and imagine your answer, the heat clouding our view.Here, again, grief fashioned in its cruelest translation: my imagined you is all I have left of you."]
  $('.btn_next').click(button_clicked_jumpTo_next); //button in the landing page.
  $('#graph').css('top',(window.innerHeight - 640) /2 +40) //get svg always vertical align.


    $("#big-title h1").text(title[ Math.floor(Math.random()*10) ])
    $("#big-title h3").text(title[ Math.floor(Math.random()*10) ])
    $("#big-title p").text(poem[0])

}



//button event handler.
function button_clicked_jumpTo_next(){

  //scroll page to the first section.
  $('html, body').animate({
    scrollTop: $("#sections_first").offset().top - ( (window.innerHeight / 2) -100)
  }, 1000);
  $('html').css('overflow-y','visible');
  $('body').css('overflow-y','visible');

  //scroll plug-in
  d3.graphScroll()
      .graph(d3.selectAll('#graph'))
      .container(d3.select('#container'))
      .sections(d3.selectAll('#sections > div'))
      .on('active', function(i){
        console.log(i); // section num, start from 0.
        if(i == 0){
          // when scroll to the first section, do something here.
          d3.select('#text_graph')
            .transition()
            .duration(2000)
            .attr('width',30);
        }
        if(i == 1){
          // when scroll to the second section, do something here.
          d3.select('#text_graph')
            .transition()
            .duration(2000)
            .attr('width',300);
        };
        if(i == 2){
          // when scroll to the third section, do something here.
          d3.select('#text_graph')
            .transition()
            .duration(2000)
            .attr('width',10);
        };
        if(i == 3){
          // when scroll to the fourth section, do something here.
          d3.select('#text_graph')
            .transition()
            .duration(2000)
            .attr('fill','rgba(155,211,21,.8)');
        };
      });
}
