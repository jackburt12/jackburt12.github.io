var navBar = $('.navbar');
navBar.append('<li class="marker"></li>');

navBar.on("click" , "a" , function(){
  
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