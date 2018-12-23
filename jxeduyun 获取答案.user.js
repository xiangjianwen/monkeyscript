// ==UserScript==
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @name jxeduyun 获取答案
// @match   https://*/*
// @grant none
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==
//添加div 文本框 按钮， 
var my = document.createElement("divCell");     document.body.appendChild(my); 
my.innerHTML='<div  style="position:fixed ; bottom:80px;width:1002" lign="left" id="bg">移动<div id ="x"></div>  <textarea name="cardid1" id="cardid1" cols="4" rows="5"></textarea> <textarea name="searchId1" id="searchId1" cols="10" rows="5"></textarea><input type="button" name="tijiao" id="tijiao" value="提交" /></div>';
//my.innerHTML='<div  style="position:fixed ; bottom:20px;width:1002" lign="left" id="bg">   <input type="button" name="tijiao" id="tijiao" value="显示答案" /></div>';  

////alert($("#bg").text());
var json = {"start_time":"2018-10-30 19:47:03",         
            "end_time":"2018-10-01 19:59:59",    
            "test_id":7,         
            "detail":{"1":{"question_id":"2737","user_answer":"C"},                       "2":{"question_id":"2703","user_answer":"D"},                       "3":{"question_id":"2790","user_answer":"D"},                       "4":{"question_id":"2923","user_answer":"B"},                       "5":{"question_id":"2843","user_answer":"C"},                       "6":{"question_id":"2959","user_answer":"B"},                       "7":{"question_id":"2841","user_answer":"D"},                       "8":{"question_id":"2840","user_answer":"C"},                       "9":{"question_id":"2842","user_answer":"C"},                       "10":{"question_id":"2587","user_answer":"A"},                       "11":{"question_id":"2807","user_answer":"A"},                       "12":{"question_id":"2567","user_answer":"D"},                       "13":{"question_id":"2760","user_answer":"A"},                       "14":{"question_id":"2960","user_answer":"B"},                       "15":{"question_id":"2955","user_answer":"B"},                       "16":{"question_id":"2614","user_answer":"C"},                       "17":{"question_id":"2953","user_answer":"C"},                       "18":{"question_id":"2808","user_answer":"A"},                       "19":{"question_id":"2608","user_answer":"A"},                       "20":{"question_id":"2885","user_answer":"C"},                       "21":{"question_id":"2926","user_answer":"C"},                       "22":{"question_id":"2762","user_answer":"D"},                       "23":{"question_id":"2735","user_answer":"A"},                       "24":{"question_id":"2603","user_answer":"B"},                       "25":{"question_id":"2776","user_answer":"C"}},"validator":"d5740f487fa1de2102cc6d65b45953a6","student_id":207447,"test_type":"train"
};
var s="";
var k=0;
var tiku;  var cid;
var j=1000;//题目号
var studentid=295;//学生编号
var result="";
$("#cardid1").val("题库");
$("#searchId1").val("答案");
$("#tijiao").click(function(){   
  json.student_id=studentid++;   
  $.ajax({         type: "POST",   
          async:false,//同步    
          url: "https://exam.jxeduyun.com/api/test-results",     
          contentType: "application/json; charset=utf-8",     
          data: JSON.stringify(GetJsonData()),     
          dataType: "json",      
          success: function (json) {     
                     
            var json_detail_id;      
            var json_detail=json.detail; 
            for(k=1;k<25;k++)        
            { json_detail_id=json_detail[k];    
             $("#searchId1").val($("#searchId1").val()+json_detail_id.question_id+","+json_detail_id.right_answer+"\n");    
               
                           }    
          },       
          error: function (message)
          {
            alert("提交数据失败！");       
          }     
         });     
  
   }); 
  
function GetJsonData() {
var json_detail_id;  
  var json_detail=json.detail;     
  for(k=1;k<25;k++)    
  { json_detail_id=json_detail[k];  
   j++;   
   json_detail_id.question_id=""+j;
   
//alert(json_detail_id);    
 }
return json;
} 

