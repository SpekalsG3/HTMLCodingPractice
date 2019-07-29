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
});

var URISearch = window.location.search.slice(1).split(/(&|=)/).filter(function(v, i) {
	return !(i % 2);
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

function SlidePrevPhoto(index) {
	var thisImages = images[index].children;
	for (var i = 0; i < thisImages.length; i++) {
		thisImages[i].style.left = parseInt(thisImages[i].style.left) + 100 + "%";
	}
	imagePoints[index].children[sliderIndexes[index]].style.background = "none";
	sliderIndexes[index]--;
	imagePoints[index].children[sliderIndexes[index]].style.background = "#fff";
}

function SlideNextPhoto(index) {
	var thisImages = images[index].children;
	for (var i = 0; i < thisImages.length; i++) {
		thisImages[i].style.left = parseInt(thisImages[i].style.left) - 100 + "%";
	}
	imagePoints[index].children[sliderIndexes[index]].style.background = "none";
	sliderIndexes[index]++;
	imagePoints[index].children[sliderIndexes[index]].style.background = "#fff";
}

$(".content-rooms a").click(function(e) {
	e.preventDefault();
	var targetClassName = e.target.className.slice(0, -5);
	if (targetClassName == "kit-arrow" || targetClassName == "content-room")
		e.preventDefault();
});

$(".content-room-prev").click(function(e) {
	var index = parseInt(this.parentNode.getAttribute("data-index"));
	if (sliderIndexes[index] == 0) {
		for (var i = 0; i < images[index].children.length-1; i++) {
			SlideNextPhoto(index);
		}
	} else {
		SlidePrevPhoto(index);
	}
});

$(".content-room-next").click(function() {
	var index = parseInt(this.parentNode.getAttribute("data-index"));
	if (sliderIndexes[index] == images[index].children.length - 1) {
		for (var i = 0; i < images[index].children.length-1; i++) {
			SlidePrevPhoto(index);
		}
	} else {
		SlideNextPhoto(index);
	}
});


var pageNow = 1;
var lastPage = parseInt(document.getElementsByClassName("content-page-number")[document.getElementsByClassName("content-page-number").length-1].innerHTML);

function GoPrevPage() {
	pageNow--;
	if (pageNow == lastPage - 2 || pageNow == lastPage - 1) {
		$(".content-page-next").css("display", "block");
		$(".content-page-number")[pageNow - lastPage + 5].removeAttribute("data-selected");
		$(".content-page-number")[pageNow - lastPage + 4].setAttribute("data-selected", "");
	} else if (pageNow > 2 && pageNow < lastPage - 1) {
		$(".content-page-skip.next").css("display", "block");
		var pageNumbers = $(".content-page-number");
		for (var i = 1; i < pageNumbers.length - 1; i++) {
			pageNumbers[i].innerHTML = pageNow - 2 + i;
		}
		if (pageNow == 3) {
			$(".content-page-skip.prev").css("display", "none");
		}
	} else if (pageNow == 1 || pageNow == 2) {
		$(".content-page-number")[pageNow].removeAttribute("data-selected");
		$(".content-page-number")[pageNow-1].setAttribute("data-selected", "");
		if (pageNow == 1) {
			$(".content-page-prev").css("display", "none");
		}
	}
}

function GoNextPage() {
	pageNow++;
	if (pageNow == 2 || pageNow == 3) {
		$(".content-page-prev").css("display", "block");
		$(".content-page-number")[pageNow-2].removeAttribute("data-selected");
		$(".content-page-number")[pageNow-1].setAttribute("data-selected", "");
	} else if (pageNow > 3 && pageNow < lastPage - 1) {
		$(".content-page-skip.prev").css("display", "block");
		var pageNumbers = $(".content-page-number");
		for (var i = 1; i < pageNumbers.length - 1; i++) {
			pageNumbers[i].innerHTML = pageNow - 2 + i;
		}
		if (pageNow == lastPage - 2) {
			$(".content-page-skip.next").css("display", "none");
		}
	} else if (pageNow == lastPage - 1 || pageNow == lastPage) {
		$(".content-page-number")[pageNow - lastPage + 3].removeAttribute("data-selected");
		$(".content-page-number")[pageNow - lastPage + 4].setAttribute("data-selected", "");
		if (pageNow == lastPage) {
			$(".content-page-next").css("display", "none");
		}
	}
}

$(".content-page-prev").click(GoPrevPage);
$(".content-page-next").click(GoNextPage);