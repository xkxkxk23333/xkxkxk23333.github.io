// Jeffrey 2015.12.17
// 加载代码
$(document).ready(function(){
	loadHtmlTail();
});

var provincesJson = [
{"code":100,"name":"北京","href":"http://www.10086.cn/bj","url":"http://shop.10086.cn/mall_100_100.html","abbr":"bj"},
{"code":551,"name":"安徽","href":"http://www.10086.cn/ah","url":"http://shop.10086.cn/mall_551_551.html","abbr":"ah"},
{"code":230,"name":"重庆","href":"http://www.10086.cn/cq","url":"http://shop.10086.cn/mall_230_230.html","abbr":"cq"},
{"code":591,"name":"福建","href":"http://www.10086.cn/fj","url":"http://shop.10086.cn/mall_591_591.html","abbr":"fj"},
{"code":200,"name":"广东","href":"http://www.10086.cn/gd","url":"http://shop.10086.cn/mall_200_200.html","abbr":"gd"},
{"code":771,"name":"广西","href":"http://www.10086.cn/gx","url":"http://shop.10086.cn/mall_771_771.html","abbr":"gx"},
{"code":931,"name":"甘肃","href":"http://www.10086.cn/gs","url":"http://shop.10086.cn/mall_931_931.html","abbr":"gs"},
{"code":851,"name":"贵州","href":"http://www.10086.cn/gz","url":"http://shop.10086.cn/mall_851_851.html","abbr":"gz"},
{"code":311,"name":"河北","href":"http://www.10086.cn/he","url":"http://shop.10086.cn/mall_311_311.html","abbr":"he"},
{"code":371,"name":"河南","href":"http://www.10086.cn/ha","url":"http://shop.10086.cn/mall_371_371.html","abbr":"ha"},
{"code":898,"name":"海南","href":"http://www.10086.cn/hi","url":"http://shop.10086.cn/mall_898_898.html","abbr":"hi"},
{"code":270,"name":"湖北","href":"http://www.10086.cn/hb","url":"http://shop.10086.cn/mall_270_270.html","abbr":"hb"},
{"code":731,"name":"湖南","href":"http://www.10086.cn/hn","url":"http://shop.10086.cn/mall_731_731.html","abbr":"hn"},
{"code":451,"name":"黑龙江","href":"http://www.10086.cn/hl","url":"http://shop.10086.cn/mall_451_451.html","abbr":"hl"},
{"code":431,"name":"吉林","href":"http://www.10086.cn/jl","url":"http://shop.10086.cn/mall_431_431.html","abbr":"jl"},
{"code":250,"name":"江苏","href":"http://www.10086.cn/js","url":"http://shop.10086.cn/mall_250_250.html","abbr":"js"},
{"code":791,"name":"江西","href":"http://www.10086.cn/jx","url":"http://shop.10086.cn/mall_791_791.html","abbr":"jx"},
{"code":240,"name":"辽宁","href":"http://www.10086.cn/ln","url":"http://shop.10086.cn/mall_240_240.html","abbr":"ln"},
{"code":471,"name":"内蒙古","href":"http://www.10086.cn/nm","url":"http://shop.10086.cn/mall_471_471.html","abbr":"nm"},
{"code":951,"name":"宁夏","href":"http://www.10086.cn/nx","url":"http://shop.10086.cn/mall_951_951.html","abbr":"nx"},
{"code":971,"name":"青海","href":"http://www.10086.cn/qh","url":"http://shop.10086.cn/mall_971_971.html","abbr":"qh"},
{"code":210,"name":"上海","href":"http://www.10086.cn/sh","url":"http://shop.10086.cn/mall_210_210.html","abbr":"sh"},
{"code":280,"name":"四川","href":"http://www.10086.cn/sc","url":"http://shop.10086.cn/mall_280_280.html","abbr":"sc"},
{"code":531,"name":"山东","href":"http://www.10086.cn/sd","url":"http://shop.10086.cn/mall_531_531.html","abbr":"sd"},
{"code":351,"name":"山西","href":"http://www.10086.cn/sx","url":"http://shop.10086.cn/mall_351_351.html","abbr":"sx"},
{"code":290,"name":"陕西","href":"http://www.10086.cn/sn","url":"http://shop.10086.cn/mall_290_290.html","abbr":"sn"},
{"code":220,"name":"天津","href":"http://www.10086.cn/tj","url":"http://shop.10086.cn/mall_220_220.html","abbr":"tj"},
{"code":991,"name":"新疆","href":"http://www.10086.cn/xj","url":"http://shop.10086.cn/mall_991_991.html","abbr":"xj"},
{"code":891,"name":"西藏","href":"http://www.10086.cn/xz","url":"http://shop.10086.cn/mall_891_891.html","abbr":"xz"},
{"code":871,"name":"云南","href":"http://www.10086.cn/yn","url":"http://shop.10086.cn/mall_871_871.html","abbr":"yn"},
{"code":571,"name":"浙江","href":"http://www.10086.cn/zj","url":"http://shop.10086.cn/mall_571_571.html","abbr":"zj"}
];

