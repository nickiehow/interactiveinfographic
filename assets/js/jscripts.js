/* 
\      \ |__| ____ |  | _|__| ____    /   |   \  ______  _  __
 /   |   \|  |/ ___\|  |/ /  |/ __ \  /    ~    \/  _ \ \/ \/ /
/    |    \  \  \___|    <|  \  ___/  \    Y    (  <_> )     / 	Code By Nickie How, CPDD2
\____|__  /__|\___  >__|_ \__|\___  >  \___|_  / \____/ \/\_/   28/08/2015
        \/        \/     \/       \/         \/                
*/
var nextScreen=0;
function hoverImages(t,e,n){""==e&&(e="images"),document.getElementById(t).src=e+"/"+n}function changeclassName(t,e){t.className=e}function resetBtn(){for(i=1;i<=6;i++)$("#info_"+i).css("display","none"),changeclassName(document.getElementById("btn_"+i),"btn_"+i)}function clearScreen(){}function gotoScreen(t){switch(t){case 1:nextScreen=1,clearScreen();break;case 2:nextScreen=2,clearScreen(),$("#startActivity_1,#button1,#button2").css("display","block"),changeclassName(document.getElementById("startActivity_1"),"","bg_step2b"),changeclassName(document.getElementById("button1"),"","btn_checkL_on"),changeclassName(document.getElementById("button2"),"","btn_checkR"),window.setTimeout(function(){changeclassName(document.getElementById("startActivity_1"),"","bg_step2c"),$("#button1").css("display","none"),$("#button2").css("display","none"),$("#btn_next3").css("display","block")},3e3)}}function getpageId(t){var e="";switch(t){case 0:e="Home";break;case 1:e="Chinese";break;case 2:e="Eurasians";break;case 3:e="Others";break;case 4:e="Europeans";break;case 5:e="Tamils";break;case 6:e="Malays"}return e}function resetPop(){$("#popSMap").css("display","none")}function showPopScreen(t,e){var n="";1==t&&1==e?(n="<div id='Popup1' style='display:none;'><img src='assets/images/infoImgs/popup_Chinesecantonese.png'></div>",$("#popSMap").html(n)):1==t&&2==e?(n="<div id='Popup2' style='display:none;'><img src='assets/images/infoImgs/popup_Chinesehokkien.png'></div>",$("#popSMap").html(n)):3==t&&1==e?(n="<div id='Popup1' style='display:none;position:absolute;top:-20px;left:-50px;'><img src='assets/images/infoImgs/popup_Othersarab.png'></div>",$("#popSMap").html(n)):3==t&&2==e?(n="<div id='Popup2' style='display:none;'><img src='assets/images/infoImgs/popup_Othersarmenians.png'></div>",$("#popSMap").html(n)):5==t&&1==e?(n="<div id='Popup1' style='display:none;'><img src='assets/images/infoImgs/popup_Tamils.png'></div>",$("#popSMap").html(n)):6==t&&1==e?(n="<div id='Popup1' style='display:none;position:absolute;top:-20px;left:-41px;'><img src='assets/images/infoImgs/popup_Malaybugis.png'></div>",$("#popSMap").html(n)):6==t&&2==e&&(n="<div id='Popup2' style='display:none;'><img src='assets/images/infoImgs/popup_MalayBaweanese.png'></div>",$("#popSMap").html(n))}function gotoScreen(t){var e="";switch(t){case 0:nextScreen=0;break;case 1:nextScreen=1,e+="<div style='float:left;width:42px;height:42px;margin-left:105px;margin-top:60px;'><button id='1_lightbulb1' class='btn_lightbulb'></button></div>",e+="<div style='float:right;width:42px;height:42px;position:absolute;margin-left:850px;margin-top:45px;'><button id='1_lightbulb2' class='btn_lightbulb'></button></div>",$("#popMap").html(e);break;case 2:nextScreen=2,e+="",$("#popMap").html(e);break;case 3:nextScreen=3,e+="<div style='float:left;width:42px;height:42px;margin-left:648px;margin-top:515px;'><button id='3_lightbulb1' class='btn_lightbulb'></button></div>",e+="<div style='float:right;width:42px;height:42px;position:absolute;margin-left:982px;margin-top:258px;'><button id='3_lightbulb2' class='btn_lightbulb'></button></div>",$("#popMap").html(e);break;case 4:nextScreen=4,e+="",$("#popMap").html(e);break;case 5:nextScreen=5,e+="<div style='float:left;width:42px;height:42px;margin-left:125px;margin-top:120px;'><button id='5_lightbulb1' class='btn_lightbulb'></button></div>",$("#popMap").html(e);break;case 6:nextScreen=6,e+="<div style='float:left;width:42px;height:42px;margin-left:94px;margin-top:150px;'><button id='6_lightbulb1' class='btn_lightbulb'></button></div>",e+="<div style='float:right;width:42px;height:42px;position:absolute;margin-left:954px;margin-top:42px;'><button id='6_lightbulb2' class='btn_lightbulb'></button></div>",$("#popMap").html(e)}}$(document).ready(function(){for(i=1;i<=6;i++)!function(t){$(document).on("click","#btn_"+t,function(){nextScreen=t;var e=getpageId(t),n="<img src='assets/images/hdrImgs/hdr_"+e+".png' align='center'>";$("#topheader").html(n),$("#pagecontent").css("display","none"),$("#infoMap").css("display","block"),$("#popMap").css("display","block"),$("#imgMap").attr("src","assets/images/infoImgs/page_"+e+".png"),$("#btn_home").css("display","block"),resetPop(),gotoScreen(t)}),$(document).on("click","#"+t+"_lightbulb1",function(e){showPopScreen(t,1),$("#popSMap").toggle("fast"),$("#Popup1").toggle("fast")}),$(document).on("click","#"+t+"_lightbulb2",function(){showPopScreen(t,2),$("#popSMap").toggle("fast"),$("#Popup2").toggle("fast")})}(i);$(document).on("click","#btn_home",function(){var t=getpageId(0),e="<img src='assets/images/hdrImgs/hdr_"+t+".png' align='center'>";$("#topheader").html(e),$("#pagecontent").css("display","block"),$("#infoMap").css("display","none"),$("#popMap,#popSMap").css("display","none"),$("#btn_home").css("display","none")}),gotoScreen(0==nextScreen?0:nextScreen)});