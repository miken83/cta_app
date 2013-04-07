function getAlertStatus(){
	var $routeId;
	var $test = 1;
	var $baseUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fwww.transitchicago.com%2Fapi%2F1.0%2Froutes.aspx%3Frouteid%3D";
	var $baseUrl2 = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fwww.transitchicago.com%2Fapi%2F1.0%2Falerts.aspx%3Frouteid%3D";
	$('.route').click(function(){
		$(".message").empty();
		$(".status").empty();
		$('.route').removeClass("active");
		$(".collapse").collapse('toggle');
		$routeId = $(this).data("value");
		$(this).toggleClass("active");
		var $URL = $baseUrl + $routeId + "%22&format=json&diagnostics=true";
		var $URL2 = $baseUrl2 + $routeId + "%22&format=json&diagnostics=true";
		$.getJSON($URL, function (data) {
			$(".status").append("<style> .status{color: #" + data.query.results.CTARoutes.RouteInfo.RouteColorCode + "}</style><div class='status'>" + data.query.results.CTARoutes.RouteInfo.Route + "<h3>" + data.query.results.CTARoutes.RouteInfo.RouteStatus + "</h3></div>");
		});
		$.getJSON($URL2, function (data2) {
			var $error = data2.query.results.CTAAlerts.ErrorCode;
			var $array = data2.query.results.CTAAlerts.Alert;
			if($error != 50) {
				if($.isArray($array)){
					var $i = 0
					var $length = $array.length;
					while ($i < $length){
						$(".message").append("<h4>" + data2.query.results.CTAAlerts.Alert[$i].Headline + "</h4> <div class=" + $i + ">" + data2.query.results.CTAAlerts.Alert[$i].FullDescription + "</div><br>");
						$i++;
					};
					$image = $(".message img").attr('src');
					$newimage = "http://www.transitchicago.com" + $image;
					$(".message img").attr('src', $newimage);
				}
				else {
					$(".message").append("<h4>" + data2.query.results.CTAAlerts.Alert.Headline + "</h4> <div>" + data2.query.results.CTAAlerts.Alert.FullDescription + "</div><br>");
					$image = $(".message img").attr('src');
					$newimage = "http://www.transitchicago.com" + $image;
					$(".message img").attr('src', $newimage);
				}
			};
		});
	});
	$('.bus').click(function(){
		$(".message").empty();
		$(".status").empty();
		$('.route').removeClass("active");
		$(".collapse").collapse('toggle');		
		$routeId = $(this).data("value");
		var $URL = $baseUrl + $routeId + "%22&format=json&diagnostics=true";
		var $URL2 = $baseUrl2 + $routeId + "%22&format=json&diagnostics=true";
		$.getJSON($URL, function (data) {
			$(".status").append("<style> .status{color: #" + data.query.results.CTARoutes.RouteInfo.RouteColorCode + "}</style><div class='status'><h1>" + data.query.results.CTARoutes.RouteInfo.
				ServiceId + " " + data.query.results.CTARoutes.RouteInfo.Route + "</h1><h3>" + data.query.results.CTARoutes.RouteInfo.RouteStatus + "</h3></div>");
		});
		$.getJSON($URL2, function (data2) {
			var $error = data2.query.results.CTAAlerts.ErrorCode;
			var $array = data2.query.results.CTAAlerts.Alert;
			if($error != 50) {
				if($.isArray($array)){
					var $i = 0
					var $length = $array.length;
					while ($i < $length){
						$(".message").append("<h4>" + data2.query.results.CTAAlerts.Alert[$i].Headline + "</h4> <div class=" + $i + ">" + data2.query.results.CTAAlerts.Alert[$i].FullDescription + "</div><br>");
						$i++;
					};
						$image = $(".message img").attr('src');
						$newimage = "http://www.transitchicago.com" + $image;
						$(".message img").attr('src', $newimage);
				}
				else {
					$(".message").append("<h4>" + data2.query.results.CTAAlerts.Alert.Headline + "</h4> <div>" + data2.query.results.CTAAlerts.Alert.FullDescription + "</div><br>");
					$image = $(".message img").attr('src');
					$newimage = "http://www.transitchicago.com" + $image;
					$(".message img").attr('src', $newimage);
				}
			};
		});
	});
};