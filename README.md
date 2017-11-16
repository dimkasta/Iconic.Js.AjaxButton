# Iconic.Js.Ajax.Button

A jQuery plugin for a button that can trigger ajax get endpoints and show a result based on the response.

The plugin uses data attributes to load settings and state.

The plugin uses jQuery, bootstrap styling and Font Awesome icons.

## Required rest reply

The json response must contain a boolean "result" and a text "message".

A true "result" triggers the "true" view

A false "result" triggers the "false" view

A null "result" or an http failure triggers the "attention" view

The true/false "result" allows toggling of options, and not just execution success/failure.

## Required
The only required setting is data-url, which is the rest endoint to be called.

## Settings
- **data-url**: Only get is supported. For post, check the spam plugin
- **data-default-icon**: The icon loaded when the plugin is loaded. Usually defined in the server
- **data-default-background**: Same as above
- **data-true-icon**: The icon shown when true is returned
- **data-true-background**: Same as above
- **data-false-icon**: The icon shown when false is returned
- **data-false-background**: Same as above
- **data-loading-icon**: The icon shown when the ajax request is ongoing. By default the FA "spin" animation is applied.
- **data-attention-icon**: The icon shown when an error occurs.
- **data-attention-background**: Same as above
- **data-message-container**: The element where the messages should be displayed.