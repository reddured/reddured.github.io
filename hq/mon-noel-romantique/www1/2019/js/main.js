jQuery(function($) {

    //Init FatNav
    $.fatNav();

    //Initiat WOW JS
    //new WOW().init();
    
    // one page navigation 
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    });

    // Countdown
	$('#counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
});
