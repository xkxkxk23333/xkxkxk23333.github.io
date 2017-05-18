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
$(".brm-item").each(function (ind,ele) {
    $(ele).mouseover(function () {
        $(this).css("border-bottom","2px solid #e01222").siblings().css("border-bottom","0")
        $(".listone").eq(ind).show().siblings().hide();

    });
});

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
        if(st>=ot) {
                $(".left-lists>li a").filter(".bgc").removeClass("bgc").end().eq(ind).addClass("bgc");
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

$(".content5-dot li").mouseover(function(){
    var content5_btns=$(".content5-dot li");
    var content5_index=content5_btns.index(this);
    content5num=content5_index;
    content5_btns.filter(".content5-active").removeClass("content5-active").end().filter(this).addClass("content5-active");
    $(".content5-content").filter(".content5-cactive").removeClass("content5-cactive").end().eq(content5_index).addClass("content5-cactive");
})

var content5=setInterval(content5_move,2000);
var content5num=0;
function content5_move(){
    content5num++;
    if(content5num==$(".content5-dot li").length){
        content5num=0;
    }
    if(content5num<0){
        $(".content5-dot li").length-1;
    }
    $(".content5-dot li").filter(".content5-active").removeClass("content5-active").end().eq(content5num).addClass("content5-active");
    $("div.zhibo ul:first-child li").filter(".content5-cactive").removeClass("content5-cactive").end().eq(content5num).addClass("content5-cactive");
}

$(".zhibo").mouseover(function(){
    clearInterval(content5);
})
$(".zhibo").mouseout(function(){
    content5=setInterval(content5_move,2000);
})

$(".content5-leftbtn").click(function(){
    content5num-=2;
    content5_move();
})

$(".content5-rightbtn").click(function(){
    content5_move();
})

    var find=document.querySelectorAll(".find-con");
    var fxzjt=document.querySelector(".fx-zjt");
    var fxyjt=document.querySelector(".fx-yjt");
    var fxlb=document.querySelectorAll(".sup_item");
    var findcon=document.querySelector(".find2")
    findcon.onmousemove=function () {
        fxyjt.style.opacity=1;
        fxzjt.style.opacity=1;
    };
    findcon.onmouseout=function () {
        fxyjt.style.opacity=0;
        fxzjt.style.opacity=0;
    };
    Array.from(fxlb).forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<fxlb.length;i++){
                fxlb[i].style.background="#c8c8c8";
                find[i].style.display="none";
//                find[i].style.display="none";
            }
            this.style.background="#e01222";
            find[index].style.display="block";
        }

    });
    var numx=0;
    function fn() {
        numx++;
        if(numx==fxlb.length){
            numx=0;
        }
        if(numx==-1){
            numx=fxlb.length-1
        }
        for(var i=0;i<fxlb.length;i++){
            fxlb[i].style.background="#c8c8c8";
            find[i].style.display="none";
        }
        fxlb[numx].style.background="#e01222";
        find[numx].style.display="block";
    }
    fxyjt.onclick=function () {
        fn()
    }
    fxzjt.onclick=function () {
        numx-=2;
        fn()
    }

var menuitem=document.querySelectorAll(".menu li");
var cate_part=document.querySelector(".cate_part");
menuitem.forEach(function (v) {
    v.onmouseover=function () {
        cate_part.style.display="block";
    };
    v.onmouseout=function () {
        cate_part.style.display="none";
    };
})
/*menuitem.onmouseover=function () {
 cate_part.style.display="block";
 };
 menuitem.onmouseout=function () {
 cate_part.style.display="none";
 };*/

//    var t88;
//    t88=setTimeout(ys,1000);
//    function ys() {
$(".service_item span").mousemove(function(){
    $(".it01").css({marginTop:"-40px"});
    $(".it02").hide();
    $("#squares-game").show();
    $(".service_item span").css("borderTop","0px solid red");
    $(this).css("borderTop","2px solid red");
});
//    }
$(".J_service").click(function () {
    $(".it01").animate({marginTop:0});
    $(".it02").show();
    $("#squares-game").hide();
    $(".service_item span").css("borderTop","0px solid red");
})
$(".cx-item01").mousemove(function () {
    $(".cx-bottom").show();
    $(".cx-bottom01").hide();
    $(this).css("border-bottom","2px solid red")
    $(".cx-item02").css("border-bottom","0px solid red")
})
$(".cx-item02").mousemove(function () {
    $(".cx-bottom").hide();
    $(".cx-bottom01").show();
    $(this).css("border-bottom","2px solid red")
    $(".cx-item01").css("border-bottom","0px solid red")
})
$(window).scroll(function () {
    var st=$(this).scrollTop();
    if(st>500){
        $("#search").css("top",0);
//            $("#search").css("display","block")
    }else{
        $("#search").css("top",-50)
    }
});


