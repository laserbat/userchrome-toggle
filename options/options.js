const default_marker = '180E';

async function saveOptions() {
    await browser.storage.local.set({
        marker: document.querySelector("#marker").value
    });

}

async function resetOptions(e) {
    await browser.storage.local.set({
        marker: default_marker
    });
}

async function restoreOptions() {
    let res = await browser.storage.local.get('marker');
    let marker = res.marker;

    if (!marker) marker = default_marker;

    document.querySelector("#marker").value = marker;

    marker_char = String.fromCodePoint(parseInt(Number("0x" + marker), 10));

    let selector = ":root[titlepreface='\\" + marker_char.charCodeAt().toString(16) + "']";
    document.querySelector("#selector").value = selector;
}

document.addEventListener('DOMContentLoaded', function() {
    restoreOptions();

    document.querySelector("#options").addEventListener("submit", (e) => {
        e.preventDefault();

        if (e.submitter.id == "save") saveOptions();
        if (e.submitter.id == "reset") resetOptions();

        restoreOptions();
    });
});
