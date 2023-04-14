window.copyText = (a, b) => {
    let copyText = document.getElementById(a);
    copyText.select(); // selects the text contained within copyText element
    navigator.clipboard.writeText(copyText.value).then(); // writes this text to the clipboard
    let tooltip = document.getElementById(b);
    tooltip.style.bottom = -32 + "%";
    tooltip.innerHTML = "Skopiowano!"; // changes the text on tooltip prompt
};
  
window.outFunc = (a) => {
    let tooltip = document.getElementById(a);
    tooltip.style.bottom = -80 + "%";
    tooltip.innerHTML = "Skopiuj do schowka";
};