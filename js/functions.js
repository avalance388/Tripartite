$(document).ready(function(){
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		$('.logo').css({
			'transform' : 'translate(0px, '+ wScroll /2+'%)'
		})

		$('.back-bg').css({
			'transform' : 'translate(0px, '+ wScroll /4+'%)'
		})

		$('.fore-bg').css({
			'transform' : 'translate(0px, -'+ wScroll /10+'%)'
		})
	})
})