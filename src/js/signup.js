import "./authorization.js";
import "../assets/scss/signup.scss";
import "moment";

import "../static/lib/css/daterangepicker.min.css";

import "../static/lib/js/jquery.daterangepicker.min.js";

import "../pug/components/radio/radio.scss"
import "../pug/components/switch/switch.scss"

$(".form__field[data-index='2']").dateRangePicker({
  format: "DD.MM.YYYY",
  singleDate : true,
  singleMonth: true,
  language: "ru",
  setValue: function(s) {
    $(".birthday").val(s);
  }
});