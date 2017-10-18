var $selectItem;

$(document).ready(test);

function test(){
  $.ajax({
   url: 'https://api.giphy.com/v1/gifs/trending?api_key=BQebY2BrWuHf2vrt9akgjundEQsvqsa7&limit=25&rating=G',
   data: {
      format: 'json'
   },
   error: function() {
      window.alert("error from API");
   },
   dataType: 'json',
   success: function(data) {

     $.ajax({
      url: 'https://quotes.rest/qod.json',
      data: {
         format: 'json'
      },
      error: function() {
         window.alert("error from API");
      },
      dataType: 'json',
      success: function(d) {
        $("#big-title h3").text("Author: " + d.contents.quotes[0].author)
        $("#big-title p").text(d.contents.quotes[0].quote)
      },
      type: 'GET'
      });


      $selectItem =data.data[ Math.floor(d3.randomUniform(1, data.data.length)()) ]
      console.log(data);

      $('#text_graph').attr('href',$selectItem.images.original.url)

   },
   type: 'GET'
  });


  $('.btn_next').click(button_clicked_jumpTo_next); //button in the landing page.
  $('#graph').css('top',(window.innerHeight - 640) /2 +40) //get svg always vertical align.


    // $("#big-title h1").text(title[ Math.floor(Math.random()*10) ])

    // $("#big-title p").text(poem[0])

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

          $.ajax({
           url: 'https://api.giphy.com/v1/gifs/trending?api_key=BQebY2BrWuHf2vrt9akgjundEQsvqsa7&limit=25&rating=G',data: {format: 'json'},
           error: function() {window.alert("error from API");},dataType: 'json',
           success: function(data) {

             $.ajax({
              url: 'https://quotes.rest/qod.json?category=management',
              data: {
                 format: 'json'
              },
              error: function() {
                 window.alert("error from API");
              },
              dataType: 'json',
              success: function(d) {
                $(".graph-scroll-active h3").text("Author: " + d.contents.quotes[0].author)
                $(".graph-scroll-active p").text(d.contents.quotes[0].quote)
              },
              type: 'GET'
              });


              $selectItem =data.data[ Math.floor(d3.randomUniform(1, data.data.length)()) ]
              // console.log(data);

              $('#text_graph').attr('href',$selectItem.images.original.url)

           },
           type: 'GET'
          });

        }
        if(i == 1){


          $.ajax({
           url: 'https://api.giphy.com/v1/gifs/trending?api_key=BQebY2BrWuHf2vrt9akgjundEQsvqsa7&limit=25&rating=G',data: {format: 'json'},
           error: function() {window.alert("error from API");},dataType: 'json',
           success: function(data) {

             $.ajax({
              url: 'https://quotes.rest/qod.json?category=sports',
              data: {
                 format: 'json'
              },
              error: function() {
                 window.alert("error from API");
              },
              dataType: 'json',
              success: function(d) {
                $(".graph-scroll-active h3").text("Author: " + d.contents.quotes[0].author)
                $(".graph-scroll-active p").text(d.contents.quotes[0].quote)
              },
              type: 'GET'
              });


              $selectItem =data.data[ Math.floor(d3.randomUniform(1, data.data.length)()) ]
              // console.log(data);

              $('#text_graph').attr('href',$selectItem.images.original.url)

           },
           type: 'GET'
          });


        };
        if(i == 2){


          $.ajax({
           url: 'https://api.giphy.com/v1/gifs/trending?api_key=BQebY2BrWuHf2vrt9akgjundEQsvqsa7&limit=25&rating=G',data: {format: 'json'},
           error: function() {window.alert("error from API");},dataType: 'json',
           success: function(data) {

             $.ajax({
              url: 'https://quotes.rest/qod.json?category=life',
              data: {
                 format: 'json'
              },
              error: function() {
                 window.alert("error from API");
              },
              dataType: 'json',
              success: function(d) {
                $(".graph-scroll-active h3").text("Author: " + d.contents.quotes[0].author)
                $(".graph-scroll-active p").text(d.contents.quotes[0].quote)
              },
              type: 'GET'
              });


              $selectItem =data.data[ Math.floor(d3.randomUniform(1, data.data.length)()) ]
              // console.log(data);

              $('#text_graph').attr('href',$selectItem.images.original.url)

           },
           type: 'GET'
          });



        };
        if(i == 3){

          $.ajax({
           url: 'https://api.giphy.com/v1/gifs/trending?api_key=BQebY2BrWuHf2vrt9akgjundEQsvqsa7&limit=25&rating=G',data: {format: 'json'},
           error: function() {window.alert("error from API");},dataType: 'json',
           success: function(data) {

             $.ajax({
              url: 'https://quotes.rest/qod.json?category=funny',
              data: {
                 format: 'json'
              },
              error: function() {
                 window.alert("error from API");
              },
              dataType: 'json',
              success: function(d) {
                $(".graph-scroll-active h3").text("Author: " + d.contents.quotes[0].author)
                $(".graph-scroll-active p").text(d.contents.quotes[0].quote)
              },
              type: 'GET'
              });


              $selectItem =data.data[ Math.floor(d3.randomUniform(1, data.data.length)()) ]
              // console.log(data);

              $('#text_graph').attr('href',$selectItem.images.original.url)

           },
           type: 'GET'
          });


        };
      });
}
