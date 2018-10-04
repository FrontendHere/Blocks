;(function(){
	$('.open-menu-i').click(function() {
		$(this).next('.menu-i').css('display', 'block');
	});
	$('.close-menu-i').click(function() {
		$(this).closest('.menu-i').css('display', 'none');
	});	
}());