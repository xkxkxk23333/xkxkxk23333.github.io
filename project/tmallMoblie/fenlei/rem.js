// /页面加载之后
window.onload=function () {
// 常量 const
	const designWidh=750;
	const fontSize=100;
	function resizeFont(){
		// 变量 var
		var CW=document.documentElement.clientWidth;
		var radio = CW/designWidh;
		var newFontSize= fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize +"px";

	}
// 执行resizeFont
resizeFont();
// 窗口大小改变时执行 resizeFont
window.onresize= resizeFont;

}
// 1移动端视口问题
// 375 x 667
// 750 x 1334
// 1>布局视口
// 2>视觉视 375 x 667逻辑像素/css像素（软件达到的）
// 将2个实际的物理尺寸当成1个逻辑像素来处理


// 设计师拿到的设计稿750 x 1334物理像素（硬件能过达到的）


// 一般讲逻辑像素与物理像素的比叫dpr
// iphone的dpr 2

// 3>理想视口
// 一般情况下讲屏幕大小作为布局大小最合适，我们需要提前设置width=device-width
//  移动端布局方式 1百分比 2rem 3 flex
// 传统的布局方式，基于盒子模型，依赖display+float+position
// flex布局以后 子元素身上的float clear vertical-align 将会失效


// display:flex;新版本
// display:-webkit-flex;旧版本
// flex-wrap:nowrap;默认不换行 
// flex-wrap:wrap-reverse;第一行在最下方

// 定义主轴的方向
// flex-direction:row/row-reverse; row从左到右  column从上到下 row-reverse从右到左  column-reverse从下到上

// 主轴的对齐方式
// justify-content:flex-start;flex-star从左到右  flex-end从右到左  center居中对齐  space-between 2端对齐
// 				space-around 间隔相等
