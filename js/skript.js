
	ucitaj(); //ucitava sve proizvode preko ajaxa i jsona
	
//dodavanje chbox-a u search
//proizvodjac
	var nizProizvodjac=new Array('Acer','Asus','GIGABYTE','MSI','Sager');
	var proizvodjac="";
		for(var i=0; i<nizProizvodjac.length; i++){
			proizvodjac+="<label class='stillChbx'>"+nizProizvodjac[i]+"<input type='checkbox' class='sviChbx' name='proizvodjaci' value='"+nizProizvodjac[i]+"' id='"+nizProizvodjac[i]+"' /><span class='checkmark'></span></label>";
		}	
	document.getElementById("proizvodjac").insertAdjacentHTML("beforeend",proizvodjac);

	
//ekran
	var nizEkran=new Array('15.6” Full HD','15.6” Full HD G-Sync','15.6” 4K QHD G-Sync','17.3” Full HD','17.3” Full HD G-Sync','17.3” 4K QHD G-Sync','21” WFHD G-Sync');
	var nizEkranOznake=new Array('15hd','15-gsync','15-4k','17hd','17-gsync','17-4k','21-gsync');
	var ekran="";
		for(var i=0; i<nizEkran.length; i++){
			ekran+="<label class='stillChbx'>"+nizEkran[i]+"<input type='checkbox' class='sviChbx' name='ekran' value='"+nizEkranOznake[i]+"' id='"+nizEkranOznake[i]+"' /><span class='checkmark'></span></label>";
		}	
	document.getElementById("display").insertAdjacentHTML("beforeend",ekran);

	
//procesor
	var nizProcesor=new Array('Intel® i7-7700HQ','Intel® i7-7820HK','Intel® i7-8750H','Intel® i7-8850H','Intel® i7-8700K','Intel® i9-8950HK');
	var nizProcesorOznake=new Array('7700HQ','7820HK','8750H','8850H','8700K','8950HK');
	var procesor="";
		for(var i=0; i<nizProcesor.length; i++){
			procesor+="<label class='stillChbx'>"+nizProcesor[i]+"<input type='checkbox' class='sviChbx' name='procesor' value='"+nizProcesorOznake[i]+"' id='"+nizProcesorOznake[i]+"'   /><span class='checkmark'></span></label>";
		}	
	document.getElementById("cpu").insertAdjacentHTML("beforeend",procesor);

	
//ram
	var nizRam=new Array('Up to 32GB 2133Mhz','Up to 32GB 2400Mhz','Up to 64GB 2133Mhz','Up to 64GB 2400Mhz');
	var nizRamOznake=new Array('32GB2133','32GB2400','64GB2133','64GB2400');
	var ram="";
		for(var i=0; i<nizRam.length; i++){
			ram+="<label class='stillChbx'>"+nizRam[i]+"<input type='checkbox' class='sviChbx' name='ram' value='"+nizRamOznake[i]+"' id='"+nizRamOznake[i]+"' /><span class='checkmark'></span></label>";
		}	
	document.getElementById("ram").insertAdjacentHTML("beforeend",ram);

	
//gpu
	var nizGrafika=new Array('GeForce™ GTX 1050Ti','GeForce™ GTX 1060','GeForce™ GTX 1070','GeForce™ GTX 1080','Dual GeForce™ GTX 1080');
	var nizGrafikaOznake=new Array('1050','1060','1070','1080','dual1080');
	var grafika="";
		for(var i=0; i<nizGrafika.length; i++){
			grafika+="<label class='stillChbx'>"+nizGrafika[i]+"<input type='checkbox' class='sviChbx' name='gpu' value='"+nizGrafikaOznake[i]+"' id='"+nizGrafikaOznake[i]+"' /><span class='checkmark'></span></label>";
		}	
	document.getElementById("gpu").insertAdjacentHTML("beforeend",grafika);

	
//storage
	var nizStorage=new Array('1TB HDD','128GB SSD + 1TB HDD','250GB SSD + 1TB HDD','500GB SSD + 1TB HDD');
	var nizStorageOznake=new Array('1TB','128GB','250GB','500GB');
	var storage="";
		for(var i=0; i<nizStorage.length; i++){
			storage+="<label class='stillChbx'>"+nizStorage[i]+"<input type='checkbox' class='sviChbx' name='storage' value='"+nizStorageOznake[i]+"' id='"+nizStorageOznake[i]+"'   /><span class='checkmark'></span></label>";
		}	
	document.getElementById("storage").insertAdjacentHTML("beforeend",storage);
	
	