function ghead_getProvince(sim) {
    var rv = null;
    for(var i=0;i<provincesJson.length;i++){
        if(provincesJson[i].code == sim || provincesJson[i].abbr == sim){
            rv = provincesJson[i];
            break;
        }
    }
    return rv;
}

function loadHtmlTail() {

	if("undefined" == typeof province || province == null || province.length == 0){
		province = "";
		var thisURL = document.URL;
		var prov_id = 0;
		var pobj = null;
		
		var provinceCode = new Array("bj","gd","sh","tj","cq","ln","js","hb","sc","sn","he","sx","ha","jl","hl","nm","sd","ah","zj","fj","hn","gx","jx","gz","yn","xz","hi","gs","nx","qh","xj");

		for(var i=0;i<provinceCode.length;i++){
			if(thisURL.indexOf("/"+provinceCode[i]+"/") != -1){
				province = provinceCode[i];
				break;
			}
		}

	    if (province == null || prov_id == 0) {
	        var strCookie = document.cookie;
	        var arrCookie = strCookie.split("; ");
	        for (var i = 0; i < arrCookie.length; i++) {
	            var arr = arrCookie[i].split("=");
	            if (2 <= arr.length && "CmLocation" == arr[0]) {
	                var strpc = arr[1];
	                var arrstrpc = strpc.split("|");
	                if (2 <= arrstrpc.length) {
	                	pobj = ghead_getProvince(arrstrpc[0]);
	                	if (pobj != null) {
	                		province = pobj.abbr;
	                		prov_id = pobj.code;
	    				}
	                }
	                break;
	            }
	        }
	    }
		// 处理不存在的省份cookie
		if (province != null && 0 < province.length) {
			var matchingprovince = false;
			for(var i=0;i<provinceCode.length;i++){
				if(province == provinceCode[i]) {
					matchingprovince = true;
					break;
				}
			}
			if (matchingprovince == false) {
				province = "bj";
			}
		}

		if(!province){
			province = "bj";
		}
	}
	
	var tailScript = document.createElement("script");
	tailScript.setAttribute("type", "text/javascript");
	tailScript.setAttribute("charset", "UTF-8");
	
	document.getElementById("tail").id = province + "_tail";
	tailScript.setAttribute("src", "/"+province + "_tail/" + province + "_tail_h5.js");
	
	var head = document.getElementsByTagName("head");
	if (head.length){
		head[0].appendChild(tailScript);
	} else {
		document.documentElement.appendChild(tailScript);
	}
}

// 浏览器版本判断
$(document).ready(function(){

  var isOldBrowser = false;
  var ua = navigator.userAgent;
	var ie8 = $("meta[name=ie8]").attr("content");
	if (ie8 != "true") {
	    // 判断userAgent中是否出现了旧版本标记
	    if (0 <= ua.indexOf("MSIE 6.") || 0 <= ua.indexOf("MSIE 7.") || 0 <= ua.indexOf("MSIE 8.")) {
	        isOldBrowser = true;
	    }
	    if (isOldBrowser) {
			var divTips = $("<div></div>");
			divTips.attr("class","lowerIEtips");
	    	$("body").append(divTips[0]);
	    	var divTipc = $("<div></div>");
	    	divTipc.attr("class","tipcon");
	    	divTips[0].appendChild(divTipc[0]);
	    	var tipSpan = $("<span></span>");
	    	divTipc[0].appendChild(tipSpan[0]);
	    	var tipImg = $("<img />");
	    	tipImg.attr("src","/"+province + "_tail/images/logo1.png");
	    	tipImg.width(160).height(29);
	    	tipSpan[0].appendChild(tipImg[0]);
	    	var tipP = $("<p></p>");
	    	tipP.html("您的浏览器版本过低，如果页面显示不正常，建议将浏览器升级到最新版本。");
	    	divTipc[0].appendChild(tipP[0]);
	    	var tipA = $("<a></a>");
	    	tipA.attr({"class":"close","id":"closeTips"});
	    	tipA.click(function(){closeTips();});
	    	divTipc[0].appendChild(tipA[0]);
	    }
	}
	function closeTips (){
		$(".lowerIEtips").css("display","none");
	}
});

