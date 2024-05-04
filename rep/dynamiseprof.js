$( document ).ready(function() {
	$("p").hide();
	$("#modeEmploi").show();
	$("#derniereVisite").show();
	$("h1").click(function() {$(this).next().toggle();});
	$("h1").css("cursor", "pointer");
});
