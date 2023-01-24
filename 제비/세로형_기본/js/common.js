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
	    var posY = $($(this).attr('href')).position().top;
	    var gnbH = $('.gnb').innerHeight();
		$('.scrollBox').stop().animate({'scrollTop':posY - gnbH},1200, 'easeInOutExpo');
		return false;
	})

	// 스크롤 이벤트
	$('.scrollBox').scroll(function(){ 
		var scrollTop = $('.scrollBox').scrollTop() ; 
		console.log(scrollTop)
		$('.posNum').text(scrollTop); // 스크롤값 

		//scene01 애니메이션
		$('#scene01 .obj01').stop().animate({'margin-top':-scrollTop*0.1}, 200);
		$('#scene01 .obj02').stop().animate({'margin-left':300 - scrollTop*0.5}, 200); // obj02의 margin-left:300px;
		$('#scene01 .obj03').stop().animate({'margin-left':-500 + scrollTop*0.5,'margin-top':scrollTop*0.3}, 200);// obj03의 margin-left:-500px;
		

		//scene02 애니메이션
		if(scrollTop <= 1000){
			$('#scene02 .obj01').stop().animate({'margin-top':-(scrollTop-1000)*0.5}, 200);
			$('#scene02 .obj02').stop().animate({'margin-top':(scrollTop-1000)*0.3}, 200);
		}
		

		// 메뉴 활성화
		$('.wrap > div').each(function(i){
			var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
			var firstY = $('.wrap > div:first').position().top;
			var posY = $(this).position().top;
			if(scrollTop <= firstY - fastNum){
				$('.naviJs').each(function(){
					$('li', this).removeClass('on').eq(0).addClass('on');	
				})
			}else if(scrollTop >= posY - fastNum){
				$('.naviJs').each(function(){
					$('li', this).removeClass('on').eq(i).addClass('on');	
				})
			}
		})		

		// mouse wheel
		if(deltaYnum <0){
			console.log('up');
		}else{

			console.log('down');
		}
	});



});