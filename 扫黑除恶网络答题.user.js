// ==UserScript==
// @name         扫黑除恶网络答题
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @require http://oss.sheetjs.com/js-xlsx/xlsx.full.min.js
// @require http://www.jeasyui.net/Public/js/easyui/jquery.easyui.min.js
// // @description  try to take over the world!
// @author       You
// @match      http://171.35.109.126:8091/*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
/* jshint -W097 */
'use strict'; 
// Your code here...
//添加div 文本框 按钮，
var my = document.createElement("divCell");     //document.body.appendChild(my);
my.innerHTML='<div  style="position:fixed;top:20px;left:0%" lign="left" id="bg"><div id ="x"> <textarea name="cardid1" id="cardid1" cols="3" rows="1"></textarea> <textarea name="searchId1" id="searchId1" cols="20" rows="20"></textarea><input  style="width:50px;height:30px;"  type="submit" name="tijiao" id="tijiao" value="提交" /><input  style="width:50px;height:30px;"  type="submit"  id="bc" value="保存变量" /><input  style="width:50px;height:30px;"  type="submit"  id="tq" value="提取变量" /></div></div>';  my.id = "divCell";  
$(my).insertAfter("body");
$('#x').draggable();//easyui拖拽


var s="";
var k=0;
var x=0;
var tiku;  var sid;
var j=0;
var xmlHttpresult;
var flag=0;
var wb;

function Chinese(str){//最长取连续中文
  var str_continuity="",tempstr="";
  for(var i=0;i<str.length;i++){
    var reg = /[\u4E00-\u9FA5]/; 
    var s=reg.test(str[i]);
    if(s==true){
      tempstr=tempstr+str[i];
    
    }
    else
      {
        if(str_continuity.length<tempstr.length)
         {
        str_continuity=tempstr;
          } 
        tempstr="";          
      }
    
  }
    console.log(str_continuity); 
  return str_continuity;
}
var tk;
$("#cardid1").val("题");
$("#searchId1").val("答案");
// 定义全局函数，
   $("#bc").click(function(){//保存变量
     console.log("hj ");
     GM_setValue("g", $("#cardid1").val())
   });
 $("#tq").click(function(){ //提取变量
       // console.log("hj 2");
     //console.log(GM_getValue("g","没有这个值"))
tk=GM_getValue("g","没有这个值");
 });
   $("#tijiao").click(function(){ 
     
     //importf(); 
     
    
     //var tk=$("#cardid1").val();
        
     var jdtecont=$("#cardid1").val();//$(".field-label")[x].innerHTML;//竞答内容  
     console.log(jdtecont)
     //CheckChinese(jdtecont);
     //jdtecont=jdtecont.replace(/\s+/g,"");   
     //jdtecont=jdtecont.replace(/"([^"]*)"/g ,"“$1”");  
    jdtecont= Chinese($("H3").eq(x).text());
     //console.log(jdtecont);
     var indextk=tk.indexOf(jdtecont,0);//题库查找位置  
     //console.log(indextk);
     $("#searchId1").val(tk.substr(indextk-20,200)); 
     $("#cardid1").val(x);   
     // var cidt= $("#cardid1").val().replace(/\n/g,",")  
         //var cidt= $("#cardid1").val();   
            // cid=cidt.split(",");   
        //  var sidt= $("#searchId1").val().replace(/\n/g,",")  
            //   sid=sidt.split(",");
            //   
      x++;
   }); 
