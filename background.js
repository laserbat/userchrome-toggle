const prefix = '\u180E';

async function main() {
    browser.action.onClicked.addListener(styleToggle);
    browser.commands.onCommand.addListener(styleToggle);

    // Generate and log the CSS selector
    let selector = ":root[titlepreface='\\" + prefix.charCodeAt().toString(16) + "']";
    console.log(selector);
}


async function styleToggle() {
    const windowInfo = await browser.windows.getCurrent();

    let newprefix = prefix;
    if (windowInfo.title === undefined || windowInfo.title.startsWith(prefix))
        newprefix = '';

    browser.windows.update(windowInfo.id, {titlePreface: newprefix});
}

main();
