import "../../components/page/page.js";
import "../../components/button/button.scss";

import "./signup.scss";

$(".form__field[data-index='2']").daterangepicker({
  singleDatePicker: true,
  singleMonth: true,
  locale: {
    format: "DD.MM.YYYY",
  }
}, function(birthday) {
  $(".form__field[data-index='2']").find(".date__input").val(birthday.format("DD.MM.YYYY"))
});