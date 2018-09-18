Barba.Dispatcher.on('transitionCompleted', function() {

	window.setTimeout(function() {

			AOS.init();
			console.log("test");
		},
		1
	);
});
