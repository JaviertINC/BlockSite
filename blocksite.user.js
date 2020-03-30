// ==UserScript==
// @name         BlockSite
// @version      0.1
// @description  Cierra las pestañas no deseadas automaticamente
// @author       @JaviertINC
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var blocklist = "https://javiertinc.github.io/BlockSite/blocklist.json";

    var this_href = window.location.href;
    var this_host = window.location.hostname;
    var this_path = window.location.pathname;
    var this_prot = window.location.protocol;


})();
