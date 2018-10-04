// ==UserScript==
// @name ajax-hook 江西禁毒
// @namespace Violentmonkey Scripts
// @match http://www.jxjd627.com/docs/exam/*
// @grant none
// @require https://code.jquery.com/jquery-2.1.4.min.js  

// @require https://unpkg.com/ajax-hook/dist/ajaxhook.min.js
// ==/UserScript==
var my = document.createElement("divCell");  
var ID=new Array();
var Answer=new Array();
var f=1;
document.body.appendChild(my);   

my.innerHTML='<div  style="position:fixed ; bottom:200px;width:1002" lign="left" id="bg">   <input type="button" name="tijiao" id="tijiao" value="显示答案" /></div>';  
$("#tijiao").click(function(){ 
  //var c="input[name='115331555746010468']";
  
  for(i=0;i<ID.length;i++){
  selectAnswer(ID[i],Answer[i]);
   }
  //unHookAjax();

});
function selectAnswer(qid,Answer){
 inputs= "input[name='"+qid+"']"
 
  $(inputs).each(function(){ 
    
   str=$(this).val();   
    if(str.indexOf(Answer)>-1)
    {
      $(this).click();
       $(this).css("background-color","yellow")
    }
    
    });
}
function tryParseJson1(xhr){
  //console.log("onreadystatechange called: %O",xhr.responseText)},  
console.log(xhr.responseText.length);//否则会出现转json错误，不知道原因
 // console.log(xhr.responseText);  

  var contentType=xhr.getResponseHeader("content-type"); 
  console.log(contentType);  

  if(xhr.responseText.length>11000&&f==1)
 {f=0;
 console.log(xhr.responseText.length);  

   //console.log(xhr.responseText);    

   // xhr.responseText=JSON.parse(xhr.responseText);
 var obj = JSON.parse( xhr.responseText);
   //var obj=eval('('+xhr.responseText+')');
     
   
   if(obj["Data"].hasOwnProperty("PaperDetailsList"))
   {var qlist=obj["Data"]["PaperDetailsList"];
     //console.log(qlist);
     for( i=0;i<qlist.length;i++)
       {
        ID.push(qlist[i]["ID"]);
       Answer.push( qlist[i]["Answer"]);
         
       }
     
     
   }
   
   //alert(obj["id"]);
  // console.log(xhr);
  }
  
}
hookAjax({ //拦截回调
  onreadystatechange:tryParseJson1,
  onload:tryParseJson1 ,
 });
 // 
 // 
 // 
 //hookAjax({ //拦截回调
   
  //onreadystatechange:function(xhr){ 
     
   // console.log("onreadystatechange called: %O",xhr.responseText.length)},
   //onload:function(xhr){ 
     //console.log("onload called: %O",xhr) 
   //  }, 
   //拦截方法 
   //open:function(arg,xhr){ 
   //console.log("open called: method:%s,url:%s,async:%s",arg[0],arg[1],arg[2]) 
   //} 
//}) ;