var navs=document.querySelectorAll(".zi div:not(.scroll):not(.shouy)");
var sed=document.querySelectorAll(".scroll");
var wenxin=document.querySelector(".wei");
var wenx=document.querySelector(".wei .weixintu");
var input=document.querySelector("input.wenben");
var totop=document.querySelector(".totop");
var gouwuche=document.querySelector(".gouwu");
var gouwuhid=document.querySelector(".gouwuhid");
// console.log(gouwuhid)
gouwuche.onmouseover=function () {
    gouwuhid.style.display="block";
}
gouwuche.onmouseout=function () {
    gouwuhid.style.display="none";
}
//var arr=[];
totop.onclick=function () {
    animate(document.body,{scrollTop:0},500)
}
Array.from(navs).forEach(function (choose,index) {
    var arr=Array.from(sed).map(v=>v.querySelectorAll("li").length*35+30);
    
   /* arr.push(sed[index].querySelectAll("li"));
    console.log(arr);*/
    choose.onmouseover=function () {
        sed[index].style.height=arr[index]+"px";
    };
    choose.onmouseout=function () {
        sed[index].style.height=0;
    }
});
wenxin.onmouseover=function () {
    wenx.style.display="block";
};
wenxin.onmouseout=function () {
    wenx.style.display="none";
};
input.onfocus=function () {
    if(this.value=="请输入要搜索的内容"){
        this.value=""
    }
};
input.onblur=function () {
    if(this.value==""){
        this.value="请输入要搜索的内容"
    }
};
