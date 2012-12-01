$(function() {
	// do stuff
	$("#header").hide();
	$("#footer").hide();

	$("#content").addClass("home");

	var theScroll;
	function scroll() {
	    theScroll = new iScroll('wrapper');
	}
	document.addEventListener('DOMContentLoaded', scroll, false);

	$("#phone-body").click(function(e) {
		var xpos = e.pageX - $("#phone-body").offset().left;
		var ypos = e.pageY - $("#phone-body").offset().top;
		console.log(xpos + ", " + ypos);

		var page = $("#content").attr("class");

		switch (page) {
			case "home":
				homeZones(xpos,ypos);
				break;

			case "search":
				searchZones(xpos,ypos);
				break;

			case "browse":
				browseZones(xpos,ypos);
				break;

			case "results":
				resultsZones(xpos,ypos);
				break;

			case "altura":
				alturaZones(xpos,ypos);
				break;

			case "sms":
				smsZones(xpos,ypos);
				break;
		}
	});

	var homeZones = function(x,y) {
		// do stuff
		if (x >= 34 && x <= 218) {	
			if (y >= 215 && y <= 387) {				
				$("#content").removeClass("home");
				$("#content").addClass("search");
			}
		}
	}

	var searchZones = function(x,y) {
		// do stuff
	}

	var browseZones = function(x,y) {
		// do stuff
	}

	var resultsZones = function(x,y) {
		// do stuff
	}

	var alturaZones = function(x,y) {
		// do stuff
	}

	var smsZones = function(x,y) {
		// do stuff
	}
});