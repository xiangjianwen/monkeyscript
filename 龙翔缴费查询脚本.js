// ==UserScript==
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @name 龙翔缴费查询
// @match  *://*/*
// @grant none
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==
//添加div 文本框 按钮，
var my = document.createElement("divCell");
  document.body.appendChild(my);
  my.innerHTML='<div  style="position:fixed ; bottom:80px;width:1002" lign="left" id="bg">移动  <textarea  id="name" cols="4" rows="5"></textarea> <textarea  id="card" cols="10" rows="5"></textarea><textarea  id="output" cols="10" rows="5"></textarea><input type="button" name="tijiao" id="tijiao" value="提交" /><label id ="l" style="background-color:white;">0</label  ></div>';
 var s="";//存结果

$("#name").val("余航\n张乐");
$("#card").val("36112320060221177X\n361121200603296813");
$("#tijiao").click(function(){
    var name1= $("#name").val().replace(/\n/g,","); //excel复制过来的姓名
        nameArray=name1.split(",");//转数组
var card1= $("#card").val().replace(/\n/g,","); //excel复制过来的身份证号码
        cardArray=card1.split(",");  	//转数组
  //console.log(nameArray)
  for(var i=0;i<nameArray.length;i++){
  var encryptLoginInfo=getEncodeStrByBase64(nameArray[i]+"|"+cardArray[i]);
var encryptAllLoginInfo=getEncodeStrByBase64(nameArray[i]+"||"+cardArray[i]);
  // console.log(encryptAllLoginInfo)

   jQuery.ajax({//注意异步post

				type : "POST",
				dataType : "json",
				url : "/order/orderList_m.jhtml",
				data : {
					loginInfo : encryptLoginInfo,
					allLoginInfo : encryptAllLoginInfo,
					isSearchBills :0,
					isUserInfo : "",
					trueName: "",
					merchantOrgName: "",
					billID:"",
					isWechat: true,
					wechatBankFlag: false,
					VIEW_FLAG: 1,
					wechatQuickPayFlag: false,
					subParamBit: 0
				},
				contentType : "application/x-www-form-urlencoded; charset=utf-8",
				success : function(data) {
					if (data.resultCode == "SUCCESS") {
						 $("#l").text(i)
						//实名制缴费信息项
						var realAuthMsg = data.realAuthMsg;


						var unpaidBillList = data.unpaidBillList;
						if(unpaidBillList!=null)
						{unpaidBillList = paramCryptionUtils.decryptToJsonObj(unpaidBillList);
					console.log(unpaidBillList)
					var info=unpaidBillList[0].loginInfo+",未缴费,"+unpaidBillList[0].billDate+","+unpaidBillList[0].payAmt;
					console.log(info)
					 s=s+info+"\n"
					 $("#output").val(s);
						}
						else{
						var paidBillList = data.paidBillList;

						paidBillList = paramCryptionUtils.decryptToJsonObj(paidBillList);
						console.log(paidBillList)
						var info1=paidBillList[0].loginInfo+",已经缴费,"+paidBillList[0].billDate+","+paidBillList[0].payAmt;
					console.log(info1);
					s=s+info1+"\n";
					$("#output").val(s);
							}
					}
				}


    });
  }

   });


