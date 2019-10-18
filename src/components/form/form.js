import "./form.scss"

import "moment";

import "daterangepicker"
import "daterangepicker/daterangepicker.css"

import "../range/ion.rangeSlider.min.css"
import "ion-rangeslider"

import "../dropdown/dropdown.js"
import "../checkbox/checkbox.scss"
import "../date/date.scss"
import "../submit/submit.scss"
import "../range/range.scss"
import "../switch/switch.scss"
import "../radio/radio.scss"

$(".form").submit(function(e) {
  var inputError = false;
  $(this).find(".form__input").each(function() {
    if (this.value == "") {
      dateError = true;
      this.classList.add("form__input_has_error");
    } else {
      dateError = false;
      this.classList.remove("form__input_has_error");
    }
  });
  var dateError = false;
  $(this).find(".date__input").each(function() {
    if (this.value == "") {
      dateError = true;
      this.classList.add("date__input_has_error");
    } else {
      dateError = false;
      this.classList.remove("date__input_has_error");
    }
  });
  console.log(inputError, dateError)
  if (inputError || dateError) {
    e.preventDefault();
  }
});

$(".checkbox[data-expandable]").click(function() {
  var $this = $(this);
  var flag = $this.attr("data-opened") === "false" ? "true" : "false";
  $this.attr("data-opened", flag);
  if (flag === "true") {
    $this.find(".checkbox__options").css("display", "block");
    $this.find(".checkbox__arrow").css("transform", "rotateZ(180deg)");
  } else {
    $this.find(".checkbox__options").css("display", "none");
    $this.find(".checkbox__arrow").css("transform", "rotateZ(0deg)");
  }
});