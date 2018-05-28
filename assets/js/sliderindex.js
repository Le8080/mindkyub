$(".js-navigate").on("click", function() {
   var id= $(this).attr('customid');
   console.log(id);
  $(".js-navigate").removeClass("disabled");
  var current = $("."+id+"slider.active");
  var findNext = $(current).next("."+id+"slider");
  var findPrev = $(current).prev("."+id+"slider");
  var button = $(this);
  $(current).removeClass("active");
  setTimeout(function() {
    if ($(button).hasClass("js-right")) {
      $(findNext).addClass("active");
      checkForDisable(id);
    } else if ($(button).hasClass("js-left")) {
      $(findPrev).addClass("active");
      checkForDisable(id);
    }
  }, 300);
});


function checkForDisable(id) {
  var current = $("."+id+"slider.active");
    
  if ($(current).is("."+id+"slider:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is("."+id+"slider:first")) {
    $(".js-left").addClass("disabled");
  }
}
