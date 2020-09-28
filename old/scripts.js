// A $( document ).ready() block.
$( document ).ready(function() {

	var today = new Date();

	console.log(today.getDay());

	for(var i=0;i<100;i++) {
		$( ".fa-plane" ).animate({
			left: "+=100%"
			}, 20000, function() {
		});

		$( ".fa-plane" ).animate({
			left: "-=100%"
			}, 0, function() {
		});
	}

});