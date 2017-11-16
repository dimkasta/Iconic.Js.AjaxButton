
$.fn.ajaxButton = function() {
    return this.each(function() {
        var element = $(this);
        var url = element.data("url");
        if(url) {
            var button = new IconicJsAjaxButton(element, element.data("url"), element.data("default-icon"), element.data("default-background"), element.data("default-text"), element.data("true-icon"), element.data("true-background"), element.data("true-text"), element.data("false-icon"), element.data("false-background"), element.data("false-text"), element.data("loading-icon"), element.data("attention-icon"), element.data("attention-background"), element.data("message-container"));

            element.on("click", function (ev) {
                ev.preventDefault();
                button.startAnimation();
                button.reset();
                var xhrRequest = $.get(button.url, function (data, status, xhr) {
                })
                    .done(function (data) { //if ok

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

                    }).fail(function (jqxhr, textStatus, error) { //if failed
                        button.reset();
                        button.showAttention();
                        button.showMessage("Η υπηρεσία δεν είναι διαθέσιμή προσωρινά");

                    }).always(function (data) { //afterwards, always
                        button.stopAnimation();
                    });
            });
        }
        else
        {
            console.log("Element " + element.prop("id") + " does not have a defined url");
        }

    });
};



$(function(){
    $(".ajax-button").ajaxButton();
});