import "../../components/page/page.js";
import "./index.scss";

var $comein = $(".form__field[data-index='0']").find(".date__input")
var $comeout = $(".form__field[data-index='1']").find(".date__input");

$(".form__field[data-index='0']").daterangepicker({
  singleMonth: true,
  locale: {
    format: "DD.MM.YYYY",
  }
}, function(date_in, date_out) {
  $comein.val(date_in.format("DD.MM.YYYY"));
  $comeout.val(date_out.format("DD.MM.YYYY"));
  $(".form__field[data-index='1']").data("daterangepicker").setStartDate(date_out.format("DD.MM.YYYY"));
  $(".form__field[data-index='1']").data("daterangepicker").setEndDate(date_out.format("DD.MM.YYYY"));
});

$(".form__field[data-index='1']").daterangepicker({
  singleDatePicker: true,
  singleMonth: true,
  locale: {
    format: "DD.MM.YYYY",
  }
}, function(date_out) {
  $comeout.val(date_out.format("DD.MM.YYYY"));
  $(".form__field[data-index='0']").data("daterangepicker").setEndDate(date_out.format("DD.MM.YYYY"));
});

$(".form__field[data-index='2']").dropdown({
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