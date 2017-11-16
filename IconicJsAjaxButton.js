var IconicJsAjaxButton = (function () {
    function IconicJsAjaxButton(element, url, defaultIcon, defaultBackground, trueIcon, trueBackground, falseIcon, falseBackground, loadingIcon, attentionIcon, attentionBackground, messageSelector) {
        this.loadingAnimation = "spin";
        this.reset = function () {
            this.element.removeClass(this.trueBackground);
            this.element.removeClass(this.falseBackground);
            this.element.removeClass(this.attentionBackground);
            this.icon.removeClass(this.trueIcon);
            this.icon.removeClass(this.falseIcon);
            this.icon.removeClass(this.attentionIcon);
            this.element.addClass(this.defaultBackground);
            this.icon.addClass(this.defaultIcon);
        };
        this.startAnimation = function () {
            this.icon.removeClass(this.defaultIcon);
            this.icon.removeClass(this.trueIcon);
            this.icon.removeClass(this.falseIcon);
            this.icon.removeClass(this.attentionIcon);
            this.icon.addClass("fa-spin").addClass("fa-spinner");
        };
        this.stopAnimation = function () {
            this.icon.removeClass("fa-spin").removeClass("fa-spinner");
        };
        this.showTrue = function () {
            this.icon.addClass(this.trueIcon);
            this.newMessage();
            this.messageElement.addClass("alert-success");
            this.element.addClass(this.trueBackground);
        };
        this.showFalse = function () {
            this.icon.addClass(this.falseIcon);
            this.newMessage();
            this.messageElement.addClass("alert-success");
            this.element.addClass(this.falseBackground);
        };
        this.showAttention = function () {
            this.icon.addClass(this.attentionIcon);
            this.newMessage();
            this.messageElement.addClass("alert-danger");
            this.element.addClass(this.attentionBackground);
        };
        this.showMessage = function (message) {
            this.messageElement.html(message);
        };
        this.newMessage = function () {
            $(this.messageSelector).empty();
            this.messageElement = $("<div/>").addClass("alert");
            this.messageElement.appendTo($(this.messageSelector));
        };
        this.element = element;
        this.url = url;
        if (defaultIcon) {
            this.defaultIcon = defaultIcon;
        }
        else {
            this.defaultIcon = "fa-check";
        }
        if (defaultBackground) {
            this.defaultBackground = defaultBackground;
        }
        else {
            this.defaultBackground = "btn-default";
        }
        this.icon = $("<i/>").addClass("fa " + this.defaultIcon);
        this.icon.appendTo(this.element);
        this.element.addClass(this.defaultBackground);
        if (messageSelector) {
            this.messageSelector = messageSelector;
        }
        else {
            this.messageSelector = ".validation-messages";
        }
        if (trueIcon) {
            this.trueIcon = trueIcon;
        }
        else {
            this.trueIcon = "fa-check";
        }
        if (trueBackground) {
            this.trueBackground = trueBackground;
        }
        else {
            this.trueBackground = "btn-default";
        }
        if (falseIcon) {
            this.falseIcon = falseIcon;
        }
        else {
            this.falseIcon = "fa-minus-circle";
        }
        if (falseBackground) {
            this.falseBackground = falseBackground;
        }
        else {
            this.falseBackground = "btn-default";
        }
        if (loadingIcon) {
            this.loadingIcon = loadingIcon;
        }
        else {
            this.loadingIcon = "fa-spinner";
        }
        if (attentionIcon) {
            this.attentionIcon = attentionIcon;
        }
        else {
            this.attentionIcon = "fa-exclamation-triangle";
        }
        if (attentionBackground) {
            this.attentionBackground = attentionBackground;
        }
        else {
            this.attentionBackground = "btn-default";
        }
    }
    return IconicJsAjaxButton;
}());
$.fn.ajaxButton = function () {
    return this.each(function () {
        var element = $(this);
        var url = element.data("url");
        if (url) {
            var button = new IconicJsAjaxButton(element, element.data("url"), element.data("default-icon"), element.data("default-background"), element.data("true-icon"), element.data("true-background"), element.data("false-icon"), element.data("false-background"), element.data("loading-icon"), element.data("attention-icon"), element.data("attention-background"), element.data("message-container"));
            element.on("click", function () {
                button.startAnimation();
                button.reset();
                var xhrRequest = $.get(button.url, function (data, status, xhr) {
                })
                    .done(function (data) {
                    if (data.result === true) {
                        button.showTrue();
                    }
                    else if (data.result === false) {
                        button.showFalse();
                    }
                    else {
                        button.showAttention();
                    }
                    button.showMessage(data.message);
                }).fail(function (jqxhr, textStatus, error) {
                    button.reset();
                    button.showAttention();
                    button.showMessage("Η υπηρεσία δεν είναι διαθέσιμή προσωρινά");
                }).always(function (data) {
                    button.stopAnimation();
                });
            });
        }
        else {
            console.log("Element " + element.prop("id") + " does not have a defined url");
        }
    });
};
$(function () {
    $(".ajax-button").ajaxButton();
});
