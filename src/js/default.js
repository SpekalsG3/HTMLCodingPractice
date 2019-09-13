import "../assets/scss/default.scss";

var $content = $(".content");
var $header = $("header");

$(".header__menu").click(function() {
  $content.toggleClass("content--shift");
  $header.toggleClass("header--shift");
});

window.addEventListener("touchmove", function () {
  $content.removeClass("content--shift");
  $header.removeClass("header--shift");
});

$(".form").submit(function(e) {
  $(this).find(".form__input").each(function() {
    if (this.value == "") {
      e.preventDefault();
      this.classList.add("form__input--error");
    } else {
      this.classList.remove("form__input--error");
    }
  });
});

$(".checkbox--expandable").click(function() {
  $(this).toggleClass("checkbox--default");
});