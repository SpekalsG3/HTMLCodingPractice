import "./form.scss"

import "moment";

import "../../lib/css/daterangepicker.min.css";
import "../../lib/js/jquery.daterangepicker.min.js";

import "../../lib/css/dropdown.css";
import "../../lib/js/jquery.dropdown.js";

import "../../lib/css/rangeslider.min.css";
import "../../lib/js/jquery.rangeslider.js";

$(".form").submit(function(e) {
  $(this).find(".form__input").each(function() {
    if (this.value == "") {
      e.preventDefault();
      this.classList.add("form__input_error");
    } else {
      this.classList.remove("form__input_error");
    }
  });
});

$(".checkbox[data-expandable]").click(function() {
  $(this).attr("data-opened", (i, attr) => attr === "false" ? "true" : "false");
});