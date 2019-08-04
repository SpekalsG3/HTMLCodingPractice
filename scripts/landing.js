var inputsToCheck;
var wrongValues = ["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ", "Сколько гостей"];

$(".main-search").submit(function(e) {
    inputsToCheck = [$(".search-comein"), $(".search-comeout"), $(".search-guests")];
    for (var i = 0; i < inputsToCheck.length; i++) {
        if (inputsToCheck[i].val() == wrongValues[i]) {
            inputsToCheck[i].css("box-shadow", "0 0 3px 0 red");

            setTimeout(function() {
                for (var i = 0; i < inputsToCheck.length; i++) {
                    inputsToCheck[i].css("box-shadow", "");
                }
            }, 1200);

            e.preventDefault();
        }
    }

    if ($(".search-guests").html() == wrongValues[2]) {
        inputsToCheck[2].css("box-shadow", "0 0 3px 0 red");

        setTimeout(function() {
            inputsToCheck[2].css("box-shadow", "");
        }, 1200);

        e.preventDefault();
    }
});