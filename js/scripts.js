var LIULISHUO=LIULISHUO || {};
LIULISHUO.resizeManger = function(){	
	function resizeGrid(){		
		$(window).resize(function(){
			t.doresize();
		})		
	}
	var t = this,windowW;
	t.scaleClass="scale",
	t.defaultWidth = 640,
	t.init=function(){		
		$("."+t.scaleClass).each(function(){
			var marginT =  $(this).css("margin-top").replace("px",""),
				paddingT = $(this).css("padding-top").replace("px","");
				paddingB = $(this).css("padding-bottom").replace("px","");
			$(this).attr("origMt",marginT);
			$(this).attr("origPt",paddingT);
			$(this).attr("origPb",paddingB);
		});	
		t.doresize();
		resizeGrid();
	},
	t.doresize=function(){
		windowW = $(window).width();
		scaleRatio = windowW/t.defaultWidth;
		$("."+t.scaleClass).each(function(){
			$(this).attr("origMt") && $(this).css("margin-top",Math.round($(this).attr("origMt")*scaleRatio));
			$(this).attr("origPt") && $(this).css("padding-top",Math.round($(this).attr("origPt")*scaleRatio));
			$(this).attr("origPb") && $(this).css("padding-bottom",Math.round($(this).attr("origPb")*scaleRatio));
		})	
	}
}
LIULISHUO.scrollHandle=function(){
	var t = this;
	function scrollE(){
		$(window).scroll(function(){
			t.doScroll();
		})
	}
	t.init=function(){
		t.doScroll();
		scrollE();
	}
	t.doScroll=function(){
		var wt = $(window).height(),st=$(window).scrollTop(),bt = $(".ui-home-bottom").offset().top;
		Math.round(wt + st)  >= bt && $(".ui-home-bottom").addClass("starttransform").animate({opacity:1,visibility:"visible"},400)
	}	
}
LIULISHUO.template=function(){
	var t=this;
	t.init=function(){
		var r = new LIULISHUO.resizeManger();
		r.init();
		var s = new LIULISHUO.scrollHandle();
		s.init();
	}
}
$(function(){
	$("a.ui-home-button")[0].addEventListener("touchstart",function(){$(this).addClass("select")},false);
	$("a.ui-home-button")[0].addEventListener("touchend",function(){$(this).removeClass("select")},false);
	var tlp = new LIULISHUO.template();
	tlp.init();
	$(".anitemateMoon").animate({opacity:1,visibility:"visible"},1000,'ease-in-out',function(){
		$(this).addClass("starttransform");
	});
})