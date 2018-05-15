
//dodavanje chbox-a u search

	
	proizvodjac
	var nizProizvodjac=new Array('Acer','Asus','GIGABYTE','MSI','Sager');
	var proizvodjac="";
	for(var i=0; i<nizProizvodjac.length; i++){
		var brojac=i+1;
		proizvodjac+="<input type='checkbox' class='sviChbx'  id='proizvodjac-"+brojac+"' onchange='klik1()' name='proizvodjaci'  value='"+nizProizvodjac[i]+"'/> "+nizProizvodjac[i]+"<br/>";
	}	
	document.getElementById("proizvodjac").insertAdjacentHTML("beforeend",proizvodjac);
	
	
	
	//ekran
	var nizEkran=new Array('15.6” Full HD','15.6” Full HD G-Sync','17.3” Full HD','17.3” Full HD G-Sync','17.3” 4K QHD G-Sync','21” WFHD G-Sync');
	var ekran="";
	for(var i=0; i<nizEkran.length; i++){
		var brojac=i+1;
		ekran+="<input type='checkbox' class='sviChbx' id='ekran-"+brojac+"' name='ekran' onchange='klik2()' value='"+nizEkran[i]+"'/> "+nizEkran[i]+"<br/>";
	}	
	document.getElementById("display").insertAdjacentHTML("beforeend",ekran);
	
	
	
	//procesor
	var nizProcesor=new Array('Intel® i7-7700HQ','Intel® i7-7820HK','Intel® i7-8750H','Intel® i7-8700K','Intel® i9-8950HK');
	var procesor="";
	for(var i=0; i<nizProcesor.length; i++){
		procesor+="<input type='checkbox' class='sviChbx'  id='procesor-"+brojac+"' name='procesor' onchange='klik3()' value='"+nizProcesor[i]+"'/> "+nizProcesor[i]+"<br/>";
	}	
	document.getElementById("cpu").insertAdjacentHTML("beforeend",procesor);

	
	
	//ram
	var nizRam=new Array('Up to 32GB 2133Mhz','Up to 32GB 2400Mhz','Up to 64GB 2133Mhz','Up to 64GB 2400Mhz');
	var ram="";
	for(var i=0; i<nizRam.length; i++){
		ram+="<input type='checkbox' class='sviChbx' name='ram' onchange='klik4()' id='ram-"+brojac+"' value='"+nizRam[i]+"'/> "+nizRam[i]+"<br/>";
	}	
	document.getElementById("ram").insertAdjacentHTML("beforeend",ram);
	
	
	
	//gpu
	var nizGrafika=new Array('GeForce™ GTX 1050Ti','GeForce™ GTX 1060','GeForce™ GTX 1070','GeForce™ GTX 1080','Dual GeForce™ GTX 1080');
	var grafika="";
	for(var i=0; i<nizGrafika.length; i++){
		grafika+="<input type='checkbox' class='sviChbx' name='gpu'  onchange='klik5()' id='grafika-"+brojac+"' value='"+nizGrafika[i]+"'/> "+nizGrafika[i]+"<br/>";
	}	
	document.getElementById("gpu").insertAdjacentHTML("beforeend",grafika);

	
	
	//storage
	var nizStorage=new Array('1TB HDD','128GB SSD + 1TB HDD','250GB SSD + 1TB HDD','500GB SSD + 1TB HDD');
	var storage="";
	for(var i=0; i<nizStorage.length; i++){
		storage+="<input type='checkbox' class='sviChbx' name='storage' onchange='klik6()' id='storage-"+brojac+"' value='"+nizStorage[i]+"'/> "+nizStorage[i]+"<br/>";
	}	
	document.getElementById("storage").insertAdjacentHTML("beforeend",storage);
	
	
	

	
	
//	Prikaz u rezultat pretrage
	var proizvodjacNiz;
	var ekranNiz;
	var procesorNiz;
	var ramNiz;
	var gpuNiz;
	var storageNiz;

