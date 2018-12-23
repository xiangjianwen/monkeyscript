// ==UserScript==
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @name jxeduyun score
// @match   https://exam.jxeduyun.com/*
// @grant none
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==
//添加div 文本框 按钮， 
var my = document.createElement("divCell");     document.body.appendChild(my); 
my.innerHTML='<div  lign="left" id="bg">移动<div id ="x"></div>  <textarea name="cardid1" id="cardid1" cols="4" rows="5"></textarea> <textarea name="searchId1" id="searchId1" cols="10" rows="5"></textarea><input type="button" name="tijiao" id="tijiao" value="提交" /></div>';
//alert($("#bg").text()); 
var s="";
var k=0;
var tiku;  var sid;
var j=0;
$("#cardid1").val("题库");
$("#searchId1").val("答案");
$("#tijiao").click(function(){  
  var cidt= $("#cardid1").val().replace(/\n/g,","); 
        cid=cidt.split(",");   
  // $("#id_card").val(cid[0]);  
     // $("#id_card").  
     $.ajaxSettings.async = false;
  for(k=0;k<cid.length;k++){  
    var score="https://exam.jxeduyun.com/api/students/"+cid[k]+"/test-results"; 
    $.get(score, function(data){
      
          //var resul=data.max_score;
     // alert(resul);
      //       //取结果     
      //var res=resul[0].score_count+","+resul[1].score_count+"\n";
      //取分数1      
       var scores0=$("#searchId1").val();  
      $("#searchId1").val(scores0+data.class+","+data.grade_id+","+data.name+","+data.max_score+"\n");  
      //alert("Data Loaded: " + data.id_card);   
       // gettk();。  
          
          }); 
  }
  $.ajaxSettings.async = true;
});

