import "../../components/page/page.js";
import "../../components/pagination/pagination.js";
import "../../components/room-card/room-card.js";

import "./filter.scss";

$(".form__field[data-index='1']").dropdown({
  valuePattern: "TS",
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
  SPlaceholderSpelling: function(index, value) {
    switch (index) {
      case 0:
        if (value == 1)
          return "взрослый";
        else
          return "взрослых";
        break;
      case 1:
        if (value == 1)
          return "ребенок";
        else if (value > 1 && value < 5)
          return "ребенка";
        else
          return "детей";
        break;
      case 2:
        if (value == 1)
          return "младенец";
        else if (value > 1 && value < 5)
          return "младенца";
        else
          return "младенцев";
        break;
    }
  },
  dataSize: "medium",
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

var URISearch = window.location.search.slice(1).split(/(&|=)/).filter(function(v, i) {
  return !(i % 2);
});

var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октября", "Ноябрь", "Декабрь"];

var date1 = "";
URISearch[1].split('.').forEach(function(el, i) {
  date1 = '-' + el + date1;
});

var date2 = "";
URISearch[3].split('.').forEach(function(el, i) {
  date2 = '-' + el + date2;
});

date1 = date1.slice(1);
date2 = date2.slice(1);

$(".form__field[data-index='0']").daterangepicker({
  singleMonth: true,
  linkedCalendars: false,
  locale: {
    format: "DD MMM",
    separator: "-",
    monthNames: monthNames
  },
  startDate: new Date(date1),
  endDate: new Date(date2)
}, function(date_in, date_out) {
  $(".form__field[data-index='0']").find(".date__input").val(date_in.locale('ru').format("DD MMM") + ' - ' + date_out.locale('ru').format("DD MMM"));
});

date1 = "";
date2 = "";

URISearch[1].slice(0, -4).split('.').forEach(function(el, i) {
  if (i == 1) {
    date1 += monthNames[parseInt(el)].slice(0, 3).toLowerCase();
  } else {
    date1 += el + ' '
  }
});

URISearch[3].slice(0, -4).split('.').forEach(function(el, i) {
  if (i == 1) {
    date2 += monthNames[parseInt(el)].slice(0, 3).toLowerCase();
  } else {
    date2 += el + ' '
  }
});

$(".form__field[data-index='0']").find(".date__input").val(date1 + " - " + date2);

for (var i = 0; i < 3; i++) {
  $(".form__field[data-index='1']")[0].controller.setOptionValue(decodeURI(URISearch[4 + i * 2]), parseInt(URISearch[5 + i * 2]));
}

$(".form__field[data-index='5']").dropdown({
  valuePattern: "S",
  placeholder: "Удобства номера",
  SPlaceholderSpelling: function(index, value) {
    switch (index) {
      case 0:
        if (value == 1)
          return "спальня";
        else if (value > 1 && value < 5)
          return "спальни";
        else
          return "спален";
        break;
      case 1:
        if (value == 1)
          return "кровать";
        else if (value > 1 && value < 5)
          return "кровати";
        else
          return "кроватей";
        break;
      case 2:
        if (value == 1)
          return "ванная комната";
        else
          return "ванных комнат";
        break;
    }
  },
  dataSize: "medium",
  options: [
    {
      title: "Спальни"
    },
    {
      title: "Кровати"
    },
    {
      title: "Ванные комнаты"
    }
  ]
});

var $priceRange = $(".range__input");

$priceRange.ionRangeSlider({
    skin: "round",
    type: "double",
    from: 5000,
    to: 10000,
    min: 0,
    max: 15800,
    grid: false,
    hide_min_max: true,
    hide_from_to: true
});

$priceRange.on("change", function() {
  var $inp = $(this);
  $(".range__from").text($inp.data("from"));
  $(".range__to").text($inp.data("to"));
});