//use the follwing snippet to inject this script into a page
/*
var jq = document.createElement('script');
jq.src = "https://raw.githubusercontent.com/gkchestertron/sonic-wall-dhcp-script/master/sonic-wall-script.js";
document.getElementsByTagName('head')[0].appendChild(jq);
*/

if (!window.jQuery) {
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
	document.getElementsByTagName('head')[0].appendChild(jq);
}

sonicFill = {
	fill: function (unique, base) {
		base = base || '10.64.60.';
		var fills = this.parseAddress(unique),
			$input0 = $('[name="dhcp_static_name"]'),
			$input1 = $('[name="dhcp_static_ip"]'),
			$input2 = $('[name="dhcp_static_hw"]')
			$input3 = $('[name="dhcpGateway"]'),
			$input4 = $('[name="dhcpSubnet"]')
			$button = $('[name="ok"]');

		$input0.val(fills[1]);
		$input1.val(base + fills[0]);
		$input2.val(fills[2]);
		$input3.val('10.64.63.251');
		$input4.val('255.255.224.0');
		$button.click();
	}, 
	parseAddress: function (unique) {
		unique = unique.replace(/\s+/g,'');
		unique = unique.replace(/INPTR/g,',');
		unique = unique.replace(/;/g,',');
		return unique.split(',');
	}
}