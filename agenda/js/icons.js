/*
 * Credit to Irvin Dominin for the animation https://stackoverflow.com/questions/21182535/animate-css-in-hover
 */
$(function() {
  $(".icon").mouseenter(function(event) {
    $(this).addClass("animated bounce");
  });
  $(".icon").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
    $(this).removeClass("animated bounce");
  });
  $("#darkToggle").on("click", function(event) {
    var check = $(this).is(":checked");
    if (check) {
      $("#agendaIcons").addClass("darkMode");
      $("i").removeClass("fa-moon-o");
      $("i").addClass("fa-sun-o");
      $("#darkToggleL").text("Lighten Background");
    } else {
      $("#agendaIcons").removeClass("darkMode");
      $("i").removeClass("fa-sun-o");
      $("i").addClass("fa-moon-o");
      $("#darkToggleL").text("Darken Background");
    }
  });
});