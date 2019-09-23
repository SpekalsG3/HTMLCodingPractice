import "../../components/page/page.js";
import "../../components/page/__content/_authorization/page__content_authorization.js";

import "../../components/switch/switch.scss";
import "../../components/radio/radio.scss";
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