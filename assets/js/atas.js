<<<<<<< HEAD
$(window).scroll(function(){if($(this).scrollTop()>50){$('.scrolltop:hidden').stop(true,true).fadeIn()}else{$('.scrolltop').stop(true,true).fadeOut()}});$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".navigation").offset().top},"1000");return false})})
=======
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.topLink').fadeIn();
		} else {
			$('.topLink').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.topLink').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
>>>>>>> 4fb1cfe2d8269effab8b417304cc787f673aae35