//prilikom biranja nekog checkboxa radi se filtriranje
	var filterCheckboxes = $('input[type="checkbox"]');

	filterCheckboxes.on('change', function(){
		
		var selectedFilters = {};
		
		filterCheckboxes.filter(':checked').each(function()
			{
				if (!selectedFilters.hasOwnProperty(this.name)) 
					{
						selectedFilters[this.name] = [];
					}
		

			selectedFilters[this.name].push(this.value);
			
			});

//selektovanje svih proizvoda za filtriranje
		var filteredResults = $('.proizvod');

// prolazi kroz petlju selektovani po name atributu 
		$.each(selectedFilters, function(name, filterValues) {

	// filtriranje .proizvod elementa
			filteredResults = filteredResults.filter(function() {
		
				var matched = false,
				currentFilterValues = $(this).data('category').split(' ');
		
			//petlja kroz svaki .proizvod's data-category
				$.each(currentFilterValues, function(_, currentFilterValue) {
		
				// ako postojeća kategorija postoji u odabranom nizu filtera
				// postavi matched u true, i stopiraj petlju (OR funkcija)
				// skup filtera, potrebno je samo jednom da se podudari
		
					if ($.inArray(currentFilterValue, filterValues) != -1) 
						{
							matched = true;
							return false;
						}
	
				});
		
			//ako je matched true trenutni .proizvod element se vraca (return)
				return matched;
		
			});
		});
	$('.proizvod').hide().filter(filteredResults).show();

	

});






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
					
				x+='<div class="proizvod" data-category="'+podatak.filteroznaka+'"><a data-fancybox="gallery" href="specifikacije.html" title="'+podatak.oznaka+'"><img class="proizvod-slika" src="'+podatak.slika.putanja+'" alt="'+podatak.slika.alt+'" width="210" height="210"></a><div class="proizvod-opis"><div class="proizvod-opis"><strong><a href="specifikacije.html" title="'+podatak.naziv+'"><h2 class="proizvod-naslov">'+podatak.naziv+'</h2></a></strong></div><div class="proizvod-specifikacije"><ul><li class="razmak dodatak">'+podatak.ekran+'</li><li 	class="razmak">'+podatak.cpu+'</li><li class="razmak">'+podatak.gpu+'</li><li class="razmak">'+podatak.ram+'</li><li class="razmak">'+podatak.storage+'</li><li class="razmak dodatak2">'+podatak.baterija+'+ Hours / '+podatak.tezina+' kg</li></ul></div></div><div class="more-info"><a href="specifikacije.html"><span class="info">VIEW DETAILS</span></a></div></div>';
			
				document.getElementById("laptop").innerHTML=x;
			
			});	
		}
	});
}


$(document).ready(function(){

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
		//console.log(nazivLaptop);
		localStorage.setItem("oznaka",nazivLaptop);
		//console.log(localStorage.getItem("oznaka"));
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
	$("input:checkbox").each(function(index,element){ 
		$(element).prop('checked', false);
		$("#Acer").prop('checked', true);
		});
	
	saMenija();
}

function asus(){
	$("input:checkbox").each(function(index,element){ 
		$(element).prop('checked', false);
		$("#Asus").prop('checked', true);
		});
	
	saMenija();
}

function gigabyte(){
	$("input:checkbox").each(function(index,element){ 
		$(element).prop('checked', false);
		$("#GIGABYTE").prop('checked', true);
		});
	
	saMenija();
}

function msi(){
	$("input:checkbox").each(function(index,element){ 
		$(element).prop('checked', false);
		$("#MSI").prop('checked', true);
		});
	
	saMenija();
}

function sager(){
	$("input:checkbox").each(function(index,element){ 
		$(element).prop('checked', false);
		$("#Sager").prop('checked', true);
		});
	
	saMenija();
}

function ekran15(){
	samo15();
	saMenija();
}

function ekran17(){
	samo17()
	saMenija();
	
}

function samo17(){
$("input:checkbox").each(function(index,element){ 
	$(element).prop('checked', false);
	$("#17hd, #17-gsync, #17-4k").prop('checked', true);
	});
}

function samo15(){
$("input:checkbox").each(function(index,element){ 
	$(element).prop('checked', false);
	$("#15hd, #15-gsync, #15-4k").prop('checked', true);
	});
}

			
function saMenija(){
		
		var selectedFilters = {};
		
		filterCheckboxes.filter(':checked').each(function()
			{
				if (!selectedFilters.hasOwnProperty(this.name)) 
					{
						selectedFilters[this.name] = [];
					}
		

			selectedFilters[this.name].push(this.value);
			
			});

//selektovanje svih proizvoda za filtriranje
		var filteredResults = $('.proizvod');

// prolazi kroz petlju selektovani po name atributu 
		$.each(selectedFilters, function(name, filterValues) {

	// filtriranje .proizvod elementa
			filteredResults = filteredResults.filter(function() {
		
				var matched = false,
				currentFilterValues = $(this).data('category').split(' ');
		
			//petlja kroz svaki .proizvod's data-category
				$.each(currentFilterValues, function(_, currentFilterValue) {
		
				// ako postojeća kategorija postoji u odabranom nizu filtera
				// postavi matched u true, i stopiraj petlju (OR funkcija)
				// skup filtera, potrebno je samo jednom da se podudari
		
					if ($.inArray(currentFilterValue, filterValues) != -1) 
						{
							matched = true;
							return false;
						}
	
				});
		
			//ako je matched true trenutni .proizvod element se vraca (return)
				return matched;
		
			});
		});
	
	$('.proizvod').hide().filter(filteredResults).show();

}

	$(".reset").on("click",function(){
		$("input:checkbox").each(function(index,element){ 
		$(element).prop('checked', false);
			
		});
		saMenija();
	})
	


