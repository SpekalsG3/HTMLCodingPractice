import "./pagination.scss";

var pageNow = 1;
var lastPage = parseInt(document.getElementsByClassName("pagination__button_number")[document.getElementsByClassName("pagination__button_number").length-1].innerHTML);

function GoPrevPage() {
  pageNow--;
  if (pageNow == lastPage - 2 || pageNow == lastPage - 1) {
    $(".pagination__button_next").css("display", "block");
    $(".pagination__button_number")[pageNow - lastPage + 5].classList.remove("pagination__button_number_selected");
    $(".pagination__button_number")[pageNow - lastPage + 4].classList.add("pagination__button_number_selected");
  } else if (pageNow > 2 && pageNow < lastPage - 1) {
    $(".pagination__button_skip_next").css("display", "block");
    var pageNumbers = $(".pagination__button_number");
    for (var i = 1; i < pageNumbers.length - 1; i++) {
      pageNumbers[i].innerHTML = pageNow - 2 + i;
    }
    if (pageNow == 3) {
      $(".pagination__button_skip_prev").css("display", "none");
    }
  } else if (pageNow == 1 || pageNow == 2) {
    $(".pagination__button_number")[pageNow].classList.remove("pagination__button_number_selected");
    $(".pagination__button_number")[pageNow-1].classList.add("pagination__button_number_selected");
    if (pageNow == 1) {
      $(".pagination__button_prev").css("display", "none");
    }
  }
}

function GoNextPage() {
  pageNow++;
  if (pageNow == 2 || pageNow == 3) {
    $(".pagination__button_prev").css("display", "block");
    $(".pagination__button_number")[pageNow-2].classList.remove("pagination__button_number_selected");
    $(".pagination__button_number")[pageNow-1].classList.add("pagination__button_number_selected");
  } else if (pageNow > 3 && pageNow < lastPage - 1) {
    $(".pagination__button_skip_prev").css("display", "block");
    var pageNumbers = $(".pagination__button_number");
    for (var i = 1; i < pageNumbers.length - 1; i++) {
      pageNumbers[i].innerHTML = pageNow - 2 + i;
    }
    if (pageNow == lastPage - 2) {
      $(".pagination__button_skip_next").css("display", "none");
    }
  } else if (pageNow == lastPage - 1 || pageNow == lastPage) {
    $(".pagination__button_number")[pageNow - lastPage + 3].classList.remove("pagination__button_number_selected");
    $(".pagination__button_number")[pageNow - lastPage + 4].classList.add("pagination__button_number_selected");
    if (pageNow == lastPage) {
      $(".pagination__button_next").css("display", "none");
    }
  }
}

$(".pagination__button_prev").click(GoPrevPage);
$(".pagination__button_next").click(GoNextPage);