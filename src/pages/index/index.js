import "../../components/page/page.js";
import "./index.scss";

$(".form__field[data-index='0']").dateRangePicker({
  format: "DD.MM.YYYY",
  separator: " по ",
  singleMonth: true,
  language: "ru",
  getValue: function() {
    if ($(".comein").val() && $(".comeout").val())
      return $(".comein").val() + " по " + $(".comeout").val();
    else if ($(".comeout").val())
      return " по " + $(".comeout").val();
    else
      return '';
  },
  setValue: function(s, s1, s2) {
    $(".comein").val(s1);
    $(".comeout").val(s2);
  }
});

$(".form__field[data-index='1']").dateRangePicker({
  autoClose: true,
  singleDate: true,
  showShortcuts: false,
  singleMonth: true,
  format: "DD.MM.YYYY",
  setValue: function(s, s2) {
    $(".comeout").val(s2);
  }
});

$(".form__field[data-index='2']").dropdown({
  specClass: "guests",
  placeholder: "Сколько гостей",
  TPlaceholderSpelling: function(value) {
    if (value == 1)
      return "гость";
    else if (value > 1 && value < 5)
      return "гостя";
    else
      return "гостей";
  },
  dataSize: "long",
  options: [
    {
      title: "Взрослые"
    },
    {
      title: "Дети"
    },
    {
      title: "Младенцы"
    }
  ],
  clearBtn: true,
  applyBtn: true
});