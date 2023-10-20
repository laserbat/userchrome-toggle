const default_marker = '180E';

async function main() {
    browser.action.onClicked.addListener(styleToggle);
    browser.commands.onCommand.addListener(styleToggle);
}

async function styleToggle() {
    const windowInfo = await browser.windows.getCurrent();

    let res = await browser.storage.local.get('marker');
    let marker = res.marker;

    if (!marker) marker = default_marker;

    let marker_char = String.fromCodePoint(parseInt(Number("0x" + marker), 10));
    let new_preface = marker_char;

    if (!windowInfo.title || windowInfo.title.startsWith(new_preface))
        new_preface = '';

    browser.windows.update(windowInfo.id, {titlePreface: new_preface});
}

main();
