import "../assets/scss/default.scss";
import "../assets/scss/ui-kit.scss";
import "jquery";

var $content = $(".content");

$(".header-menu-icon").click(function() {
	$content.toggleClass("shift");
});

window.addEventListener("touchmove", function () {
	$content.removeClass("shift");
});

console.log($(".bar"));