var images = document.getElementsByClassName("room-card__images");
var imagePoints = document.getElementsByClassName("room-card__points");
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

$(".content__rooms a").click(function(e) {
  e.preventDefault();
  var targetClassName = e.target.classList[0];
  if (targetClassName == "page__arrow" || targetClassName == "room-card__gallery_prev" || targetClassName == "room-card__gallery_next")
    return;
  window.location.href = e.currentTarget.href + "&" + window.location.search.slice(1);
});

$(".room-card__gallery_prev").click(function(e) {
  var index = parseInt(this.parentNode.getAttribute("data-index"));
  if (sliderIndexes[index] == 0) {
    for (var i = 0; i < images[index].children.length-1; i++) {
      SlideNextPhoto(index);
    }
  } else {
    SlidePrevPhoto(index);
  }
});

$(".room-card__gallery_next").click(function() {
  var index = parseInt(this.parentNode.getAttribute("data-index"));
  if (sliderIndexes[index] == images[index].children.length - 1) {
    for (var i = 0; i < images[index].children.length-1; i++) {
      SlidePrevPhoto(index);
    }
  } else {
    SlideNextPhoto(index);
  }
});