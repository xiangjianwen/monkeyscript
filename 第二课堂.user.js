// ==UserScript==
// @name         第二课堂
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @require http://oss.sheetjs.com/js-xlsx/xlsx.full.min.js
// @description  try to take over the world!
// @author       You
// @match       http://www.cnblogs.com/bmbh/p/7484942.html
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// ==/UserScript==
/* jshint -W097 */
'use strict'; 
// Your code here...
//添加div 文本框 按钮，
var my = document.createElement("divCell");     //document.body.appendChild(my);
my.innerHTML='<div  style="position:fixed;top:20px;left:0%" lign="left" id="bg">移动<div id ="x"></div>  <textarea name="cardid1" id="cardid1" cols="4" rows="5"></textarea> <textarea name="searchId1" id="searchId1" cols="30" rows="8"></textarea><input  style="width:60px;height:100px;"  type="submit" name="tijiao" id="tijiao" value="提交" /></div>';  my.id = "divCell";  
$(my).insertAfter("body")
var s="";
var k=0;
var x=0;
var tiku;  var sid;
var j=0;
var xmlHttpresult;
var flag=0;
var wb;
GM_xmlhttpRequest({  
  method: "GET",  
  url: "http://xiangjianwen.host3v.vip",   
  onload: function(response) {  
    xmlHttpresult=response.responseText;
    console.log(xmlHttpresult);
    //$("#cardid1").val(xmlHttpresult);
    //这里写处理函数   
    }
});
// 从网络上读取某个excel文件，url必须同域，否则报错    
function readWorkbookFromRemoteFile(url, callback) {      
    
       GM_xmlhttpRequest({        
       method: "GET",        
       url: url,         
      responseType:'arraybuffer',    
        onload:function(e) {      
      if(e.status == 200) {      
      var data = new Uint8Array(e.response);          
      var workbook = XLSX.read(data, {type: 'array'});       
      if(callback) callback(workbook);     
     }     
 }      
     });  

}    

// 读取 excel文件  
function outputWorkbook(workbook) {       
   var sheetNames = workbook.SheetNames; // 工作表名称集合  
    sheetNames.forEach(name => {        
    var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表    
        console.log(workbook) ; 
      console.log(worksheet) ;  
      //console.log(worksheet["A1"].v)
      for(var key in worksheet) {     
       // v是读取单元格的原始值    
      //console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);       
     }     
   });  //readWorkbook(workbook);






}  
function readWorkbook(workbook)
{ 	var sheetNames = workbook.SheetNames; // 工作表名称集合 
 var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet 
 //console.log(worksheet);
 var csv = XLSX.utils.sheet_to_csv(worksheet); 
 //document.getElementById("x").innerHTML = csv;
 console.log(csv);
} 
// 将csv转换成简单的表格，会忽略单元格合并，在第一行和第一列追加类似excel的索引

              
var wb;     
//var url = "http://www.gjxq.gov.cn/uploadfile/2018/1008/20181008073536628.xlsx" ;  
var url="http://xiangjianwen.host3v.vip/77.xls";
function importf() {//导入   
            readWorkbookFromRemoteFile(url,outputWorkbook);  
         }         
    
  



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

$("#cardid1").val("题库");
$("#searchId1").val("答案");
// 定义全局函数，   
   $("#tijiao").click(function(){ 
     importf(); 
    x++;
     var tk=$("#cardid1").val();   
     var jdtecont=$(".field-label")[x].innerHTML;//竞答内容  
     //CheckChinese(jdtecont);
     jdtecont=jdtecont.replace(/\s+/g,"");   
     jdtecont=jdtecont.replace(/"([^"]*)"/g ,"“$1”");  
    jdtecont= Chinese(jdtecont);
     console.log(jdtecont);
     var indextk=tk.indexOf(jdtecont,0);//题库查找位置  
     console.log(indextk);
     $("#searchId1").val(tk.substr(indextk-50,100)); 
     //$("#searchId1").val(tk);   
     // var cidt= $("#cardid1").val().replace(/\n/g,",")  
         //var cidt= $("#cardid1").val();   
            // cid=cidt.split(",");   
        //  var sidt= $("#searchId1").val().replace(/\n/g,",")  
            //   sid=sidt.split(",");
            //   
      
   }); 
 $(document).ready(function(){ 
   //循环执行，每隔1秒钟执行一次 1000
   var t1=window.setTimeout(refreshCount, 1000000);   
   function refreshCount() {    
     console.log("ready1");
     var tk=$("#cardid1").val(); 
     
     var jdtecont=$(".index__p2-2YZxX").text();//竞答内容    
    console.log(jdtecont);
     jdtecont=jdtecont.replace(/\s+/g,""); 
     jdtecont=jdtecont.replace(/"([^"]*)"/g ,"“$1”");
     var indextk=tk.indexOf(jdtecont.substr(0,8),0);//题库查找位置 
     var qda=tk.substr(indextk,212);
     
     var ABC=qda.substr(qda.indexOf("答案",0)+3,1); 
     console.log($(".index__kind-1LO6L"));  
     if(flag==0 && $(".index__kind-1LO6L").length!=0){   
       if($(".index__kind-1LO6L")[0].innerHTML=="单选"){   
         if(ABC=="A")  
         {var a = $(".index__radio-3rN1i")[0]; $(a).trigger("click");  
         }   
         else if(ABC=="B"){  
           var a = $(".index__radio-3rN1i")[1]; $(a).trigger("click");   
         }   
         else if(ABC=="C"){   
           var a = $(".index__radio-3rN1i")[2]; $(a).trigger("click");   
         }   
         else if(ABC=="D"){ 
           var a = $(".index__radio-3rN1i")[3]; $(a).trigger("click");   
         }    
         flag=1;  console.log(ABC); 
       }  	
       else     
           {   for(var i=0;i<$(".index__multiple-1ORmX").length;i++)
            {var a = $(".index__multiple-1ORmX")[i];
             $(a).trigger("click"); 
            }
           }       

     }else      
          {    
            var a = $(".index__next-1DGWu")[0]; $(a).trigger("click");     
     
             flag=0;    
       }    
     //$(".index__kind-1LO6L")[0].innerHTML
     //var a = $(".index__multiple-1ORmX")[1]; $(a).trigger("click");
     //var a = $(".index__radio-3rN1i")[1]; $(a).trigger("click");
     //var a = $(".index__next-1DGWu")[0]; $(a).trigger("click");
     $("#searchId1").val(qda); 
     console.log("ready2");
     clearTimeout(t1); //清除上一次的定时器，否则会无限开多个   
     setTimeout(refreshCount, 1000000);//方法中调用定时器实现循环     
     
   }     
 }); 


