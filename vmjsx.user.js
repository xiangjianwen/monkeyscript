// ==UserScript==
// @name vmjsx
// @namespace Violentmonkey Scripts
// @match *://*/*
// @require https://unpkg.com/vm.jsx
// @grant none
// ==/UserScript==
document.body.appendChild(VM.createElement('div', {}, 'hello'));