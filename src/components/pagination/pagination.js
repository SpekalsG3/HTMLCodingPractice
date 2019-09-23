import "./pagination.scss";

var pageNow = 1;
var lastPage = parseInt(document.getElementsByClassName("pagination__number")[document.getElementsByClassName("pagination__number").length-1].innerHTML);

function GoPrevPage() {
  pageNow--;
  if (pageNow == lastPage - 2 || pageNow == lastPage - 1) {
    $(".pagination__next").css("display", "block");
    $(".pagination__number")[pageNow - lastPage + 5].classList.remove("pagination__number_selected");
    $(".pagination__number")[pageNow - lastPage + 4].classList.add("pagination__number_selected");
  } else if (pageNow > 2 && pageNow < lastPage - 1) {
    $(".pagination__next_skip").css("display", "block");
    var pageNumbers = $(".pagination__number");
    for (var i = 1; i < pageNumbers.length - 1; i++) {
      pageNumbers[i].innerHTML = pageNow - 2 + i;
    }
    if (pageNow == 3) {
      $(".pagination__prev_skip").css("display", "none");
    }
  } else if (pageNow == 1 || pageNow == 2) {
    $(".pagination__number")[pageNow].classList.remove("pagination__number_selected");
    $(".pagination__number")[pageNow-1].classList.add("pagination__number_selected");
    if (pageNow == 1) {
      $(".pagination__prev").css("display", "none");
    }
  }
}

function GoNextPage() {
  pageNow++;
  if (pageNow == 2 || pageNow == 3) {
    $(".pagination__prev").css("display", "block");
    $(".pagination__number")[pageNow-2].classList.remove("pagination__number_selected");
    $(".pagination__number")[pageNow-1].classList.add("pagination__number_selected");
  } else if (pageNow > 3 && pageNow < lastPage - 1) {
    $(".pagination__prev_skip").css("display", "block");
    var pageNumbers = $(".pagination__number");
    for (var i = 1; i < pageNumbers.length - 1; i++) {
      pageNumbers[i].innerHTML = pageNow - 2 + i;
    }
    if (pageNow == lastPage - 2) {
      $(".pagination__next_skip").css("display", "none");
    }
  } else if (pageNow == lastPage - 1 || pageNow == lastPage) {
    $(".pagination__number")[pageNow - lastPage + 3].classList.remove("pagination__number_selected");
    $(".pagination__number")[pageNow - lastPage + 4].classList.add("pagination__number_selected");
    if (pageNow == lastPage) {
      $(".pagination__next").css("display", "none");
    }
  }
}

$(".pagination__prev").click(GoPrevPage);
$(".pagination__next").click(GoNextPage);