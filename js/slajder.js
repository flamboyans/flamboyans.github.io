var brojac = 0;
slajder();

function slajder() {
    var i;
    var slajdovi = document.getElementsByClassName("slajdovi");
    var kruzici = document.getElementsByClassName("krugovi");
    for (i = 0; i < slajdovi.length; i++) {
       slajdovi[i].style.display = "none";  
    }
    brojac++;
    if (brojac > slajdovi.length) {brojac = 1}    
    for (i = 0; i < kruzici.length; i++) {
        kruzici[i].className = kruzici[i].className.replace(" active", "");
    }
    slajdovi[brojac-1].style.display = "block";  
    kruzici[brojac-1].className += " active";
    setTimeout(slajder, 4000);
}


$(document).ready(function(){
	//upisivanje u local storage da kad se otvori nova strana povuce ono sto smo izabrali
	$(".kaProizvodima").on( 'click', function(){
		var asd=$(this).attr("title");
		//console.log(asd);
		localStorage.setItem("saPocetne",asd);
		//console.log(localStorage.getItem("saPocetne"));
	});
	
	//Dropdown meni
	$('#menu li ul').css({
		display: "none",
		left: "auto"
		});
	$('#menu li').hover(function() 
		{
			$(this).find('ul').stop(true, true).slideDown('fast');
		},
		function() 
		{
			$(this).find('ul').stop(true,true).fadeOut('fast');
		});


});