import "../../components/page/page.js";

import "../../components/statistic/statistic.js"
import "../../components/tag/tag.scss"
import "../../components/review/review.js"
import "../../components/bullet-list/bullet-list.scss"

import "./room.scss";

var data = [
  { "Оценка": "Хорошо", "Количество": 65 },
  { "Оценка": "Великолепно", "Количество": 130 },
  { "Оценка": "Удовлетворительно", "Количество": 65 }
];

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

var statistic_ctx = $(".statistic__canvas")[0].getContext('2d');

var chart = new Chart(statistic_ctx, {
  type: "doughnut",
  data: {
    datasets: [{
      data: [65, 65, 130, 0],
      backgroundColor: ["#BC9CFF", "#6FCF97", "#FFE39C", "#919191"]
    }],
    labels: ["Удовлетворительно", "Хорошо", "Великолепно", "Разочарован"]
  },
  options: {
    legend: {
      display: false
    },
    cutoutPercentage: 85
  }
});

var URISearch = window.location.search.slice(1).split(/(&|=)/).filter(function(v, i) {
  return !(i % 2);
});

for (var i = 0; i < 3; i++) {
  $(".form__field[data-index='2']")[0].controller.setOptionValue(decodeURI(URISearch[6 + i * 2]), parseInt(URISearch[7 + i * 2]));
}

var splittedDate1 = URISearch[3].split('.');
var splittedDate2 = URISearch[5].split('.');

var $comein = $(".form__field[data-index='0']").find(".date__input")
var $comeout = $(".form__field[data-index='1']").find(".date__input");

var date1 = "";
var date2 = "";

splittedDate1.forEach(function(el, i) {
  date1 += el + '.';
});

splittedDate1.forEach(function(el, i) {
  date2 += el + '.';
});


$comein.val(date1.slice(0, -1));
$comeout.val(date2.slice(0, -1));


date1 = "";
splittedDate1.forEach(function(el, i) {
  date1 = '.' + el + date1;
});

date2 = "";
splittedDate2.forEach(function(el, i) {
  date2 = '.' + el + date2;
});


$(".form__field[data-index='0']").daterangepicker({
  singleMonth: true,
  locale: {
    format: "DD.MM.YYYY",
  },
  startDate: new Date(date1.slice(1)),
  endDate: new Date(date2.slice(1))
}, function(date_in, date_out) {
  $comein.val(date_in.format("DD.MM.YYYY"));
  $comeout.val(date_out.format("DD.MM.YYYY"));
  $(".form__field[data-index='1']").data("daterangepicker").setEndDate(date_out.format("DD.MM.YYYY"));
  $(".form__field[data-index='1']").data("daterangepicker").setStartDate(date_out.format("DD.MM.YYYY"));
});

$(".form__field[data-index='1']").daterangepicker({
  singleDatePicker: true,
  singleMonth: true,
  locale: {
    format: "DD.MM.YYYY",
  },
  endDate: new Date(date2)
}, function(date_out) {
  $comeout.val(date_out.format("DD.MM.YYYY"));
  $(".form__field[data-index='0']").data("daterangepicker").setEndDate(date_out.format("DD.MM.YYYY"));
});