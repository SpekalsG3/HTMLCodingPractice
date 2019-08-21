import "../assets/scss/index.scss";
/*import "../lib/js/moment.min.js";
import "../lib/js/jquery.daterangepicker.min.js";
import "../lib/js/jquery.dropdown.js";*/

import $ from "jquery";
window.$ = window.jQuery = $;
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
/*var jsdom = require("jsdom"); 
$ = require("jquery")(jsdom.jsdom().createWindow());*/
// window.$ = require('jquery')(window);

$(".kit-form-field[data-index='0']").dateRangePicker({
    format: "DD.MM.YYYY",
    separator: " по ",
    singleMonth: true,
    language: "ru",
    getValue: function() {
        if ($(".search-comein").val() && $(".search-comeout").val())
            return $(".search-comein").val() + " по " + $(".search-comeout").val();
        else if ($(".search-comeout").val())
            return " по " + $(".search-comeout").val();
        else
            return '';
    },
    setValue: function(s, s1, s2) {
        $(".search-comein").val(s1);
        $(".search-comeout").val(s2);
    }
});

$(".kit-form-field[data-index='1']").dateRangePicker({
    autoClose: true,
    singleDate: true,
    showShortcuts: false,
    singleMonth: true,
    format: "DD.MM.YYYY",
    setValue: function(s, s2) {
        $(".search-comeout").val(s2);
    }
});

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

var inputsToCheck;
var wrongValues = ["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ", "Сколько гостей"];

$(".main-search").submit(function(e) {
    inputsToCheck = [$(".search-comein"), $(".search-comeout"), $(".search-guests")];
    for (var i = 0; i < inputsToCheck.length; i++) {
        if (inputsToCheck[i].val() == wrongValues[i]) {
            inputsToCheck[i].css("box-shadow", "0 0 3px 0 red");

            setTimeout(function() {
                for (var i = 0; i < inputsToCheck.length; i++) {
                    inputsToCheck[i].css("box-shadow", "");
                }
            }, 1200);

            e.preventDefault();
        }
    }

    if ($(".search-guests").html() == wrongValues[2]) {
        inputsToCheck[2].css("box-shadow", "0 0 3px 0 red");

        setTimeout(function() {
            inputsToCheck[2].css("box-shadow", "");
        }, 1200);

        e.preventDefault();
    }
});