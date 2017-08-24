var navBar = $('.navbar');
var socialInteract = $('.social-interact');
var allSocial = $('.social');

var markerThere = 0;
var onSocial = 0;
var faded = 0;

navBar.find('li').removeClass('active');

allSocial.on("mouseleave", "a", function() {
	onSocial = 0;



});

navBar.on("mouseenter" , "a" , function(){

	onSocial = 1;

	if(faded === 1) {

			faded = 0;

			$( ".marker" ).fadeIn( "fast", function() {
    // Animation complete.
  });

	}
	if(markerThere === 0) {
		navBar.append('<li class="marker"></li>');
		markerThere = 1;
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
      marker.addClass("anim");
    },200);

});

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#main').offset().top + $('#main').height();
var lastScrollTop = 0;
var delta = 5;

// on scroll,
$(window).on('scroll',function(){

	if(onSocial === 0) {

		$( ".marker" ).fadeOut( "fast", function() {
    // Animation complete.
		faded = 1;
  });
	navBar.find('li').removeClass('active');

	}

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.header').addClass('past-main');
		$('.social').addClass('past-main');
		$('.social-interact').addClass('past-main');


		var st = $(this).scrollTop();
		$(window).scroll(function(event){
       var st = $(this).scrollTop();

       if(Math.abs(lastScrollTop - st) <= delta)
          return;

       if (st > lastScrollTop){
           // downscroll code
           console.log('scroll down');
					 $('.header').addClass('hide');
       } else {
          // upscroll code
          console.log('scroll up');
					$('.header').removeClass('hide');

       }
       lastScrollTop = st;
    });

    } else {
        $('.header').removeClass('past-main');
		$('.social').removeClass('past-main');
		$('.social-interact').removeClass('past-main');



   }

});


$('#text-area-content').on( 'change keyup keydown paste cut', 'textarea', function (){
    $(this).height(0).height(this.scrollHeight);
}).find( 'textarea' ).change();
