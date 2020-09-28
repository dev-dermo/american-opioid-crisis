// A $( document ).ready() block.
$( document ).ready(function() {

	var srcData = {
		total:  20101,
		planeCapacity: 150 //Airbus A320
	}
	srcData.daily = Math.round(srcData.total / 365);
	srcData.planeFrequency = Math.round(srcData.planeCapacity / srcData.daily);

	var planeHtml = '<i class="fa fa-plane" aria-hidden="true"></i>';
	var monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	var today = new Date();
	var year = today.getFullYear();
	var monthIndex = today.getMonth();
	var date = today.getDate();
	var oneDay = 1000 * 60 * 60 * 24;
	var start = new Date(year, 0, 0);
	var diff = today - start;
	var dayOfYear = Math.floor(diff / oneDay);
	var planesThisYear = Math.round(dayOfYear / srcData.planeFrequency);

	/* Animate Plane */
	for(var i=0;i<100;i++) {
		$( ".line .fa-plane" ).animate({
			left: "+=100%"
			}, 45000, function() {
		});

		$( ".line .fa-plane" ).animate({
			left: "-=100%"
			}, 0, function() {
		});
	}
	/* END Animate Plane */

	var elPlaneFrequency = document.getElementById('plane-frequency');
	elPlaneFrequency.textContent = srcData.planeFrequency;

	var elDaily = document.getElementById('daily');
	elDaily.textContent = srcData.daily;

	var elPlanesThisYear = document.getElementById('planes-this-year');
	elPlanesThisYear.textContent = planesThisYear;

	var elDeathsThisYear = document.getElementById('deaths-this-year');
	elDeathsThisYear.textContent = srcData.daily * dayOfYear;

	var elMoreWillDie = document.getElementById('more-will-die');
	elMoreWillDie.textContent = srcData.total - (srcData.daily * dayOfYear);

	var elThisYear = document.getElementById('this-year');
	elThisYear.textContent = year;

	var elCopyYear = document.getElementById('copyright-year');
	elCopyYear.textContent = year;

	var elPlaneIcons = document.getElementById('plane-icons');
	for (var i=planesThisYear;i>0;i--) {
		var node = document.createElement('i');
		node.setAttribute('class', 'fa fa-plane');
		node.setAttribute('aria-hidden', 'true');
		elPlaneIcons.appendChild(node);
	}

	var elNextPlane = document.getElementById('next-plane');
	elNextPlane.textContent = (planesThisYear + 1);

});