var $content = $(".content");

$(".header-menu-icon").click(function() {
	$content.toggleClass("shift");
});

window.addEventListener("touchmove", function () {
	$content.removeClass("shift");
});