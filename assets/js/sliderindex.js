$(".js-navigate").on("click", function() {

  $(".js-navigate").removeClass("disabled");
  var current = $(".split-slider.active");
  var findNext = $(current).next(".split-slider");
  var findPrev = $(current).prev(".split-slider");
  var button = $(this);
  $(current).removeClass("active");
  setTimeout(function() {
    if ($(button).hasClass("js-right")) {
      $(findNext).addClass("active");
      checkForDisable();
    } else if ($(button).hasClass("js-left")) {
      $(findPrev).addClass("active");
      checkForDisable();
    }
  }, 300);
});


function checkForDisable() {
  var current = $(".split-slider.active");
    
  if ($(current).is(".split-slider:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".split-slider:first")) {
    $(".js-left").addClass("disabled");
  }
}
