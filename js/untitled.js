function getAlertStatus(){
	var $routeId;
	var $baseUrl = 'http://www.transitchicago.com/api/1.0/routes.aspx?routeid=';
	var $URL;
	$('.route').click(function(){
		$('.route').removeClass("active");
		$(".collapse").collapse('toggle');
		$routeId = $(this).data("value");
		$(this).toggleClass("active");
		var $URL = $baseUrl + $routeId;
		var test = new XMLHttpRequest();
		test.open("GET", $URL, false);
		test.send();
		xmldoc = test.responseXML;
		$('.status').html("<div class='status'><h1>" + xmldoc.getElementsByTagName("RouteInfo")[0].childNodes['0'].textContent + "</h1><h3>" + xmldoc.getElementsByTagName("RouteStatus")[0].childNodes['0'].textContent + "</h3></div>");
	});
	$('.bus').click(function(){
		$('.route').removeClass("active");
		$(".collapse").collapse('toggle');		
		$routeId = $(this).data("value");
		var $URL = $baseUrl + $routeId;
		var test = new XMLHttpRequest();
		test.open("GET", $URL, false);
		test.send();
		xmldoc = test.responseXML;
		$('.status').html("<div class='status'><h1>" + xmldoc.getElementsByTagName("RouteInfo")[0].childNodes['0'].textContent + "</h1><h3>" + xmldoc.getElementsByTagName("RouteStatus")[0].childNodes['0'].textContent + "</h3></div>");
	});
 


};