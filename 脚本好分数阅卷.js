// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @match       http://yue.haofenshu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  $(".score-input").keyup(function(event){
//alert($(".score-input").val())
 $(".submit-button").click();
 });

    // Your code here...
})();

(function() {
    'use strict';

  $(".score-input:eq(0)").keyup(function(event){
$(".score-input:eq(0)").val(8-$(".score-input:eq(0)").val());
 $(".score-input:eq(1)").focus();
 });
 $(".score-input:eq(1)").keyup(function(event){
$(".score-input:eq(1)").val(9-$(".score-input:eq(1)").val());
 $(".submit-button").click();
 });
})();
