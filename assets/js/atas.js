$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).topLink() > 100) {
			$('.topLink').fadeIn();
		} else {
			$('.topLink').fadeOut();
		}
	});
	
	$('.topLink').click(function(){
		$('html, body').animate({topLink : 0},800);
		return false;
	});
	
});
