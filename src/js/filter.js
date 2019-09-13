import "../assets/scss/filter.scss";
import "moment";

import "../static/lib/css/daterangepicker.min.css";
import "../static/lib/css/dropdown.css";
import "../static/lib/css/rangeslider.min.css";

import "../static/lib/js/jquery.daterangepicker.min.js";
import "../static/lib/js/jquery.dropdown.js";
import "../static/lib/js/jquery.rangeslider.js";

import "../pug/components/form/form.scss";
import "../pug/components/form/__range/form__range.scss";
import "../pug/components/form/__checkbox/form__checkbox.scss";
import "../pug/components/pagination/pagination.scss";
import "../pug/components/pagination/pagination.js";
import "../pug/components/room-card/room-card.scss";
import "../pug/components/room-card/room-card.js";

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

for (var i = 0; i < 3; i++) {
  $(".form__field[data-index='1']")[0].controller.setOptionValue(decodeURI(URISearch[4 + i * 2]), parseInt(URISearch[5 + i * 2]));
}

$(".form__field[data-index='0']").dateRangePicker({
  format: "DD MMM",
  separator: " по ",
  singleMonth: true,
  language: "ru",
  getValue: function() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var parsedDate = URISearch[1].split('.');
    parsedDate.forEach(function(el, i, arr) { arr[i] = parseInt(el); });
    var date1 = parsedDate[0] + " " + months[parsedDate[1]];
    var parsedDate = URISearch[3].split('.');
    parsedDate.forEach(function(el, i, arr) { arr[i] = parseInt(el); });
    return date1 + " по " + parsedDate[0] + " " + months[parsedDate[1]];
  },
  setValue: function(s, s1, s2) {
    $(".comeinout").val(s1 + " - " + s2);
  }
});

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