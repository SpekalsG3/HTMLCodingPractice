import "../assets/scss/default.scss";
import "../assets/scss/ui-kit.scss";
import $ from "jquery";

window.jQuery = $;
window.$ = $;

var $content = $(".content");

$(".header-menu-icon").click(function() {
	$content.toggleClass("shift");
});

window.addEventListener("touchmove", function () {
	$content.removeClass("shift");
});