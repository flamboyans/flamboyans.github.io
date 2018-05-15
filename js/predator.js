$(document).ready(function(){
	//upisivanje u local storage da kad se otvori nova strana povuce ono sto smo izabrali
	$(".kaProizvodima").on( 'click', function(){
		var asd=$(this).attr("title");
		//console.log(asd);
		localStorage.setItem("saPocetne",asd);
		//console.log(localStorage.getItem("saPocetne"));
	});


	//prikazivanje i sakrivanje scroll

	window.onscroll=function(){
		skrolovanje();
	};
	function skrolovanje(){
		if(document.documentElement.scrollTop > 500)
		{
			$("#predator-navigacija").fadeIn();
			event.preventDefault();
		}
		else
		{
			$("#predator-navigacija").fadeOut();
			event.preventDefault();
		}
	}
	

	
	//programiranje navigacije scrolla
	//display
	$("#toDisplay").click(function() {

    $('html, body').stop().animate({
        scrollTop: $("#display").offset().top-50
    }, 2000);

	});
	
	//toEyetracking
	$("#toEyetracking").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#eyetracking").offset().top-50
    }, 2000);
	});
	
	//toMx
	$("#toMx").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#mx").offset().top-50}, 2000);
		return false;
	event.stopPropagation();
	});
	
	//toFlipflop
	$("#toFlipflop").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#flipflop").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toDiamond
	$("#toDiamond").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#diamond").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toDualgtx
	$("#toDualgtx").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#dualgtx").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toOc
	$("#toOc").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#oc").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toFan
	$("#toFan").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#fan").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toAeroblade
	$("#toAeroblade").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#aeroblade").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toSound
	$("#toSound").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#sound").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toDolby
	$("#toDolby").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#dolby").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toSense
	$("#toSense").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#sense").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toCoolboost
	$("#toCoolboost").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#coolboost").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toCase
	$("#toCase").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#case").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	//toClean
	$("#toClean").click(function() {
    $('html, body').stop().animate({
        scrollTop: $("#clean").offset().top-50
    }, 2000);
	event.stopPropagation();
	});
	
	
	//Opacity prilikom hover preko teksta
	$('.region-tekst-desno').hover(function()

		{
			$(this).css({"opacity":"1","transition":"0.3s"});
		},
		function() 
		{
			$(this).css({"opacity":"0.8","transition":"0.3s"});
		});
	
	$('.region-tekst-levo').hover(function()

		{
			$(this).css({"opacity":"1","transition":"0.3s"});
		},
		function() 
		{
			$(this).css({"opacity":"0.8","transition":"0.3s"});
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