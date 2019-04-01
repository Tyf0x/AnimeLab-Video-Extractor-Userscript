// ==UserScript==
// @name         AnimeLab video url extractor
// @namespace    https://github.com/Tyf0x
// @version      0.2
// @description  Copy the animelab url to the clipboard
// @author       Tyf0x
// @match        https://www.animelab.com/player/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js
// @resource     css https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.
// @updateURL    https://github.com/Tyf0x/AnimeLab-Video-Extractor-Userscript/raw/master/AnimeLab%20video%20url%20extractor.user.js
// @downloadURL  https://github.com/Tyf0x/AnimeLab-Video-Extractor-Userscript/raw/master/AnimeLab%20video%20url%20extractor.user.js
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(GM_getResourceText("css"));

    let videoDom = document.querySelector("#video-component-wrapper video");
    toastr.options.closeButton = true;

    if(videoDom !== null){
        GM_setClipboard(videoDom.getAttribute("src"), { type: 'text', mimetype: 'text/plain'});
        toastr.success("Video url copied!");
    }else{
        toastr.error("Couldn't find the video DOM.");
    }
})();