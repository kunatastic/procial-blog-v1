/*
 * Design Inspired in snapshot by Rappora :3
 * https://dribbble.com/shots/2054963-Hamburger-Nav
 *
 * Post Content by
 * https://www.rcplondon.ac.uk/events/scholar-courtier-magician-lost-library-john-dee
 */
$(".toggle-button").on("click", function () {
  $(".sidebar").toggleClass("active");
  if ($(".sidebar").hasClass("active")) {
    $("body").addClass("non-margin");
  } else {
    $("body").removeClass("non-margin");
  }
});
