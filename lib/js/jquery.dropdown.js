(function($) {

    $.fn.dropdown = function(params = {}) {
        for (var i = 0; i < this.length; i++) {
            var model = new DropdownModel(params);
            var view = new DropdownView($(this[i]));

            this[i].controller = new DropdownController(view, model);
        }
    }

})(jQuery);

function Event() {
    this.listeners = [];
}

Event.prototype.add = function(listener) {
    this.listeners.push(listener);
}

Event.prototype.manage = function(args = {}) {
    for (var i = 0; i < this.listeners.length; i++) {
        return this.listeners[i](args);
    }
}



function DropdownController(DropdownView, DropdownModel) {
    this.DropdownView = DropdownView;
    this.DropdownModel = DropdownModel;

    this.init();
    this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder());
}

DropdownController.prototype.createDropdown = function(params) {
    var $mark = $('<div style="height: 44px;" data-size="' + params.dataSize + '"></div>');
    this.DropdownView.$container.append($mark);
    this.DropdownView.pos = $mark.position();

    var dropdown = '<div style="left: ' + this.DropdownView.pos.left + 'px; top: ' + this.DropdownView.pos.top + 'px;" class="';
    if (params.specClass != undefined)
        dropdown += params.specClass + '-dropdown ';
    
    dropdown += 'dropdown default"><div class="dropdown-head"><div class="expand kit-arrow"></div><div type="text" name="';

    if (params.specClass != undefined)
        dropdown += params.specClass;
    else
        dropdown += 'dropdown';

    dropdown += '" class="dropdown-placeholder kit-form-input search-';

    if (params.specClass != undefined)
        dropdown += params.specClass;

    dropdown += '">';

    if (params.placeholder != undefined)
        dropdown += params.placeholder;
    
    dropdown += '</div></div><div class="dropdown-body">';

    if (params.options != undefined) {
        for (var i = 0; i < params.options.length; i++) {
            dropdown += '<div class="dropdown-option"><div class="option-title">' + params.options[i].title + '</div><div class="option-buttons" data-index="' + i + '"><div class="option-less option-btn disabled">-</div><input readonly="readonly" class="option-value" name="' + params.options[i].title + '" value="';
            
            if (params.options[i].value != undefined)
                dropdown += params.options[i].value;
            else
                dropdown += '0';

            dropdown += '"/><div class="option-more option-btn">+</div></div></div>';
        }
    }

    if (params.clearBtn != undefined || params.applyBtn != undefined) {
        dropdown += '<div class="dropdown-confirm dropdown-option">';

        if (params.clearBtn != undefined) {
            if (params.clearBtn)
                dropdown += '<div class="dropdown-clear hidden">Очистить</div>';
        }

        if (params.applyBtn != undefined) {
            if (params.applyBtn)
                dropdown += '<div class="dropdown-apply">Применить</div>';
        }

        dropdown += '</div>';
    }

    dropdown += '</div></div>';

    this.DropdownView.$dropdown = $(dropdown);

    this.DropdownView.$container.append(this.DropdownView.$dropdown);

    this.DropdownView.addListeners();
}

DropdownController.prototype.init = function() {
    this.createDropdown(this.DropdownModel.getParamData());

    var _this = this;

    this.DropdownView.onReducing.add(function(target) {
        _this.reduceValue(target);
    });

    this.DropdownView.onIncreasing.add(function(target) {
        _this.increaseValue(target);
    });

    this.DropdownView.onClosing.add(function() {
        _this.close();
    });

    this.DropdownView.onClosingAndOpening.add(function() {
        _this.closeAndOpen();
    });

    this.DropdownView.onClearing.add(function() {
        _this.clear();
    });
}

DropdownController.prototype.reduceValue = function(target) {
    this.DropdownModel.amount--;
    var index = parseInt(target.parentNode.getAttribute("data-index"));
    this.DropdownModel.options[index].value--;
    var newValue = this.DropdownModel.options[index].value;
    target.parentNode.children[1].value = newValue;
    if (newValue == this.DropdownModel.options[index].min) {
        target.classList.add("disabled");
    }
    target.parentNode.children[2].classList.remove("disabled");
    this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder());
}

DropdownController.prototype.increaseValue = function(target) {
    this.DropdownModel.amount++;
    var index = parseInt(target.parentNode.getAttribute("data-index"));
    this.DropdownModel.options[index].value++;
    var newValue = this.DropdownModel.options[index].value;
    target.parentNode.children[1].value = newValue;
    if (newValue == this.DropdownModel.options[index].max) {
        target.classList.add("disabled");
    }
    target.parentNode.children[0].classList.remove("disabled");
    this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder());
}

DropdownController.prototype.close = function() {
    this.DropdownView.$dropdown.removeClass("extended").removeClass("default").addClass("default");
}

DropdownController.prototype.closeAndOpen = function() {
    this.DropdownView.$dropdown.toggleClass("default");
    this.DropdownView.$dropdown.toggleClass("extended");
}

