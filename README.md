# UserChrome Toggle Lite

UserChrome Toggle Lite is a simplified version of the [userchrome-toggle](https://github.com/Joolee/userchrome-toggle/) by Joolee. This lightweight Firefox extension allows you to toggle a custom `userChrome.css` style on-the-fly, making it easy to customize your browsing experience without needing to restart your browser.

## Background

The `userChrome.css` file enables deep customization of the Firefox interface. It's a powerful tool, but traditionally, any changes made require a restart of the browser to take effect. This extension simplifies the process by adding a button to your toolbar that lets you apply changes instantly!

This is achieved by putting an invisible Unicode character into 'title prefix' attribute of the current browser window. This lets us add special selectors to `userChrome.css` that are only active when the special character is present in title prefix.

## Usage

First, use the special CSS selector (`:root[titlepreface='\180e']` is the default) in your `userChrome.css`. This selector matches only when this extension is active.

Click on the toolbar icon or use the keyboard shortcut (`Ctrl+Shift+1` by default) to toggle your custom styles.

## Acknowledgements

- Joolee, for the original [userchrome-toggle](https://github.com/Joolee/userchrome-toggle/) project.
