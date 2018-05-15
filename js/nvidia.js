$(document).ready(function(){

//upisivanje u local storage da kad se otvori nova strana povuce ono sto smo izabrali
	$(".kaProizvodima").on( 'click', function(){
		var asd=$(this).attr("title");
		//console.log(asd);
		localStorage.setItem("saPocetne",asd);
		//console.log(localStorage.getItem("saPocetne"));
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
	
//ispisivanje tabele specifikacija

		var tabela='<table cellspacing=0 border=1><th id="Gtx10" colspan=6 >GEFORCE GTX 10-SERIES LAPTOPS</th><tr></tr><th><td class="polja1"></td><td class="polja gtx">GEFORCE<br/>GTX 1080</td><td class="polja gtx">GEFORCE<br/>GTX 1070</td><td class="polja gtx">GEFORCE<br/>GTX 1060</td><td class="polja gtx">GEFORCE<br/>GTX 1050Ti</td></th></table><table cellspacing=0 border=1><th colspan=5 class="naslov">GPU Engine Specs</td><tr><td class="polja1">Cuda Cores</td><td class="polja">2560</td><td class="polja">2048</td><td class="polja">1280</td><td class="polja">768</td></tr><tr><td class="polja1">Base Clock (MHz)</td><td class="polja">1556</td><td class="polja">1442</td><td class="polja">1404</td><td class="polja">1493</td></tr><tr><td class="polja1">Boost Clock (MHz)</td><td class="polja">1733</td><td class="polja">1645</td><td class="polja">1670</td><td class="polja">1620</td></tr><tr><td class="polja1">Total Graphics Power (W)</td><td class="polja">150</td><td class="polja">115</td><td class="polja">80</td><td class="polja">64</td></tr></table><table cellspacing=0 border=1><th colspan=5 class="naslov">Memory Spec</td><tr><td class="polja1">Memory Speed(Gbps)</td><td class="polja">10</td><td class="polja">8</td><td class="polja">8</td><td class="polja">7</td></tr><tr><td class="polja1">Standard Memory Config</td><td class="polja">8 GB GDDR5X</td><td class="polja">8 GB GDDR5</td><td class="polja">Up to 6 GB GDDR5</td><td class="polja">Up to 4 GB GDDR5</td></tr><tr><td class="polja1">Memory Interface Width</td><td class="polja">256-bit</td><td class="polja">256-bit</td><td class="polja">192-bit</td><td class="polja">128-bit</td></tr><tr><td class="polja1">Memory Bandwidth (GB/sec)</td><td class="polja">320</td><td class="polja">256</td><td class="polja">192</td><td class="polja">112</td></tr></table><table cellspacing=0 border=1><th colspan=5 class="naslov">Technology Support</td><tr><td class="polja1">NVIDIA WhisperMode</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">No</td></tr> <tr><td class="polja1">Multi Projection</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr> <tr><td class="polja1">VR Ready1</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">No</td></tr>  <tr> <td class="polja1">NVIDIA Ansel</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr> <tr><td class="polja1">NVIDIA SLI® Ready1</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">No</td><td class="polja">No</td></tr><tr><td class="polja1">NVIDIA G-Sync™-Support1</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">NVIDIA BatteryBoost™</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">NVIDIA Optimus technology1</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">NVIDIA GameStream™-Ready</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">NVIDIA GPU Boost™ 3.0</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">Microsoft DirectX 12</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">Vulkan</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">OpenGL 4.5</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">Bus Support</td><td class="polja">PCI Express 3.0</td><td class="polja">PCI Express 3.0</td><td class="polja">PCI Express 3.0</td><td class="polja">PCI Express 3.0</td></tr><tr><td class="polja1">OS Certification</td><td class="polja">Windows 7-10, Linux,<br/>FreeBSD x86</td><td class="polja">Windows 7-10, Linux,<br/>FreeBSD x86</td><td class="polja">Windows 7-10, Linux,<br/>FreeBSD x86</td><td class="polja">Windows 7-10, Linux,<br/>FreeBSD x86</td></tr></table><table cellspacing=0 border=1>	<th colspan=5 class="naslov">Display Support</td><tr><td class="polja1">DP1.4, HDMI 2.0b, DL-DVI</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr><tr><td class="polja1">HDCP 2.2</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td><td class="polja">Yes</td></tr></table><table cellspacing=0 border=1>	<th colspan=5 class="naslov">Display Support</td><tr><td class="polja1">Total Graphics Power (W)</td><td class="polja">90 – 110</td><td class="polja">80 - 90</td><td class="polja">60 – 70</td><td class="polja">40-46</td></tr><tr><td class="polja1">Efficiency Enhancement</td><td class="polja">1.5x</td><td class="polja">1.33x</td><td class="polja">1.25x</td><td class="polja">1.45x</td></tr><tr><td class="polja1">Base Clock (Mhz)</td><td class="polja">1101 – 12903</td><td class="polja">1101 – 12153</td><td class="polja">1063 – 12653</td><td class="polja">1151 – 12903 </td></tr><tr><td class="polja1">Boost Clock (Mhz)</td><td class="polja">1278 – 14683</td><td class="polja">1265 – 13793</td><td class="polja">1341 – 14803</td><td class="polja">1290 – 14173</td></tr><tr><td class="polja1">Target Acoustics</td><td class="polja">40 dbA4</td><td class="polja">40 dbA4</td><td class="polja">40 dbA4</td><td class="polja">40 dbA4</td></tr></table>';
		
		document.getElementById("nvidia-tabela-spec").innerHTML=tabela;


	

});