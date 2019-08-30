import "../assets/scss/authorization.scss";
import "../assets/scss/signup.scss";
import "moment";

import "../static/lib/css/daterangepicker.min.css";

import "../static/lib/js/jquery.daterangepicker.min.js";

$(".kit-form-field[data-index='2']").dateRangePicker({
  format: "DD.MM.YYYY",
  singleDate : true,
  singleMonth: true,
  language: "ru",
  setValue: function(s) {
    $(".signup-birthday").val(s);
  }
});