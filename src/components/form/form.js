import "./form.scss"

import "./__checkbox/form__checkbox.js"
import "./__date/form__date.js"
import "./__dropdown/form__dropdown.js"
import "./__range/form__range.js"
import "./__submit/form__submit.scss"

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