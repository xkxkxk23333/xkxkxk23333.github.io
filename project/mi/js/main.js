	var dians=document.querySelectorAll(".dian div");
	var tupians=document.querySelectorAll(".banner-right img");
	var banner=document.querySelector(".banner");
	var jian1=document.querySelector(".zuoj");
	var jian2=document.querySelector(".youj");
	var danpins=document.querySelector(".suibian ul");
	var zuozuo=document.querySelector(".zuozuo");
	var youyou=document.querySelector(".youyou");
	var zuoyou=document.querySelector(".zuoyou");
	var danpins1=document.querySelector(".suibian1 ul");
	var zuozuo1=document.querySelector(".zuozuo1");
	var youyou1=document.querySelector(".youyou1");
	var zuoyou1=document.querySelector(".zuoyou1");
	// console.log(danpins);
	var num5=0;
	var num6=0;
	var search=document.querySelector("input.search-text");
	var sousuozi=document.querySelector(".sousuozi");
	search.onfocus=function(){
		sousuozi.style.display="none";
	}
	search.onblur=function(){
		sousuozi.style.display="block";
	}
	var neirongleft1=document.querySelectorAll(".zuo1");
	var neirongright1=document.querySelectorAll(".you1");
	Array.from(neirongright1).forEach(function (ele,val) {
		ele.onclick=function () {
			neirongmove();
		}
	});
	Array.from(neirongleft1).forEach(function (ele,val) {
		ele.onclick=function () {
			bu-=2;
			neirongmove();
		}
	});
	var trans=document.querySelectorAll(".daohangxlk");
	var tran=document.querySelectorAll(".nav-middle ul li")
	Array.from(trans).forEach(function (v,i) {
		tran[i].onmouseover=function () {
			v.style.height="247px";
			v.style.borderTop="1px solid #e0e0e0;"
		}
		tran[i].onmouseout=function () {
			v.style.height=0;
			v.style.borderTop="0 solid #e0e0e0;"
		}
	})
	var neirong1=document.querySelector(".big1");
	var ddd=document.querySelectorAll(".lunbo1 .quan");
	var ddd2=document.querySelectorAll(".lunbo2 .quan");
	var ddd3=document.querySelectorAll(".lunbo3 .quan");
	var ddd4=document.querySelectorAll(".lunbo4 .quan");

	var bu=1;
	var dodo=ddd[0];
	Array.from(ddd).forEach(function (ele,ind) {
		ele.onclick=function () {
			bu=ind;
			dodo.style.background="";
			ddd[bu].style.background="#ff6700";
			dodo=ddd[bu];
			neirong1.style.marginLeft=-292*bu+"px";
			bu++;
		}
	})
	function neirongmove(){
		if(bu==4){
			bu=0;
		}
		if(bu<0){
			bu=3;
		}
		dodo.style.background="";
		ddd[bu].style.background="#ff6700";
		dodo=ddd[bu];
		neirong1.style.marginLeft=-292*bu+"px";
		bu++;
	}


	var neirongleft2=document.querySelectorAll(".zuo2");
	var neirongright2=document.querySelectorAll(".you2");
	Array.from(neirongright2).forEach(function (ele,val) {
		ele.onclick=function () {
			neirongmove2();
		}
	});
	Array.from(neirongleft2).forEach(function (ele,val) {
		ele.onclick=function () {
			bu2-=2;
			neirongmove2();
		}
	});
	var neirong2=document.querySelector(".big2");
	var bu2=2;
	var dodo2=ddd2[1];
	Array.from(ddd2).forEach(function (ele,ind) {
		ele.onclick=function () {
			bu2=ind;
			dodo2.style.background="";
			ddd2[bu2].style.background="#ff6700";
			dodo2=ddd2[bu2];
			neirong2.style.marginLeft=-292*bu2+"px";
			bu2++;
		}
	})
	function neirongmove2(){
		if(bu2==4){
			bu2=0;
		}
		if(bu2<0){
			bu2=3;
		}
		dodo2.style.background="";
		ddd2[bu2].style.background="#ff6700";
		dodo2=ddd2[bu2];
		neirong2.style.marginLeft=-292*bu2+"px";
		bu2++;
	}


	var neirongleft3=document.querySelectorAll(".zuo3");
	var neirongright3=document.querySelectorAll(".you3");
	Array.from(neirongright3).forEach(function (ele,val) {
		ele.onclick=function () {
			neirongmove3();
		}
	});
	Array.from(neirongleft3).forEach(function (ele,val) {
		ele.onclick=function () {
			bu3-=2;
			neirongmove3();
		}
	});
	var neirong3=document.querySelector(".big3");
	var bu3=3;
	var dodo3=ddd3[2];
	Array.from(ddd3).forEach(function (ele,ind) {
		ele.onclick=function () {
			bu3=ind;
			dodo3.style.background="";
			ddd3[bu3].style.background="#ff6700";
			dodo3=ddd3[bu3];
			neirong3.style.marginLeft=-292*bu3+"px";
			bu3++;
		}
	})
	function neirongmove3(){
		if(bu3==4){
			bu3=0;
		}
		if(bu3<0){
			bu3=3;
		}
		dodo3.style.background="";
		ddd3[bu3].style.background="#ff6700";
		dodo3=ddd3[bu3];
		neirong3.style.marginLeft=-292*bu3+"px";
		bu3++;
	}


	var neirongleft4=document.querySelectorAll(".zuo4");
	var neirongright4=document.querySelectorAll(".you4");
	Array.from(neirongright4).forEach(function (ele,val) {
		ele.onclick=function () {
			neirongmove4();
		}
	});
	Array.from(ddd4).forEach(function (ele,ind) {
		ele.onclick=function () {
			bu4=ind;
			dodo4.style.background="";
			ddd4[bu4].style.background="#ff6700";
			dodo4=ddd4[bu4];
			neirong4.style.marginLeft=-292*bu4+"px";
			bu4++;
		}
	})
	Array.from(neirongleft4).forEach(function (ele,val) {
		ele.onclick=function () {
			bu4-=2;
			neirongmove4();
		}
	});
	var neirong4=document.querySelector(".big4");
	var bu4=4;
	var dodo4=ddd4[3];
	function neirongmove4(){
		if(bu4==4){
			bu4=0;
		}
		if(bu4<0){
			bu4=3;
		}
		dodo4.style.background="";
		ddd4[bu4].style.background="#ff6700";
		dodo4=ddd4[bu4];
		neirong4.style.marginLeft=-292*bu4+"px";
		bu4++;
	}

	function dong() {
		num5++;
		if(num5==2){
			num5=0;
		}
		danpins.style.marginLeft=-1226*num5+"px";
		if(num5==0){
			youyou.style.color="#999";
			zuozuo.style.color="#ccc"
		}
		if(num5==1){
			zuozuo.style.color="#999";
			youyou.style.color="#ccc"
		}
	}
	var ting=setInterval(dong,5000);
	zuoyou.onmouseover=function () {
		clearInterval(ting);
	};
	zuoyou.onmouseout=function () {
		ting=setInterval(dong,5000);
	};
	zuozuo.onclick=function () {
		danpins.style.marginLeft=0;
		zuozuo.style.color="#ccc";
		youyou.style.color="#999";

	};
	youyou.onclick=function () {
		danpins.style.marginLeft=-1226+"px";
		zuozuo.style.color="#999";
		youyou.style.color="#ccc";
	};
	function dong1() {
		num6++;
		if(num6==2){
			num6=0;
		}
		danpins1.style.marginLeft=-1226*num6+"px";
		if(num6==0){
			youyou1.style.color="#999";
			zuozuo1.style.color="#ccc"
		}
		if(num6==1){
			zuozuo1.style.color="#999";
			youyou1.style.color="#ccc";
		}
	}
	zuozuo1.onclick=function () {
		danpins1.style.marginLeft=0;
		zuozuo1.style.color="#ccc";
		youyou1.style.color="#999";

	};
	youyou1.onclick=function () {
		danpins1.style.marginLeft=-1226+"px";
		zuozuo1.style.color="#999";
		youyou1.style.color="#ccc";
	};
	//setInterval(dong1,1000);
	Array.from(dians).forEach(function (ele,index) {
		ele.onmouseover=function () {
			num=index;
			for(var i=0;i<dians.length;i++){
				dians[i].style.background="";
				tupians[i].style.zIndex=1;
				tupians[i].style.opacity=0;
			}
			this.style.background="#ccc";
			tupians[index].style.zIndex=2;
			tupians[index].style.opacity=1;

		}
	});
	dians[0].style.background="#ccc";
	var num=0;
	var r=setInterval(fn,5000);
	function fn() {
		num++;
		if(num==dians.length){
			num=0;
		}
		if(num==-1){
			num=dians.length-1;
		}
		for(var i=0;i<dians.length;i++){
			dians[i].style.background="";
			tupians[i].style.zIndex=1;
			tupians[i].style.opacity=0;
		}
		dians[num].style.background="#ccc";
		tupians[num].style.zIndex=2;
		tupians[num].style.opacity=1;
	}
	banner.onmouseover=function () {
		clearInterval(r);
	};
	banner.onmouseout=function () {
		r=setInterval(fn,5000)
	} ;
	jian1.onclick=function () {
		fn();
	};
	jian2.onclick=function () {
		num-=2;
		fn();
	};