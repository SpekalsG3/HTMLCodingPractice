import "../assets/scss/default.scss";
import "../assets/scss/ui-kit.scss";

import $ from "jquery";
window.$ = window.jQuery = $;
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
/*var jsdom = require("jsdom"); 
$ = require("jquery")(jsdom.jsdom().createWindow()); */
// window.$ = require('jquery')(window);

var $content = $(".content");

$(".header-menu-icon").click(function() {
	$content.toggleClass("shift");
});

console.log($("header"));

window.addEventListener("touchmove", function () {
	$content.removeClass("shift");
});