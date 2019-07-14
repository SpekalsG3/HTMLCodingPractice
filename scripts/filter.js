$(".kit-form-field[data-index='0']").dateRangePicker({
	format: "DD MMM",
	separator: " по ",
	singleMonth: true,
	language: "ru",
	getValue: function() {
		if ($(".search-comeinout").val())
			return $(".search-comeinout").val();
		else
			return '';
	},
	setValue: function(s, s1, s2) {
		$(".search-comeinout").val(s1 + " - " + s2);
	}
});

$(".kit-form-field[data-index='1']").dropdown({
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

var $priceRange = $(".settings-price-range");

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
	$(".settings-price-from").text($inp.data("from"));
	$(".settings-price-to").text($inp.data("to"));
});