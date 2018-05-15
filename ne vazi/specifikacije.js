$(document).ready(function(){
//upisivanje u local storage da kad se otvori nova strana povuce ono sto smo izabrali
	$(".kaProizvodima").on( 'click', function(){
		var asd=$(this).attr("title");
		console.log(asd);
		localStorage.setItem("saPocetne",asd);
		console.log(localStorage.getItem("saPocetne"));
	});
	
	//Dropdown meni
	$('#menu li ul').css({
		display: "none",
		left: "auto"
		});
	$('#menu li').hover(function() 
		{
			$(this).find('ul').stop(true, true).slideDown('fast');
			$(this).find('ul').css({"transition":"0.2"});
		},
		function() 
		{
			$(this).find('ul').stop(true,true).fadeOut('fast');
		});


});