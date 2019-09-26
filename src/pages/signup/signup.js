import "../../components/page/page.js";

import "./signup.scss";

$(".form__field[data-index='2']").dateRangePicker({
  format: "DD.MM.YYYY",
  singleDate : true,
  singleMonth: true,
  language: "ru",
  setValue: function(s) {
    $(".birthday").val(s);
  }
});