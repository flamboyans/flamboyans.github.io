$(document).ready(function(){

//upisivanje u local storage da kad se otvori nova strana povuce ono sto smo izabrali
	$(".kaProizvodima").on( 'click', function(){
		var asd=$(this).attr("title");
		console.log(asd);
		localStorage.setItem("saPocetne",asd);
		console.log(localStorage.getItem("saPocetne"));
	});


//menjanje pozadine kad se predje preko svake specifikacije
	$(function () {
		$("tr:not(:has(th))").mouseover(function () {
			$(this).css("background","#666666");
		});
		$("tr:not(:has(th))").mouseleave(function () {
			$(this).css("background","");
		});
	});	

	
//prikazivanje/uklanjanje specifikacije
	$("#nvidia-tabela-spec").hide(); //incijalno sakriveno
	
	$("#nvidiaSpec").click(function()
	{
		if($('#nvidia-tabela-spec').is(":visible"))
		{
			$("#nvidia-tabela-spec").slideUp();
			$("#nvidiaSpec").val("View full specifications");
		}
		else
		{
			$("#nvidia-tabela-spec").slideDown();
			$("#nvidiaSpec").val("Hide specifications");
		}
	});

	
//prikazivanje/uklanjanje maxQ teksta
	$("#sakrij").hide();	//incijalno sakriveno
	
	$("#maxq").click(function()
	{
		if($('#sakrij').is(":visible"))
		{
			$("#sakrij").slideUp();
			$("#maxq").val("Show more");
		}
		else
		{
			$("#sakrij").slideDown();
			$("#maxq").val("Show less");
		}
	});	

	
//skrolovanje do vrha	
	$("#scrollToTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	window.onscroll=function(){
		skrolovanje();
	};
	function skrolovanje(){
		if(document.documentElement.scrollTop > 500)
		{
			$("#scrollToTop").fadeIn();
		}
		else
		{
			$("#scrollToTop").fadeOut();
		}
	}
	
	$("#scrollToTop").click(function(){
		document.documentElement.scrollTop=0;
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
		}
	);
	


	

});