function klik1(){
	var prazanNiz=new Array();
	var proizvodjacFilter=new Array();
	var filterPretraga=document.getElementsByName("proizvodjaci");
	
	for(var index in filterPretraga){
		if(filterPretraga[index].checked)
		{
			proizvodjacFilter.push(filterPretraga[index].value);
		}

	}
	proizvodjacNiz=proizvodjacFilter;
	
		$.ajax({
		url:'json/laptop.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var x="";
			$.each(podaci, function(naziv,podatak){
			for(var index1 in proizvodjacFilter)
				{
					
					if(proizvodjacFilter[index1]==podatak.id)
					{
			
						x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
			
					document.getElementById("laptop").innerHTML=x;

					}
				
				}
			});
			
		}
	});


}

function klik2(){
	var ekranFilter=new Array();
	var filterPretraga=document.getElementsByName("ekran");
	for(i=0; i<filterPretraga.length; i++){
		if(filterPretraga[i].checked)
		{
			ekranFilter.push(filterPretraga[i].value);
		}
	}
	
	console.log(ekranFilter)
	ekranNiz=ekranFilter;
	
		$.ajax({
		url:'json/laptop.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var x="";
			$.each(podaci, function(naziv,podatak){
			for(var index1 in ekranFilter)
				{
				//	for petlja
					if(ekranFilter[index1]==podatak.ekran)
					{
						
			
						x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
			
					document.getElementById("laptop").innerHTML=x;

					}
				
				}
			});
			
		}
	});

	}

function klik3(){
	var procesorFilter=new Array();
	var filterPretraga=document.getElementsByName("procesor");
	for(i=0; i<filterPretraga.length; i++){
		if(filterPretraga[i].checked)
		{
			procesorFilter.push(filterPretraga[i].value);
			
		}
	}
	
	procesorNiz=procesorFilter;
			$.ajax({
		url:'json/laptop.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var x="";
			$.each(podaci, function(naziv,podatak){
			for(var index1 in procesorFilter)
				{
					
					if(procesorFilter[index1]==podatak.cpu)
					{
						
			
						x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
			
					document.getElementById("laptop").innerHTML=x;

					}
				
				}
			});
			
		}
	});

}

function klik4(){
	var ramFilter=new Array();	
	var filterPretraga=document.getElementsByName("ram");
	for(i=0; i<filterPretraga.length; i++){
		if(filterPretraga[i].checked)
		{
			ramFilter.push(filterPretraga[i].value);
		}
	}
	
	ramNiz=ramFilter;
				$.ajax({
		url:'json/laptop.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var x="";
			$.each(podaci, function(naziv,podatak){
			for(var index1 in ramFilter)
				{
					
					if(ramFilter[index1]==podatak.ram)
					{
			
						x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
			
					document.getElementById("laptop").innerHTML=x;

					}
				
				}
			});
			
		}
	});
}

function klik5(){
	var gpuFilter=new Array();		
	var filterPretraga=document.getElementsByName("gpu");
	for(i=0; i<filterPretraga.length; i++){
		if(filterPretraga[i].checked)
		{
			gpuFilter.push(filterPretraga[i].value);
		}
	}
	
	gpuNiz=gpuFilter;
				$.ajax({
		url:'json/laptop.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var x="";
			$.each(podaci, function(naziv,podatak){
			for(var index1 in gpuFilter)
				{
					
					if(gpuFilter[index1]==podatak.gpu)
					{
						
			
						x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
			
					document.getElementById("laptop").innerHTML=x;

					}
				
				}
			});
			
		}
	});
}

function klik6(){
	var storageFilter=new Array();		
	var filterPretraga=document.getElementsByName("storage");
	for(i=0; i<filterPretraga.length; i++){
		if(filterPretraga[i].checked)
		{
			storageFilter.push(filterPretraga[i].value);
		}
	}
	
	storageNiz=storageFilter;
				$.ajax({
		url:'json/laptop.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var x="";
			$.each(podaci, function(naziv,podatak){
			for(var index1 in storageFilter)
				{
					
					if(storageFilter[index1]==podatak.storage)
					{
						
			
						x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
			
					document.getElementById("laptop").innerHTML=x;

					}
				
				}
			});
			
		}
	});	
}

////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

function ucitaj(){
	$.ajax({
	url:'json/laptop.json',
	type:'GET',
	data: 'json',
	success:function(podaci){
		var x="";
		$.each(podaci, function(naziv,podatak){
					
				x+='<div class="proizvod"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li 	class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'<br/><font color="#30B800"><strong> VR Ready</strong></font></li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
				document.getElementById("laptop").innerHTML=x;
			
			});	
		}
	});
}


