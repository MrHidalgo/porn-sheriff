"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/*
* CALLBACK :: start
* ============================================= */

/*
* CALLBACK :: end
* ============================================= */

/**
 * @name initNative
 *
 * @description Init all method
 */
var initNative = function initNative() {
  // default
  initPreventBehavior();
  // ==========================================

  // lib
  // ==========================================

  // callback
  // ==========================================
};

window.addEventListener('load', function (ev) {
  initNative();
}, false);