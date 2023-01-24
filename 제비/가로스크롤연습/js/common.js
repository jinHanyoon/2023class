$(document).ready(

)
$(function(){
	// var $device = $('.scrollBox')
	// var $deviceOST=$device.offset()
var scroll_data = 100//스크롤 데이터양을 조절 가능하게 만듬

	$(window).scroll(function(){
		var scrollLeft = $(window).scrollLeft();
		console.log(scrollLeft)
		$('.posNum').text(scrollLeft); // 스크롤값 

	


})
})
