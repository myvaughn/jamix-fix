// ==UserScript==
// @name         Jamix Accessibility Fix
// @namespace    https://github.com/myvaughn/jamix-fix
// @version      1.00
// @updateURL    https://raw.githubusercontent.com/myvaughn/jamix-fix/main/user.js
// @downloadURL  https://raw.githubusercontent.com/myvaughn/jamix-fix/main/user.js
// @description  Fixes accessibility issues in Jamix online menu
// @author       Michael Vaughn <michael.vaughn@yale.edu>
// @match        https://usa.jamix.cloud/menu/*
// ==/UserScript==

// Adapted from https://github.com/terrill/whova-a11y-fix/blob/main/WhovaA11yFix.user.js - by Terrill Thompson of UW

'use strict';

(function () {

  // document load may already be complete before this userscript is executed
  if (document.readyState == 'complete') {
    // this might be a lie. Better give page a moment to fully load.
    setTimeout(function () {
      init();
    }, 2000);
  }
  else {
    // Wait until page has loaded
    window.addEventListener('load', function () {
      // Content continues to be added after load is fired
      // Better wait a moment.
      setTimeout(function () {
        init();
      }, 2000);
    });
  }
})();

function init() {
  // let's make sure the user script runs
  alert('Hello World!');
}