import "./page__header.scss";

var $content = $(".content");
var $header = $("header");

$(".header__menu").click(function() {
  $content.toggleClass("content_shift");
  $header.toggleClass("header_shift");
});

window.addEventListener("touchmove", function () {
  $content.removeClass("content_shift");
  $header.removeClass("header_shift");
});