$(document).ready(function(){
  var replaced = $("body").html().replace(/hipster/gi, 'James Montour');
  $("body").html(replaced);
});
