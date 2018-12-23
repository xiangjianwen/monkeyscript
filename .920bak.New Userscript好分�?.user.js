// ==UserScript==
// @name         New Userscript好分数
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @match       http://yue.haofenshu.com/minions/subject/1647737/mark/2311746/normal/*
// @grant        none
// ==/UserScript== 


  
  $(".score-input:eq(0)").keyup(function(event){
  $(".submit-button").click(); alert();
  });
