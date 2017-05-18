var login=document.querySelectorAll(".xiansss");
var loginhidden=document.querySelectorAll(".hidden1");
var navs=document.querySelectorAll(".navs");
var yidongsc=document.querySelectorAll(".yidongsc");

var lbdians=document.querySelectorAll(".lbdian ul li");
var banertus=document.querySelectorAll(".tu .banner-inner li");
var box=document.querySelector(".banner");
var lunbo=document.querySelector(".lbdian");
var lunbopre=document.querySelector(".lbpre");
var lunbonext=document.querySelector(".lbnext");

var gonggaos=document.querySelectorAll(".gonggao1 li");
var gg=document.querySelector(".gonggao");
var jtz=document.querySelector(".ggbtn .left");
var jty=document.querySelector(".ggbtn .right");

var cjwt=document.querySelector(".cjwt");
var zxzx=document.querySelector(".zxzx");
var tsjy=document.querySelector(".tsjy");

var yhbox=document.querySelector(".yhcx");
var yhul=document.querySelector(".yhgundong");
var yhli=document.querySelectorAll(".yhgundong .indexbox");
var yhnext=document.querySelector(".yhcx .yhnext");
var yhpre=document.querySelector(".yhcx .yhpre");
var cishu=4;//
var len=yhli[0].offsetWidth+10;
var yh=setInterval(moves1,2000);
var flagss=true;
function moves1() {
        yhul.style.transition="all 1s";
    cishu++;
    yhul.style.left=-cishu*295+"px";
}
yhbox.onmouseover=function () {
    clearInterval(yh);
}
yhbox.onmouseout=function () {
    yh=setInterval(moves1,2000);
}
yhul.addEventListener("transitionend",function () {
    if(cishu==12){
        cishu=4;
        yhul.style.left=-cishu*295+"px";
        yhul.style.transition="none";
    }else if(cishu==0){
       // console.log(cishu)
        cishu=8;
        yhul.style.left=-cishu*295+"px";
        yhul.style.transition="none";

    }
    flagss=true;
});

yhpre.onclick=function () {
 //   console.log(cishu);
    if(flagss){
        cishu-=2;
        moves1();
        flagss=false;
    }

};
yhnext.onclick=function () {
    if(flagss){
        moves1();
        flagss=false;
    }
}
/*function moves1() {
    if(cishu<=-1){
        cishu=yhli.length-4;
    }
    if(cishu==0){
        yhul.style.transition="all 1s";
    }
    cishu++;
    //console.log(cishu)
    if(cishu==yhli.length-4){
        cishu=0;
       // yhul.style.transition="none";
    }
    yhul.style.marginLeft=-cishu*len+"px";
}
yhpre.onclick=function () {
    cishu-=2;
    moves1();
}
yhnext.onclick=function () {
    moves1();
}
var yh=setInterval(moves1,2000);
yhbox.onmouseover=function () {
    clearInterval(yh);
}
yhbox.onmouseout=function () {
    yh=setInterval(moves1,2000);
}
yhul.addEventListener("transitionend",function () {
    console.log(cishu)
    if(cishu==yhli.length-4){
        console.log(1111111);
        yhul.style.transition="none";
        yhul.style.marginLeft=0;
        cishu=0;
    }
});*/
var dizhi=document.querySelector(".address");
var dzz=document.querySelector(".dzz");
var on= dizhi.onclick=function (e) {
    dzz.style.display="block";
    e.stopPropagation();
}
document.body.onclick=function () {
        dzz.style.display="none";
}


cjwt.onmouseover=function () {
    cjwt.style.left="-84px";
}
cjwt.onmouseout=function () {
    cjwt.style.left="-22px";
}
zxzx.onmouseover=function () {
    zxzx.style.left="-84px";
}
zxzx.onmouseout=function () {
    zxzx.style.left="-22px";
}
tsjy.onmouseover=function () {
    tsjy.style.left="-84px";
}
tsjy.onmouseout=function () {
    tsjy.style.left="-22px";
}

function move3(){
    var str=gonggaos[0].innerHTML;
    for(var i=0;i<gonggaos.length-1;i++){
        gonggaos[i].innerHTML=gonggaos[i+1].innerHTML;
    }
    gonggaos[gonggaos.length-1].innerHTML=str;

}

function move4(){
    var str1=gonggaos[gonggaos.length-1].innerHTML;
    for(var i=gonggaos.length-1;i>0;i--){
        gonggaos[i].innerHTML=gonggaos[i-1].innerHTML;
    }
    gonggaos[0].innerHTML=str1;

}

var t5=setInterval(move3,3000);
gg.onmouseover=function(){
    clearInterval(t5);
}
gg.onmouseout=function(){
    t5=setInterval(move3,5000);
};
jtz.onclick=function () {
    move4()
};
jty.onclick=function () {
    move3()
}

var t=setInterval(move,3000);
var now=0;
var z=5;
var flag=true;

function move() {
    banertus[now].classList.add("leftOut");
    lbdians[now].classList.remove("active");

    now++;
    if(now==banertus.length){
        now=0;
    }
    banertus[now].classList.add("rightIn");
    banertus[now].style.zIndex=z++;
    lbdians[now].classList.add("active");
    lunbo.style.zIndex=z+2;
    lunbonext.style.zIndex=z+2;
    lunbopre.style.zIndex=z+2;
}
Array.from(lbdians).forEach(function (btn,index) {
    btn.onclick=function () {
        if(now==index){
            return;
            // flag=true;
        }
        if (index>now){
            banertus[now].classList.add("leftOut");
            banertus[index].classList.add("rightIn");

        }else if(index<now){
            banertus[now].classList.add("rightOut");
            banertus[index].classList.add("leftIn");
        }
        lbdians[now].classList.remove("active");
        lbdians[index].classList.add("active");
        banertus[index].style.zIndex=z++;
        lunbo.style.zIndex=z+2;
        lunbonext.style.zIndex=z+2;
        lunbopre.style.zIndex=z+2;
        now=index;
    }
});
banertus.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.className="";
        flag=true;
    });
});
box.onmouseover=function () {
    clearInterval(t);
};
box.onmouseout=function () {
    t=setInterval(move,3000);
};


lunbonext.onclick=function () {
    if(flag){
        flag=false;
        move();
    }
}
lunbopre.onclick=function () {
    if(flag){
        flag=false;
        banertus[now].classList.add("rightOut");
        lbdians[now].classList.remove("active");
        now--;
        if(now<0){
            now=banertus.length-1
        }
        banertus[now].classList.add("leftIn");
        lbdians[now].classList.add("active");
        banertus[now].style.zIndex=z++;
        lunbo.style.zIndex=z+2;
        lunbonext.style.zIndex=z+2;
        lunbopre.style.zIndex=z+2;
    }
}

Array.from(navs).forEach(function (v,i) {
    v.onmouseover=function () {
        yidongsc[i].style.display="block";
    };
    v.onmouseout=function () {
        yidongsc[i].style.display="none";
    };
});

Array.from(login).forEach(function (v,i) {
    v.onmouseover=function () {
        loginhidden[i].style.display="block";
    };
    v.onmouseout=function () {
        loginhidden[i].style.display="none";
    };
});

