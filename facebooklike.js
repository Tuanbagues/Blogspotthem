
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Facebook Like Box</title>
<meta content='width=device-width, initial-scale=1' name='viewport'>
<style>
body {
  background-color:transparent;
  margin:0;
  padding:0;
}
iframe{border:0}
</style>
<script>
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}
var pages = getQueryVariable("page");
</script>
</head>
<body>
<script>
document.write('<iframe src="https://www.facebook.com/v2.7/plugins/page.php?adapt_container_width=true&app_id=113869198637480&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FuN4_cXtJDGb.js%3Fversion%3D42%23cb%3Df19b772d4d20444%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff1ba7fe51c4d354%26relation%3Dparent.parent&container_width=300&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2F'+ pages +'&locale=en_US&sdk=joey&show_facepile=true&small_header=false" width="300" height="214" style="border:0;" allowfullscreen></iframe>');
</script>
</body>
</html>