$(function() {
	// do stuff
	$("#header").hide();
	$("#footer").hide();

	$("#content").addClass("home");

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

			case "results":
				resultsZones(xpos,ypos);
				break;

			case "altura":
				alturaZones(xpos,ypos);
				break;

			case "call":
				callZones(xpos,ypos);
				break;

			case "sms-one":
				smsZones(xpos,ypos,1);
				break;

			case "sms-two":
				smsZones(xpos,ypos,2);
				break;

			case "sms-three":
				smsZones(xpos,ypos,3);
				break;
		}
	});

	var homeZones = function(x,y) {
		if (x >= 34 && x <= 218) {	
			if (y >= 215 && y <= 387) {				
				$("#content").removeClass("home");
				$("#content").addClass("search");
			}
		}
	}

	var searchZones = function(x,y) {
		if (x >= 32 && x <= 121) {
			if (y >= 55 && y <= 114) {
				$("#content").removeClass("search");
				$("#content").addClass("home");
			}
		}

		if (y >= 127 && y <= 207) {
			$("#content").removeClass("search");
			$("#content").addClass("results");
		}
	}

	var resultsZones = function(x,y) {
		if (y >= 216 && y <= 374) {
			$("#content").removeClass("results");
			$("#content").addClass("altura");
			$("#header").show();
			$("#footer").show();
		} else if (y >= 55 && y <= 115) {
			if (x >= 30 && x <= 120) {
				$("#content").removeClass("results");
				$("#content").addClass("search");
			}
		}
	}

	var alturaZones = function(x,y) {
		if (y >= 55 && y <= 115) {
			if (x >= 30 && x <= 120) {
				$("#content").removeClass("results");
				$("#content").addClass("search");
			}
		}
		
		if (x >= 45 && x <= 95) {
			if (y >= 2071 && y <= 2115) {
				$("#content").removeClass("altura");
				$("#header").hide();
				$("#footer").hide();
				$("#content").addClass("call");
			} else if (y >= 2130 && y <= 2170) {
				$("#content").removeClass("altura");
				$("#header").hide();
				$("#footer").hide();
				$("#content").addClass("sms-one");
			}
		}
	}

	var callZones = function(x,y) {
		if (y >= 769) {
			$("#content").removeClass("call");
			$("#content").addClass("altura");
			$("#header").show();
			$("#footer").show();
		}
	}

	var smsZones = function(x,y,n) {
		switch (n) {			
			case (1):
				if (x >= 508 && x <= 628) {
					if (y >= 56 && y <= 112) {
						$("#content").removeClass("sms-one");
						$("#content").addClass("altura");
						$("#header").show();
						$("#footer").show();
					}
				} else {
					if (y >= 130) {						
						$("#content").removeClass("sms-one");
						$("#content").addClass("sms-two");
					}
				}
				break;

			case (2):
				if (x >= 508 && x <= 628) {
					if (y >= 56 && y <= 112) {
						$("#content").removeClass("sms-two");
						$("#content").addClass("altura");
						$("#header").show();
						$("#footer").show();
					}
				} else {
					if (y >= 130) {						
						$("#content").removeClass("sms-two");
						$("#content").addClass("sms-three");
					}
				}
				break;

			case (3):
				$("#content").removeClass("sms-three");
				$("#content").addClass("altura");
				$("#header").show();
				$("#footer").show();
		}
	}
});