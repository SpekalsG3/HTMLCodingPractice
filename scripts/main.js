$(".kit-form-field[data-index='0']").dateRangePicker({
	format: "DD.MM.YYYY",
	separator: " to ",
	singleMonth: true,
	getValue: function() {
		if ($(".search-comein").val() && $(".search-comeout").val() )
			return $(".search-comein").val() + " to " + $(".search-comeout").val();
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
	singleDate : true,
	showShortcuts: false,
	singleMonth: true,
	format: "DD.MM.YYYY",
	setValue: function(s, s2) {
		$(".search-comeout").val(s2);
	}
});

$(".kit-form-field[data-index='2']").dropdown({
	valuePattern: "T",
	specClass: "guests",
	placeholder: "Сколько гостей",
	placeholderSpelling: function(value) {
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