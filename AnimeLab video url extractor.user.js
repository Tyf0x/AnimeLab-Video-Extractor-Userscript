
/*jshint esversion: 6 */
// ==UserScript==
// @name         AnimeLab video url extractor
// @namespace    https://github.com/Tyf0x
// @version      0.5
// @description  Copy the animelab url to the clipboard
// @author       Tyf0x
// @match        https://www.animelab.com/player/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js
// @resource     css https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css
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

    registerKeyboardShortcut();

    saveVideoUrlToClip();

    function registerKeyboardShortcut(){
        let ctrlDown = false,
        ctrlKey = 17,
        cmdKey = 91,
        cKey = 67;

        $(document).keydown(function(e) {
            if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
        }).keyup(function(e) {
            if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
        });
        
        // Document Ctrl + C
        $(document).keydown(function(e) {
            if (ctrlDown && (e.keyCode == cKey)){
                saveVideoUrlToClip();
            }
        });
    }

    function saveVideoUrlToClip(){
        let videoDom = document.querySelector("#video-component-wrapper video");
        toastr.options.closeButton = true;
    
        if(videoDom !== null){
            GM_setClipboard(videoDom.getAttribute("src"), { type: 'text', mimetype: 'text/plain'});
            toastr.success("Video url copied!");
        }else{
            toastr.error("Couldn't find the video DOM.");
        }
    }
})();