DropdownController.prototype.clear = function() {
    this.DropdownView.$dropdown.find(".dropdown-input").val(this.DropdownModel.placeholder);
    this.DropdownView.$dropdown.find(".option-less").removeClass("disabled").addClass("disabled");
    this.DropdownView.$dropdown.find(".option-more").removeClass("disabled");
    var amounts = this.DropdownView.$dropdown.find(".option-amount");
    for(var i = 0; i < amounts.length; i++) {
        amounts[i].innerHTML = this.DropdownModel.options[i].min;
        this.DropdownModel.options[i].value = this.DropdownModel.options[i].min;
    }
    this.DropdownModel.amount = this.DropdownModel.minAmount;
}

DropdownController.prototype.update = function() {
    this.DropdownModel.amount = 0;
    for (var i = 0; i < this.DropdownModel.options.length; i++) {
        this.DropdownModel.amount += this.DropdownModel.options[i].value;
    }
    this.DropdownView.setPlaceholder(this.DropdownModel.updatePlaceholder());
}

DropdownController.prototype.setOptionValue = function(title, value) {
    for (var i = 0; i < this.DropdownModel.options.length; i++) {
        if (this.DropdownModel.options[i].title == title) {
            this.DropdownModel.options[i].value = value;
            var thisOptionButtons = $(".option-buttons")[i];
            thisOptionButtons.children[1].value = value;
            if (value == this.DropdownModel.options[i].max) {
                thisOptionButtons.children[0].classList.remove("disabled");
                thisOptionButtons.children[2].classList.add("disabled");
            } else if (value > 0) {
                thisOptionButtons.children[0].classList.remove("disabled");
            }
            break;
        }
    }
    this.update();
}



function DropdownView($container) {
    this.$container = $container;
    this.$dropdown = undefined;

    this.onReducing = new Event();
    this.onIncreasing = new Event();
    this.onClosing = new Event();
    this.onClosingAndOpening = new Event();
    this.onClearing = new Event();
}

DropdownView.prototype.addListeners = function() {
    var _this = this;

    document.addEventListener("click", function(e) {
        if (_this.$dropdown.find(e.target).length == 0) {
            _this.onClosing.manage();
        }
    })

    this.$dropdown.children().eq(0).click(function() {
        _this.onClosingAndOpening.manage();
    });
    
    this.$dropdown.children().eq(1).click(function(e) {
        if (_this.$dropdown.find(".dropdown-apply")[0] == e.target) {
            _this.onClosingAndOpening.manage();
            return;
        } else if (_this.$dropdown.find(".dropdown-clear")[0] == e.target) {
            _this.onClearing.manage();
            return;
        } else if ($(e.target).hasClass("disabled")) {
            return;
        }
        var less = _this.$dropdown.find(".option-less");
        var more = _this.$dropdown.find(".option-more");
        for (var i = 0; i < less.length; i++) {
            if (e.target == less[i]) {
                _this.onReducing.manage(e.target);
            } else if (e.target == more[i]) {
                _this.onIncreasing.manage(e.target);
            }
        }
    });

    
}

DropdownView.prototype.setPlaceholder = function(value) {
    this.$dropdown.find(".dropdown-placeholder").html(value);
}



function DropdownModel(params) {
    this.params = params;

    this.valuePattern = params.valuePattern ? params.valuePattern : "T";
    this.specClass = params.specClass ? params.specClass : "";
    this.placeholder = params.placeholder ? params.placeholder : "Parameters";
    this.TPlaceholderSpelling = params.TPlaceholderSpelling ? params.TPlaceholderSpelling : function() {};
    this.SPlaceholderSpelling = params.SPlaceholderSpelling ? params.SPlaceholderSpelling : function() {};
    this.dataSize = params.dataSize ? params.dataSize : "short";
    this.options = params.options ? params.options : [];
    this.clearBtn = params.clearBtn != undefined ? params.clearBtn : false;
    this.applyBtn = params.applyBtn != undefined ? params.applyBtn : false;
    
    this.minAmount = 0;

    for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value != undefined) {
            this.minAmount += this.options[i].value;
        } else {
            this.options[i].value = 0;
        }
        if (this.options[i].min == undefined) {
            this.options[i].min = 0;
        }
        if (this.options[i].max == undefined) {
            this.options[i].max = -1;
        }
    }

    this.amount = this.minAmount;
}

DropdownModel.prototype.getParamData = function() {
    return this.params;
}

DropdownModel.prototype.TPattern = function() {
    return this.amount + " " + this.TPlaceholderSpelling(this.amount);
}

DropdownModel.prototype.SPattern = function() {
    var value = "";
    for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value == 0) {
            continue;
        }
        value += this.options[i].value + " " + this.SPlaceholderSpelling(i, this.options[i].value) + ", ";
    }

    return value.slice(0, -2);
}

DropdownModel.prototype.updatePlaceholder = function() {
    if (this.amount == 0) {
        return this.placeholder;
    } else {
        var value;
        switch (this.valuePattern) {
            case "TS":
                value = this.TPattern() + ", " + this.SPattern();
                break;
            case "ST":
                value = this.SPattern() + ", " + this.TPattern();
                break;
            case "T":
                value = this.TPattern();
                break;
            case "S":
                value = this.SPattern();
                break;
        }
        return value;
    }
}