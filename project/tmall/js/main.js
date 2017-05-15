var btndians=document.querySelectorAll(".lunbo .lbdian");
var btntus=document.querySelectorAll(".banner-tu .bannertu");
var conta=document.querySelector(".banner-tu");
var banner=document.querySelector(".banner");
var contentleft=document.querySelector(".content1-left-center");
var imgs=document.querySelectorAll(".content1-left-center .lunbotu");
var leftj=document.querySelector(".zuojiantou");
var rightj=document.querySelector(".youjiantou");
var hovbox=document.querySelectorAll(".banner-daohang-bannertu .ul1 li");
var hov=document.querySelectorAll(".hover");
var zbyg=document.querySelectorAll(".fc-item");
var yugao=document.querySelector("div.yugao");
var erji=document.querySelectorAll(".erji");
var yiji=document.querySelectorAll(".yiji1");
var celan=document.querySelector(".celan");
var content=document.querySelector(".content");
var djcelan=document.querySelectorAll(".celan ul .celans");
var contents=document.querySelectorAll(".content .cho");
var totop=document.querySelectorAll(".totop");
var topbar=document.querySelector(".searchbox");
var youcelan=document.querySelector(".youcelan");
var fudong=document.querySelectorAll(".youc:not(.youc2):not(.youc9)");
var reddi=document.querySelectorAll(".youc");
var fudongs=document.querySelectorAll(".youc .shade");
var tim;
var goPhone=document.querySelector(".goPhone");
var erweima=document.querySelector("header .header-kuang ul li div.erweimas");
var goerwei=document.querySelector(".youc9");
var youerwei=document.querySelector(".erweidi");
var toyp=document.querySelector(".youc8");

var zuobianli=document.querySelectorAll(".zuobian>li");
var zuobianl=document.querySelector(".zuobian>li");
var bannerhidden=document.querySelectorAll(".banner-left-right");
for(var i=0;i<zuobianli.length;i++){
    bannerhidden[i].style.top=-zuobianl.offsetHeight*i+"px";
}
Array.from(zuobianli).forEach(function (ele,index) {
    ele.onmouseover=function (e) {
        ele.style.background="#fff";
       // e.stopPropagation();
        bannerhidden[index].style.display="block";

    };
    ele.onmouseout=function () {
        ele.style.background="";
        bannerhidden[index].style.display="none";
    };
/*    banner.onmouseover=function (e) {
       bannerhidden[index].style.display="block";
    };
    banner.onmouseout=function (e) {
        bannerhidden[index].style.display="none";
    };*/
});
goerwei.onmouseover=function () {
    youerwei.style.display="block";
};
goerwei.onmouseout=function () {
    youerwei.style.display="none";
};
goPhone.onmouseover=function () {
    erweima.style.display="block";
};
goPhone.onmouseout=function () {
    erweima.style.display="none";
};
//console.log(fudongs);
Array.from(fudong).forEach(function (fud,index) {
    hover(fud,function () {
        clearTimeout(tim);
        tim=setTimeout(function () {
            fudongs[index].classList.add("xianshi") ;
        },200);
    },function () {
        clearTimeout(tim);
        if(fudongs[index].classList.contains("xianshi")){
            fudongs[index].classList.remove("xianshi");
            fudongs[index].classList.add("yincang");
        }
    })
});
Array.from(fudongs).forEach(function (tips,ind) {
    tips.addEventListener("animationend",function () {
        if(tips.classList.contains("yincang")){
            tips.classList.remove("yincang");
        }
    });
});



youcelan.style.height=window.innerHeight+"px";

Array.from(djcelan).forEach(function (ele,index) {
    ele.onclick=function () {
        animate(document.body,{scrollTop:contents[index].offsetTop-60},500)
    };
});
Array.from(totop).forEach(function (toto) {
    toto.onclick=function () {
        animate(document.body,{scrollTop:0},500)
    };
});
window.onscroll=function () {
    var obj=document.body.scrollTop==0?document.body.scrollTop:document.body.scrollTop;
    if(obj>content.offsetTop){
        celan.style.width="35px";
        celan.style.height="332px";
        topbar.style.top=0;
        toyp.style.bottom="10px";
    }else {
        celan.style.width="0px";
        celan.style.height="0px";
        topbar.style.top="-50px";
        toyp.style.bottom="-200px";
    }
};
Array.from(yiji).forEach(function (choose,index) {
    choose.onmouseover=function () {
        choose.style.background="#fff";
       erji[index].style.display="block";

    };
    choose.onmouseout=function () {
        choose.style.background="#f2f2f2";
        erji[index].style.display="none";
    }
});
var num2=0;
var num3=0;
Array.from(hovbox).forEach(function (val,ind) {
    val.onmouseover=function () {
        hov[ind].style.top="-10px";
        hov[ind].style.opacity="1";
    }
    val.onmouseout=function () {
        hov[ind].style.top=0;
        hov[ind].style.opacity="0";
    }
});
function moves1() {
    num3++;
    if(num3==zbyg.length){
        num3=0;
    }
    yugao.style.marginTop=-40*num3+"px";
}

setInterval(moves1,2000);
//
function moves() {
    num2++;
    if(num2==2){
        num2=0;
    }
    contentleft.style.marginLeft=-488*num2+"px";
    if(num2==0){
        leftj.style.display="none";
        rightj.style.display="block";
    }
    if(num2==1){
        leftj.style.display="block";
        rightj.style.display="none";
    }
}

var st1=setInterval(moves,4500);
leftj.style.display="none";
leftj.onclick=function () {
    clearInterval(t);
    num2-=2;
    moves();
    leftj.style.display="none";
    rightj.style.display="block";
};
rightj.onclick=function () {
    clearInterval(t);
    moves();
    rightj.style.display="none";
    leftj.style.display="block";
};
//
var color=["#E8E6EE","#FE6C04","#E8E6EE","#E8E6EE","#D6C3BF","#1D52D4","#E8E6EE"];
//console.log(container);
var obj1=btndians[0];
var obj2=btntus[0];
var ti=setInterval(move1,4000);
var num1=0;
var tes;
function move1() {
    num1++;
    if(num1==btndians.length){
        num1=0;
    }
    obj2.style.zIndex=1;
    obj2.style.opacity=0;
    obj1.style.border=0;
    obj1.style.background="#a2a2a2";
    btndians[num1].style.border="2px solid #a2a2a2";
    btndians[num1].style.background="#f1f1f1";
    btntus[num1].style.zIndex=2;
    btntus[num1].style.opacity=1;
    obj1=btndians[num1];
    obj2=btntus[num1];
    banner.style.background=color[num1];
}
Array.from(btndians).forEach(function (ele,index) {
    ele.onmouseover=function () {
        clearTimeout(tes);
        num1=index;
        tes=setTimeout(function () {
            obj2.style.zIndex=1;
            obj2.style.opacity=0;
            obj1.style.border=0;
            obj1.style.background="#a2a2a2";
            ele.style.border="2px solid #a2a2a2";
            ele.style.background="#f1f1f1";
            btntus[index].style.zIndex=2;
            btntus[index].style.opacity=1;
            obj1=btndians[index];
            obj2=btntus[index];
            banner.style.background=color[index];
        },200);

    };
    conta.onmouseover=function () {
        clearInterval(ti);
    };
    conta.onmouseout=function () {
        ti=setInterval(move1,4000);
    }
});


