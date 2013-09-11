$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    add()
  });

  $('#roller button.roll').on('click', function() {
  roll()
  });
});


function add(){
$('.dice').append('<div class="die">0</div>');
}

function roll(){
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
}