$(document).ready(function(){
	ucitaj();	
	$("#15").on("click",function(){
		ekran15();
	})

	
	$("#17").on("click",function(){
		ekran17();
	})	
	
	$("#acer").on("click",function (){
		acer();
	})		
	
	$("#asus").on("click",function (){
		asus();
	})	
	
	$("#gigabyte").on("click",function (){
		gigabyte();
	})	
	
	$("#msi").on("click",function (){
		msi();
	})
	
	$("#sager").on("click",function (){
		sager();
	})

	
	//Drop down meni
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
	
	//upisivanje u localstorage
	$(document).on( 'click', '.proizvod', function(){
		var nazivLaptop=$(this).find("a").attr("title");
		console.log(nazivLaptop);
		localStorage.setItem("oznaka",nazivLaptop);
		console.log(localStorage.getItem("oznaka"));
	});	
	

	
	//destiklirani svi chbx ucita ponovo sve
	$(document).on( 'click', '.pretraga', function(){
		if($(".pretraga").find("input").prop("checked")==false)
		{
			ucitaj();
		}	
	});	




	// redirekcija sa pocetne strane preko localstorage
	
	
	if(localStorage.getItem("saPocetne")!=null){ 
	var saPocetne=localStorage.getItem("saPocetne");
	if(saPocetne.length>0)
	{
		switch(saPocetne)
			{
				case "15": ekran15(); break;
				case "17": ekran17(); break;				
				case "acer": acer(); break;
				case "asus": asus(); break;
				case "gigabyte": gigabyte(); break;
				case "msi": msi(); break;
				case "sager": sager(); break;
				default: localStorage.removeItem("saPocetne");
			}
		localStorage.removeItem("saPocetne");	
	}
	}

$("#scrollToTop").click(function() {
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
	
	
});


function acer(){
	document.getElementById("proizvodjac-1").checked=true;	
	document.getElementById("proizvodjac-2").checked=false;
    document.getElementById("proizvodjac-3").checked=false;
    document.getElementById("proizvodjac-4").checked=false;
    document.getElementById("proizvodjac-5").checked=false;
    klik1();
}


function asus(){
	document.getElementById("proizvodjac-1").checked=false;	
	document.getElementById("proizvodjac-2").checked=true;
    document.getElementById("proizvodjac-3").checked=false;
    document.getElementById("proizvodjac-4").checked=false;
    document.getElementById("proizvodjac-5").checked=false;
    klik1();
}


function gigabyte(){
	document.getElementById("proizvodjac-1").checked=false;	
	document.getElementById("proizvodjac-2").checked=false;
    document.getElementById("proizvodjac-3").checked=true;
    document.getElementById("proizvodjac-4").checked=false;
    document.getElementById("proizvodjac-5").checked=false;
    klik1();
}


function msi(){
	document.getElementById("proizvodjac-1").checked=false;	
	document.getElementById("proizvodjac-2").checked=false;
    document.getElementById("proizvodjac-3").checked=false;
    document.getElementById("proizvodjac-4").checked=true;
    document.getElementById("proizvodjac-5").checked=false;
    klik1();
}


function sager(){
	document.getElementById("proizvodjac-1").checked=false;	
	document.getElementById("proizvodjac-2").checked=false;
    document.getElementById("proizvodjac-3").checked=false;
    document.getElementById("proizvodjac-4").checked=false;
    document.getElementById("proizvodjac-5").checked=true;
    klik1();
}


function ekran15(){
	document.getElementById("ekran-1").checked=true;
	document.getElementById("ekran-2").checked=true;
	document.getElementById("ekran-3").checked=false;
	document.getElementById("ekran-4").checked=false;
	document.getElementById("ekran-5").checked=false;
	klik2();
}

function ekran17(){
	document.getElementById("ekran-1").checked=false;
	document.getElementById("ekran-2").checked=false;
	document.getElementById("ekran-3").checked=true;
	document.getElementById("ekran-4").checked=true;
	document.getElementById("ekran-5").checked=false;
	klik2();
}





