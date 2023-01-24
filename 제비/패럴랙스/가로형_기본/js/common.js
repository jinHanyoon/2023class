$(document).ready(

  function() { 
    $(".scrollBox").niceScroll({
		cursorcolor:"#777",
		cursorwidth:5,
		scrollspeed:40,
		cursorborderradius:'0',
		mousescrollstep:40,
		cursoropacitymin:0,
		cursoropacitymax:1,
		background:"#c1c1c1",
		cursorborder:"none",
		autohidemode:false,
		boxzoom:false,
		smoothscroll:true,
		zindex:99999
	});
  }

);


$(function(){	

	// 메뉴부분
	$('.naviJs > li > a, .topBtn').click(function(){
	    var posX = $($(this).attr('href')).position().left;
		$('.scrollBox').stop().animate({'scrollLeft':posX},1200, 'easeInOutExpo');
		return false;
	})

	// 스크롤 이벤트
	$('.scrollBox').scroll(function(){ 
		var scrollLeft = $('.scrollBox').scrollLeft() ; 
		$('.posNum').text(scrollLeft); // 스크롤값 
 

		//scene01 애니메이션
		$('#scene01 .obj01').stop().animate({'margin-left':-scrollLeft*0.5}, 200);
		$('#scene01 .obj02').stop().animate({'margin-left':scrollLeft*0.5}, 200);


		// 메뉴 활성화
		$('.wrap > div').each(function(i){
			var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
			var firstX = $('.wrap > div:first').position().left;
			var posX = $(this).position().left;
			if(scrollLeft <= firstX - fastNum){
				$('.naviJs').each(function(){
					$('li', this).removeClass('on').eq(0).addClass('on');	
				})
			}else if(scrollLeft >= posX - fastNum){
				$('.naviJs').each(function(){
					$('li', this).removeClass('on').eq(i).addClass('on');	
				})
			}
		})		
		
		if(deltaYnum <0){
			console.log('up');
		}else{
			console.log('down');
		}
		
	});







});