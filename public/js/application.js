$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();
    //console.log(this)
    var url = $(this).attr('action');
//console.log(url)
    $.post(url, function(data){
      console.log(data);
      $( "#die").html(data);
    });
  });
});
