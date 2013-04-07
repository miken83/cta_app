function getAlertStatus(){
	var $routeId;
	var $baseUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fwww.transitchicago.com%2Fapi%2F1.0%2Froutes.aspx%3Frouteid%3D";
	var $URL;
	$('.route').click(function(){
		$('.route').removeClass("active");
		$(".collapse").collapse('toggle');
		$routeId = $(this).data("value");
		$(this).toggleClass("active");
		var $URL = $baseUrl + $routeId + "%22&format=json&diagnostics=true";
		$.getJSON($URL, function (data) {
			$(".status").html("<div class='status' id=" + $routeId + "><h1>" + data.query.results.CTARoutes.RouteInfo.Route + "</h1><h3>" + data.query.results.CTARoutes.RouteInfo.RouteStatus + "</h3></div>");
		});
	});
	$('.bus').click(function(){
		$('.route').removeClass("active");
		$(".collapse").collapse('toggle');		
		$routeId = $(this).data("value");
		var $URL = $baseUrl + $routeId + "%22&format=json&diagnostics=true";
		$.getJSON($URL, function (data) {
			$(".status").html("<div class='status'><h1>" + data.query.results.CTARoutes.RouteInfo.Route + "</h1><h3>" + data.query.results.CTARoutes.RouteInfo.RouteStatus + "</h3></div>");
		});
	});
};