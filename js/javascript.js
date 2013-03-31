//gets value from button press and returns the cta alert status using the cta customer alerts API
function getStatus(route) {
	var url= "http://www.transitchicago.com/api/1.0/routes.aspx?routeid=" + route;
	var test = new XMLHttpRequest();
	test.open("GET", url, false);
	test.send();
	xmldoc = test.responseXML;
	document.getElementById("status").innerHTML="<h3>Current Status</h3>" + xmldoc.getElementsByTagName("RouteStatus")[0].childNodes['0'].textContent;
	return false;
}
