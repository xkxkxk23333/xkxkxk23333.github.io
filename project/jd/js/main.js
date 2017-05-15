var celanitems=document.querySelectorAll(".ce");
var celanis=document.querySelectorAll(".zuocelan ul li :not(.lastce)");
var celanbox=document.querySelector(".zuocelan");
var xiang=document.querySelector(".guanggao1");
var main=document.querySelector("main");
var totop=document.querySelectorAll(".totop");
var bannertu=document.querySelectorAll(".banner-middle ul.bann li");
var bannerbox=document.querySelector(".banner-m-top");
var lbdian=document.querySelectorAll(".banner-m-top ul.lunbo li");
var lbtn=document.querySelector(".lbtn");
var rbtn=document.querySelector(".rbtn");
var address=document.querySelector(".address");
var allAddress=document.querySelector(".allAddress");
//console.log(bannertu);
var obj=bannertu[0];
var obj1=lbdian[0];
var t;
var num=0;
var topFixed=document.querySelector(".gddingbu");
address.onmouseover=function () {
    allAddress.style.display="block";
}
address.onmouseout=function () {
    allAddress.style.display="none";
}

function move() {
    num++;
    if(num==lbdian.length){
        num=0;
    }
    if(num==-1){
       num=lbdian.length-1;
    }
    obj.style.opacity=0;
    obj.style.zIndex=1;
    obj1.style.background="#fff";
    bannertu[num].style.opacity=1;
    bannertu[num].style.zIndex=2;
    obj=bannertu[num];
    lbdian[num].style.background="#db192a";
    obj1=lbdian[num];
}
lbtn.onclick=function () {
    clearInterval(t);
    num-=2;
    move();
}
rbtn.onclick=function () {
    move();
    clearInterval(t);
}
t=setInterval(move,3000);
Array.from(lbdian).forEach(function (value,index) {
    value.onmouseover=function () {
        num=index;
        obj.style.opacity=0;
        obj.style.zIndex=1;
        obj1.style.background="#fff";
        bannertu[index].style.opacity=1;
        bannertu[index].style.zIndex=2;
        obj=bannertu[index];
        lbdian[index].style.background="#db192a";
        obj1=lbdian[index];
    }
});
bannerbox.onmouseover=function () {
    clearInterval(t);
}
bannerbox.onmouseout=function () {
    t=setInterval(move,3000);
}
window.onscroll=function () {
    var obj1=document.body.scrollTop;
    var obj2=xiang.offsetTop;
    if(obj1>obj2){
        celanbox.style.opacity=1;
        topFixed.style.top=0;
    }else{
        celanbox.style.opacity=0;
        topFixed.style.top="-50px";
    }
    var obj3=[];
    var obj4=celanis[0];
    Array.from(celanis).forEach(function (ele,index) {
        obj3.push(celanitems[index].offsetTop);
        /*if(obj1>obj3[index]){
            // obj4.style.background="";
          //  ele.style.background="#db192a";

            // obj4=ele;
              $(".zuocelan ul li :not(.lastce)").eq(index)
                  .css("background","#db192a").siblings().css("background","");
                 // .end().not(index).css("background","");

        }*/
    });


}

$(window).scroll(function () {
    $(".ce").each(function (ind,ele) {
        //console.log(ele);
        var st=$(window).scrollTop();
        var ot=$(ele).offset().top;
        if(st>ot) {
            // $(".zuocelan ul li :not(.lastce)").eq(ind).css("background","#db192a").siblings().css("background","");
            //console.log($(".zuocelan ul li :not(.lastce)").eq(ind))
        }
    });
});
var clickbefore=celanis[0];
Array.from(celanis).forEach(function (ele,index) {
    ele.onclick=function () {
        animate(document.body,{scrollTop:celanitems[index].offsetTop},500);
        clickbefore.style.background="";
        ele.style.background="#db192a";
        clickbefore=ele;
    }

});
Array.from(totop).forEach(function (ele,index) {
    ele.onclick=function () {
        animate(document.body,{scrollTop:0},500);
    }

});
var ygd2=document.querySelectorAll(".ygd2");
var text1=document.querySelectorAll(".text1");

var t8;
Array.from(ygd2).forEach(function (ele,index) {
    hover(ele,function () {
        clearTimeout(t8);
        t8=setTimeout(function () {
            text1[index].classList.add("show1");

        },200)
    },function () {
        clearTimeout(t8);
        if(text1[index].classList.contains("show1")){
            text1[index].classList.remove("show1");
            text1[index].classList.add("hide1");
        }

    });
});
Array.from(text1).forEach(function (ele,index) {
    ele.addEventListener("animationend",function () {
        if(ele.classList.contains("hide1")){
            ele.classList.remove("hide1")
        }
    })
})
function tubiaomove() {
    for(var i=0;i<6;i++){
    var len=570;
    $("ul.aiguang .aiguang-xia .aiguang-xia4 ul.aiguang-xia4ul").css("left",len*i+"px");
    }
   // console.log(len);
}
$(".aiguangyouanniu").click(function () {
    tubiaomove();
});

var hourele=document.querySelector(".hour");
var minele=document.querySelector(".minute");
var secele=document.querySelector(".second");
setInterval(function () {
    var now=new Date();
    var now1=new Date(2017,5,29,0,0,0);
    var cha=now1.getTime()-now.getTime();
    var hour=Math.floor(cha/(1000*60*60)%60);
    hourele.innerHTML=hour<10?"0"+hour:hour;
    var min=Math.floor(cha/(1000*60)%60);
    minele.innerHTML=min<10?"0"+min:min;
    var sec=Math.floor(cha/(1000)%60);
    secele.innerHTML=sec<10?"0"+sec:sec;
},1000)