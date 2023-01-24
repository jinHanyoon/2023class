$(document).ready(
 function() { 
    $(".scrollBox").niceScroll({
		cursorcolor:"#777",
		cursorwidth:1,
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
	
	
      });
     $(function(){
		var $device = $('.scrollBox')
		var $deviceOST=$device.offset()

		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			console.log(scrollTop)
			$('.posNum').text(scrollTop); // 스크롤값 

			if($(this).scrollTop() > $deviceOST){
				console.log('작다')
			}
		})
	
	
	})


