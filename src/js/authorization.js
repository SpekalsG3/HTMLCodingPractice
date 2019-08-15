var flag = true;

$(".form-submit-input").click(function(e) {
	Array.prototype.forEach.call($(".kit-form-input"), function(el) {
		if (!el.value) {
			e.preventDefault();
			if (flag) {
				el.style.boxShadow = "0 0 3px 0 red";
				setTimeout(function() {
					el.style.boxShadow = "none";
					flag = true;
				}, 1200);
			}
		}
	});
	flag = false;
});