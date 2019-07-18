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

$(".kit-form-field[data-index='5']").dropdown({
	valuePattern: "S",
	placeholder: "Удобства номера",
	SPlaceholderSpelling: function(index, value) {
		switch (index) {
			case 0:
				if (value == 1)
					return "спальня";
				else if (value > 1 && value < 5)
					return "спальни";
				else
					return "спален";
				break;
			case 1:
				if (value == 1)
					return "кровать";
				else if (value > 1 && value < 5)
					return "кровати";
				else
					return "кроватей";
				break;
			case 2:
				if (value == 1)
					return "ванная комната";
				else
					return "ванных комнат";
				break;
		}
	},
	dataSize: "medium",
	options: [
		{
			title: "Спальни"
		},
		{
			title: "Кровати"
		},
		{
			title: "Ванные комнаты"
		}
	]
});

$(".checkbox.convertible").click(function() {
	$(this).toggleClass("default");
	$(this).toggleClass("expanded");
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

var images = document.getElementsByClassName("content-room-images");
var imagePoints = document.getElementsByClassName("content-room-points");
var sliderIndexes = [];

for (var i = 0; i < images.length; i++) {
	var photos = images[i].children;
	sliderIndexes[i] = 0;
	for (var j = 0; j < photos.length; j++) {
		photos[j].style.left = j * 100 + "%";
	}
}

function SlidePrev(index) {
	var thisImages = images[index].children;
	for (var i = 0; i < thisImages.length; i++) {
		thisImages[i].style.left = parseInt(thisImages[i].style.left) + 100 + "%";
	}
	imagePoints[index].children[sliderIndexes[index]].style.background = "none";
	sliderIndexes[index]--;
	imagePoints[index].children[sliderIndexes[index]].style.background = "#fff";
}

function SlideNext(index) {
	var thisImages = images[index].children;
	for (var i = 0; i < thisImages.length; i++) {
		thisImages[i].style.left = parseInt(thisImages[i].style.left) - 100 + "%";
	}
	imagePoints[index].children[sliderIndexes[index]].style.background = "none";
	sliderIndexes[index]++;
	imagePoints[index].children[sliderIndexes[index]].style.background = "#fff";
}

$(".content-room-prev").click(function() {
	var index = parseInt(this.parentNode.getAttribute("data-index"));
	if (sliderIndexes[index] == 0) {
		for (var i = 0; i < images[index].children.length-1; i++) {
			SlideNext(index);
		}
	} else {
		SlidePrev(index);
	}
});

$(".content-room-next").click(function() {
	var index = parseInt(this.parentNode.getAttribute("data-index"));
	if (sliderIndexes[index] == images[index].children.length - 1) {
		for (var i = 0; i < images[index].children.length-1; i++) {
			SlidePrev(index);
		}
	} else {
		SlideNext(index);
	}
});