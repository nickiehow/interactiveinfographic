/* 
\      \ |__| ____ |  | _|__| ____    /   |   \  ______  _  __
 /   |   \|  |/ ___\|  |/ /  |/ __ \  /    ~    \/  _ \ \/ \/ /
/    |    \  \  \___|    <|  \  ___/  \    Y    (  <_> )     / 	Code By Nickie How, CPDD2
\____|__  /__|\___  >__|_ \__|\___  >  \___|_  / \____/ \/\_/   28/08/2015
        \/        \/     \/       \/         \/                
*/
var strBtn='';
strBtn+='<ul id="btnMenu">\n';
for (i = 1; i <= 6; i++) {strBtn+='<li id="li_'+i+'"><div id="btn_'+i+'" class="btn_'+i+'"></div></li>\n';}
strBtn+='</ul>\n';
$("#nav_menu").append(strBtn);
var Alldata = {
	"infoMap": [
    {id: 0,picsImg: "images/infoImgs/info_default.jpg",},
    {id: 1,picsImg: "images/infoImgs/info_chinese.jpg", },
	{id: 2,picsImg: "images/infoImgs/info_eurasians.jpg",},
    {id: 3,picsImg: "images/infoImgs/info_europeans.jpg",},
	{id: 4,picsImg: "images/infoImgs/info_malays.jpg",},
	{id: 5,picsImg: "images/infoImgs/info_tamils.jpg",},
	{id: 6,picsImg: "images/infoImgs/info_others.jpg",}
    ] 
};
function showInfoMap(a){for(var n=0;n<Alldata.infoMap.length;n++)if(Alldata.infoMap[n].id==a)return Alldata.infoMap[n].picsImg}