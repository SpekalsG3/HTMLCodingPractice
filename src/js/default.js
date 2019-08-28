import "../assets/scss/default.scss";
import "../assets/scss/ui-kit.scss";

var $content = $(".content");
var $header = $("header");

$(".header-menu-icon").click(function() {
	$content.toggleClass("shift");
	$header.toggleClass("shift");
});

window.addEventListener("touchmove", function () {
	$content.removeClass("shift");
	$header.removeClass("shift");
});

$(".kit-form").submit(function(e) {
	$(".kit-form-input").each(function() {
		if (this.value == "") {
			e.preventDefault();
			this.classList.add("kit-input-error");
		} else {
			this.classList.remove("kit-input-error");
		}
	});
});