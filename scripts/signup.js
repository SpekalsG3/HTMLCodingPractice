$(".kit-form-field[data-index='2']").dateRangePicker({
	format: "DD.MM.YYYY",
	singleDate : true,
	singleMonth: true,
	language: "ru",
	setValue: function(s) {
		$(".signup-birthday").val(s);
	}
});