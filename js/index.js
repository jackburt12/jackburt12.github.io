var navBar = $('.navbar');
var main = $('.main');

var markerThere = 0;

navBar.find('li').removeClass('active');



navBar.on("click" , "a" , function(){
	
	if(markerThere === 0) {
		navBar.append('<li class="marker"></li>');
		markerThere = 1;
	}
	

	if(/*navBar.find('.marker').parent().attr('id') == 'social1'*/true) {
		main.append('<a href="https://twitter.com/jackburtdev" class="twitter-follow-button" data-show-count="false">Follow @jackburtdev</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');
	}
	
    var navTap = $(this).closest('.navbar');
    var mrkWidth = $(this).parent('li').width();
    var marker = navTap.find('.marker');
    var nx = $(".navbar").offset();
    var lx = $(this).parent('li').offset();
    var left = lx.left - nx.left;
    
   navBar.find('li').removeClass('active');
  
   $(this).parent().addClass('active');
  
    marker.removeClass("anim").css({ "width" : mrkWidth , "left" : left });
    setTimeout(function(){
      marker.addClass("anim")
    },200);
	
	

});

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.header').addClass('past-main');
		$('.social').addClass('past-main');

    } else {
        $('.header').removeClass('past-main');
		$('.social').removeClass('past-main');

		
   }

});



