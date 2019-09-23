import "./review.scss";

$(".review__likes").click(function() {
  var $this = $(this);
  var flag = $this.attr("data-liked") === "true" ? "false" : "true";
  $this.attr("data-liked", flag);
  var $amount = $this.find(".review__amount");
  if (flag === "true") {
    $amount.text(parseInt($amount.text()) + 1);
  } else {
    $amount.text(parseInt($amount.text()) - 1);
  }
});