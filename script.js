const iframeEl = document.querySelector('.iframe-cv');
const downloadButton = document.querySelector('#downloadButton');

downloadButton.addEventListener('click', () => {
    iframeEl.contentWindow.focus();
    iframeEl.contentWindow.print();
});