import "../assets/scss/room.scss";
import "moment";

import "../static/lib/css/daterangepicker.min.css";
import "../static/lib/css/dropdown.css";
import "../static/lib/css/rangeslider.min.css";

import "../static/lib/js/jquery.daterangepicker.min.js";
import "../static/lib/js/jquery.dropdown.js";
import "../static/lib/js/modernizr.min.js";
import "jquery-ui";
import "../static/lib/js/infragistics.core.js";
import "../static/lib/js/infragistics.dv.js";

var data = [
    { "Оценка": "Хорошо", "Количество": 65 },
    { "Оценка": "Великолепно", "Количество": 130 },
    { "Оценка": "Удовлетворительно", "Количество": 65 }
];

$(".kit-form-field[data-index='2']").dropdown({
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

$(".room-total-chart").igDoughnutChart({
    innerExtent: 90,
    series:
    [{
        name: "Количество",
        labelMemberPath: "Оценка",
        valueMemberPath: "Количество",
        dataSource: data
    }]
});

var URISearch = window.location.search.slice(1).split(/(&|=)/).filter(function(v, i) {
    return !(i % 2);
});

for (var i = 0; i < 3; i++) {
    $(".kit-form-field[data-index='2']")[0].controller.setOptionValue(decodeURI(URISearch[6 + i * 2]), parseInt(URISearch[7 + i * 2]));
}

$(".kit-form-field[data-index='0']").dateRangePicker({
    format: "DD.MM.YYYY",
    separator: " по ",
    singleMonth: true,
    language: "ru",
    getValue: function() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var parsedDate = URISearch[3].split('.');
        parsedDate.forEach(function(el, i, arr) { arr[i] = parseInt(el); });
        var date1 = parsedDate[0] + " " + months[parsedDate[1]];
        var parsedDate = URISearch[5].split('.');
        parsedDate.forEach(function(el, i, arr) { arr[i] = parseInt(el); });
        return date1 + " по " + parsedDate[0] + " " + months[parsedDate[1]];
    },
    setValue: function(s, s1, s2) {
        $(".search-comein").val(s1);
        $(".search-comeout").val(s2);
    }
});

$(".kit-form-field[data-index='1']").dateRangePicker({
    autoClose: true,
    singleDate : true,
    showShortcuts: false,
    singleMonth: true,
    format: "DD.MM.YYYY",
    setValue: function(s, s2) {
        $(".search-comeout").val(s2);
    }
});