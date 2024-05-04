$(document).ready(function() {
    $("p").show();
    $("img").show();
    $("#RL").show();
    $("#derniereVisite").show();
    
    $("h1").click(function() {
        $(this).next().toggle(); 
        $("#myImage").toggle();
    });
    
    $("h1").css("cursor", "pointer");

    
});
document.getElementById("accueil").addEventListener("click", function() {
	window.location.href = "rocketleague.html"
});
document.getElementById("actualites").addEventListener("click", function() {
	window.location.href = "rocketleagueactualites.html"
});
document.getElementById("nousrecommandons").addEventListener("click", function() {
	window.location.href = "rocketleaguenousrecommandons.html"
});
document.getElementById("retrouveznous").addEventListener("click", function() {
	window.location.href = "rocketleagueretrouveznous.html"
});
document.getElementById("faq").addEventListener("click", function() {
	window.location.href = "rocketleaguefaq.html"
});
document.getElementById("ensavoirplus").addEventListener("click", function() {
	window.location.href = "rocketleaguefaq.html"
});
window.addEventListener("scroll", function() {
    var image = document.querySelector(".fixed-image");
    var scrollPosition = window.scrollY;
    image.style.top = (50 + scrollPosition) + "px";
});