// ==UserScript==
// @name 好分数打分面板
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @namespace Violentmonkey Scripts
// @match   http://yue.haofenshu.com/minions/*
// @grant none
// ==/UserScript==
var my = document.createElement("divCell");
document.body.appendChild(my); 
my.innerHTML='<div  style="position:fixed ; bottom:0px;width:1002" lign="left" id="bg">   <input type="button" name="tijiao" id="tijiao" value="显示答案" /><br/><input type="button" name="zddt" id="zddt" value="自动答题" /></div>';
var s="";
var k=0;
var  answers;  var cid;
var j=0;
$("#tijiao").click(function(){  
cid=questions.split(",");  
answers=answerss.split(",");  
var inputs=$("body").find('input');  
for(i=0;i<inputs.length;i++){  
for(j=0;j<cid.length;j++){  
var flag= (inputs[i].id).indexOf(cid[j],0);  
if((flag>-1)&&(inputs[i].value==answers[j])){  
$(inputs[i]).parent().css("background-color","yellow");  
//console.log($(inputs[i]).click())  
//inputs[i].parentNode.className += ' checked'  
//inputs[i].parentNode.parentNode.click;     //trigger事件触发 模拟鼠标点击       var label = $("body").find('input')[i].parentNode.parentNode.children[1];       $(label).trigger("click");  
}  
}  
}  
});   