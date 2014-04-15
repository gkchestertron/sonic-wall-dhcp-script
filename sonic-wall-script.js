//use the follwing snippet to inject this script into a page
/*
var jq = document.createElement('script');
jq.src = "https://raw.githubusercontent.com/gkchestertron/sonic-wall-dhcp-script/master/sonic-wall-script.js";
document.getElementsByTagName('head')[0].appendChild(jq);
*/

if (!jQuery) {
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
	document.getElementsByTagName('head')[0].appendChild(jq);
}