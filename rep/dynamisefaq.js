$(document).ready(function() {
    $("p").hide();
    $("img").show();
    $("#RL").show();
    $("#derniereVisite").show();
    $("#logo").show();
    $("h2").hide();
    $(".dessousbanniere").hide();

    $("h1").click(function() {
        $(this).next().toggle();
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
window.addEventListener('scroll', function() {
    var paragraphs = document.querySelectorAll('p'); 
    var images = document.querySelectorAll('img'); 

    paragraphs.forEach(function(paragraph, index) {
        var rect = paragraph.getBoundingClientRect(); 

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            images[index].style.display = 'block'; 
        } else {
            images[index].style.display = 'none'; 
        }
    });
});