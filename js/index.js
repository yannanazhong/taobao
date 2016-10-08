$(document).ready(function() {
	var dis = 0,num = 0,timer = null,numJ = 0;//筛选角标索引号
	var tdis = 0,tnum = 0,tnumJ = 0;
/*--------淘宝搜索框固定定位----------*/
	$(window).scroll(function(event) {
		snum = $(window).scrollTop();
		if(snum>181){
			$('.search-bd-l').css({position:'fixed',top:0,zIndex:1000})
		}else{
			$('.search-bd-l').css('position','static');
		}
	});

/*----------上banner效果----------*/
	//角标控制
	$('.banner ol li').click(function(event) {
		num = $(this).index();
		numJ = $(this).index();
		num = numJ;
		$('.banner ol li').eq(numJ).addClass('current').siblings().removeClass('current');
		dis = -num*520;
		$('.banner ul').animate({left:dis},800);
		// console.log(num+'---'+numJ);

	});
	//左右按钮控制
	$('.banner .right').click(function(event) {
		// num++;
		// if(num>4){
		// 	num=0;
		// }
		// dis = -num*520;
		// $('.banner ul').animate({left:dis},500);
		// $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
		autoPlay();
	});
	$('.banner .left').click(function(event) {
		num--;
		if(num<0){
			num=4;
			$('.banner ul').css('left','-2080px');
		}
		numJ--;
		if(numJ<0){numJ=4;}
		dis = -num*520;
		$('.banner ul').animate({left:dis},800);
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
	});
	// 自动轮播
	timer = setInterval(autoPlay, 3000);
	function autoPlay(){
		num++;
		if(num>5){
			num=1;
			$('.banner ul').css('left','0');
		}
		numJ++;
		if(numJ>4){
			numJ=0;
		}
		dis = -num*520;
		$('.banner ul').animate({left:dis},800);
		$('.banner ol li').eq(numJ).addClass('current').siblings().removeClass('current');
	}
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay, 3000)
	});

/*----------下banner效果----------*/
	// 角标效果
	$('.banner-tmall ol li').click(function(event) {
			tnum = $(this).index();
			tnumJ = $(this).index();
			tnum = tnumJ;
			$('.banner-tmall ol li').eq(tnumJ).addClass('current').siblings().removeClass('current');
			tdis = -tnum*130;
			$('.banner-tmall .tmall').animate({left:tdis},500);
	});
	// 左右按钮控制
	// 右按钮
	$('.banner-tmall .right').click(function(event) {
		tnum++;
		if(tnum>4){tnum=0}
		tdis = -tnum*130;
		$('.banner-tmall .tmall').animate({left:tdis},500);
		$('.banner-tmall ol li').eq(tnum).addClass('current').siblings().removeClass('current');
	});
	// 左按钮
	$('.banner-tmall .left').click(function(event) {
		tnum--;
		if(tnum<0){
			tnum=4;
			$('.banner-tmall .tmall').animate({left:'-520px'},500);
		}
		tnumJ--;
		if(tnumJ<0){tnumJ=4;}
		tdis = -tnum*130;
		$('.banner-tmall .tmall').animate({left:tdis},500);
		$('.banner-tmall ol li').eq(tnum).addClass('current').siblings().removeClass('current');
	});
/*----------tab选项卡效果----------*/
	$('.tab-nav li').mouseover(function(event) {
		var T = $(this);
		clearTimeout(timer);
		timer = setTimeout(fun, 300);
		function fun(){
			T.addClass('current').siblings().removeClass();
			$('.tab-txt ul').eq(T.index()).addClass('current').siblings().removeClass();
		}
	});
	$('.tab-nav li').mouseout(function(event) {
		clearTimeout(timer);
	});
	/*---------新闻轮播----------*/
	var index = 0;
	var leg = $('.headline-right li').length - 1;
	htimer = setInterval(function(){
		index = (index == leg)?0:index+1;
		$('.headline-right li').hide().eq(index).show();
	},3000);
});
