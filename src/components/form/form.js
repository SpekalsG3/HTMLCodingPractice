import "./form.scss"

import "moment";

import "../../lib/css/daterangepicker.min.css";
import "../../lib/js/jquery.daterangepicker.min.js";

import "../../lib/css/dropdown.css";
import "../../lib/js/jquery.dropdown.js";

import "../../lib/css/rangeslider.min.css";
import "../../lib/js/jquery.rangeslider.js";

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

$(".checkbox[data-expandable]").click(function() {
  var $this = $(this);
  var flag = $this.attr("data-opened") === "false" ? "true" : "false";
  $this.attr("data-opened", flag);
  if (flag === "true") {
    $this.find(".checkbox__options").css("display", "block");
    $this.find(".arrow").css("transform", "rotateZ(180deg)");
  } else {
    $this.find(".checkbox__options").css("display", "none");
    $this.find(".arrow").css("transform", "rotateZ(0deg)");
  }
});