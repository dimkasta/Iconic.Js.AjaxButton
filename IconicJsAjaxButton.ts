/// <reference path="index.d.ts" />
class IconicJsAjaxButton
{
    public url: string;
    public defaultIcon: string;
    public defaultBackground: string;
    public defaultText: string;
    public trueIcon: string;
    public trueBackground: string;
    public trueText: string;
    public falseIcon: string;
    public falseBackground: string;
    public falseText: string;
    public loadingIcon: string;
    public loadingAnimation: string = "spin";
    public attentionIcon: string;
    public attentionBackground: string;
    public messageElement;
    public messageSelector:string;
    public element;
    public icon;
    public text;
    public appendToUrl: string;


    constructor(element, url, defaultIcon, defaultBackground, defaultText, trueIcon, trueBackground, trueText, falseIcon, falseBackground, falseText, loadingIcon, attentionIcon, attentionBackground, messageSelector) {
        this.element = element;

        this.url = url;

        if(defaultIcon)
        {
            this.defaultIcon = defaultIcon;
        }
        else
        {
            this.defaultIcon = "fa-check"
        }

        if(defaultBackground)
        {
            this.defaultBackground = defaultBackground;
        }
        else
        {
            this.defaultBackground = "btn-default"
        }

        if(defaultText)
        {
            this.defaultText = defaultText;
            this.text = $("<span/>");
            this.text.text(this.defaultText);
            this.element.empty();
            this.text.appendTo(this.element);
        }

        this.icon = $("<i/>").addClass("fa " + this.defaultIcon);
        this.icon.appendTo(this.element);
        this.element.addClass(this.defaultBackground);

        if(messageSelector)
        {
            this.messageSelector = messageSelector;
        }
        else
        {
            this.messageSelector = ".validation-messages";
        }



        if(trueIcon)
        {
            this.trueIcon = trueIcon;
        }
        else
        {
            this.trueIcon = "fa-check"
        }

        if(trueBackground)
        {
            this.trueBackground = trueBackground;
        }
        else
        {
            this.trueBackground = "btn-default"
        }

        if(trueText)
        {
            this.trueText = trueText;
        }

        if(falseIcon)
        {
            this.falseIcon = falseIcon;
        }
        else
        {
            this.falseIcon = "fa-minus-circle";
        }

        if(falseBackground)
        {
            this.falseBackground = falseBackground;
        }
        else
        {
            this.falseBackground = "btn-default"
        }

        if(falseText)
        {
            this.falseText = falseText;
        }

        if(loadingIcon)
        {
            this.loadingIcon = loadingIcon;
        }
        else
        {
            this.loadingIcon = "fa-spinner"
        }

        if(attentionIcon)
        {
            this.attentionIcon = attentionIcon;
        }
        else
        {
            this.attentionIcon = "fa-exclamation-triangle"
        }

        if(attentionBackground)
        {
            this.attentionBackground = attentionBackground;
        }
        else
        {
            this.attentionBackground = "btn-default"
        }
    }

    reset = function() {

        this.element.removeClass(this.trueBackground);
        this.element.removeClass(this.falseBackground);
        this.element.removeClass(this.attentionBackground);

        this.icon.removeClass(this.trueIcon);
        this.icon.removeClass(this.falseIcon);
        this.icon.removeClass(this.attentionIcon);

        this.element.addClass(this.defaultBackground);
        this.icon.addClass(this.defaultIcon);
        this.setText(this.defaultText);
    }

    setText = function(text)
    {
        if(this.text)
        {
            this.text.text(text);
        }
    }

    startAnimation = function() {
        this.icon.removeClass(this.defaultIcon);
        this.icon.removeClass(this.trueIcon);
        this.icon.removeClass(this.falseIcon);
        this.icon.removeClass(this.attentionIcon);
        this.icon.addClass("fa-spin").addClass("fa-spinner");
    }

    stopAnimation = function() {
        this.icon.removeClass("fa-spin").removeClass("fa-spinner");
    }

    showTrue = function() {
        this.icon.addClass(this.trueIcon);
        // this.icon.addClass("text-success");
        this.newMessage();
        this.messageElement.addClass("alert-success");
        this.element.addClass(this.trueBackground);
        this.setText(this.trueText);
    }

    showFalse = function() {
        this.icon.addClass(this.falseIcon);
        // this.icon.addClass("text-success");
        this.newMessage();
        this.messageElement.addClass("alert-success");
        this.element.addClass(this.falseBackground);
        this.setText(this.falseText);
    }

    showAttention = function() {
        this.icon.addClass(this.attentionIcon);
        // this.icon.addClass("text-danger");
        this.newMessage();
        this.messageElement.addClass("alert-danger");
        this.element.addClass(this.attentionBackground);
    }

    showMessage = function(message) {
        this.messageElement.html(message);
    }

    newMessage = function() {
        $(this.messageSelector).empty();
        this.messageElement = $("<div/>").addClass("alert");
        this.messageElement.appendTo($(this.messageSelector));
    }
}