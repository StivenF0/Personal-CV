const iframeEl = document.querySelector('.iframe-cv');
const downloadButton = document.querySelector('#downloadButton');
const expandPreviewbutton = document.querySelector('header .preview-label button');
const previewArea = document.querySelector('.preview-cv');
console.log(expandPreviewbutton)

window.onload = () => {
    previewArea.style.maxHeight = "95vw"
}

downloadButton.addEventListener('click', () => {
    iframeEl.contentWindow.focus();
    iframeEl.contentWindow.print();
});
expandPreviewbutton.addEventListener('click', function() {
    if (this.classList.contains("active")) {
        this.classList.remove("active");
    } else {
        this.classList.add("active")
    };

    if(!previewArea.style.maxHeight) {
        previewArea.style.maxHeight = "95vw";
    } else {
        previewArea.style.maxHeight = null;
    }
});