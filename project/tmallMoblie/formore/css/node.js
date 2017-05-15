// 当页面加载后
window.onload=function () {
//常量const
	const designWidth=750;
	const fontSize=100;
	function resizeFont(){
		//变量var
		var CW=document.documentElement.clientWidth;
		var radio=CW/designWidth;
		var newFontSize=fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize + "px";

	}
	//执行resizeFont
	resizeFont();
	//窗口大小改变是执行resizeFont
	window.onresize=resizeFont;
}