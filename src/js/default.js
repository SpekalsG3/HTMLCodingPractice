import "../assets/scss/default.scss";

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

$(".form").submit(function(e) {
  $(this).find(".form__input").each(function() {
    if (this.value == "") {
      e.preventDefault();
      this.classList.add("form__input_error");
    } else {
      this.classList.remove("form__input_error");
    }
  });
});

$(".checkbox_expandable").click(function() {
  $(this).toggleClass("checkbox_default");
});