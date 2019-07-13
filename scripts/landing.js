var inputToCheck;

$(".main-search").submit(function(e) {
    inputToCheck = [$(".search-comein"), $(".search-comeout"), $(".search-guests")];
    var wrongValues = ["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ", "Сколько гостей"];
    for (var i = 0; i < inputToCheck.length; i++) {
        if (inputToCheck[i].val() == wrongValues[i]) {
            inputToCheck[i].css("color", "#f30");

            setTimeout(function() {
                for (var i = 0; i < inputToCheck.length; i++) {
                    inputToCheck[i].css("color", "");
                }
            }, 700);

            e.preventDefault();
        }
    }
});