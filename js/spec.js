$(document).ready(function() {
	
	//to the top strelica
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
		
		
		
//upisivanje u local storage da kad se otvori nova strana povuce ono sto smo izabrali
	$(".kaProizvodima").on( 'click', function(){
		var asd=$(this).attr("title");
		console.log(asd);
		localStorage.setItem("saPocetne",asd);
		console.log(localStorage.getItem("saPocetne"));
	});		

	var x=localStorage.getItem("oznaka"); 

	//Ispisivanje naslova
		$.ajax({
			url:'json/specifikacije.json',
			type:'GET',
			data: 'json',
			success:function(podaci){
				var Naslov="";
				$.each(podaci, function(naziv,podatak){
					if(x===podatak.Oznaka){
						Naslov=podatak.Naziv;
						document.getElementById("naslov").innerHTML=Naslov;
					}
				});
			},
			error:function(xhr,status,error){
				console.log(error)
			}
		});
	
	//Dodavanje slika
		$.ajax({
			url:'json/specifikacije.json',
			type:'GET',
			data: 'json',
			success:function(podaci){
				var Slike="";
				$.each(podaci, function(naziv,podatak){
					if(x===podatak.Oznaka){
						for (var i=1; i<8; i++){
							Slike+='<a data-fancybox="gallery" href="slike/galerija/'+podatak.Oznaka+'/'+i+'.png"><img class="dimenzije" src="slike/galerija/'+podatak.Oznaka+'/'+i+'.png" alt="'+podatak.Naziv+'-'+i+'"></a>';
							document.getElementById("galerija").innerHTML=Slike;
						}
					}
				});
			},
			error:function(xhr,status,error){
				console.log(error)
			}				
		});
	
	//Ispis specifikacija
		$.ajax({
		url:'json/specifikacije.json',
		type:'GET',
		data: 'json',
		success:function(podaci){
			var y="";
			$.each(podaci, function(naziv,podatak){
				if(x===podatak.Oznaka){

					y+='<table cellspacing=0 border=1><tr><td class="naslov">Display</td><td class=""></td></tr><tr><td class="podnaslovSpec">Display:</td><td class="sadrzaj1">'+podatak.Display+'</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Processor</td><td class=""></td></tr><tr><td class="podnaslovSpec">Processor:</td><td class="sadrzaj1">'+podatak.Processor+'</td></tr><tr><td class="podnaslovSpec">Chipset:</td><td class="sadrzaj1">'+podatak.Chipset+'</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Hard Drive & Optical Drive</td><td class=""></td></tr><tr><td class="podnaslovSpec">Standard Hard Drive:</td><td class="sadrzaj1">'+podatak.StandardHardDrive+'</td></tr><tr><td class="podnaslovSpec">Standard Optical Drive:</td><td class="sadrzaj1">N/A</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Graphics</td><td class=""></td></tr><tr><td class="podnaslovSpec">Graphics Controller:</td><td class="sadrzaj1">'+podatak.GraphicsController+'</td></tr>';

					var z=podatak.GraphicsControllerSvojstva;
					$.each(z, function(index,podatak){
						y+='<tr><td class=""></td><td class="sadrzaj2">'+podatak.svojstvo+'</td></tr>';
					});

					y+='<tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Memory</td><td class=""></td></tr><tr><td class="podnaslovSpec">Standard Memory:</td><td class="sadrzaj1">'+podatak.StandardMemory+'</td></tr><tr><td class=""></td><td class="sadrzaj2">'+podatak.StandardMemorySvojstvo+'</td></tr><tr><td class="podnaslovSpec">Number of SODIMMS:</td><td class="sadrzaj1">'+podatak.NumberOfSODIMMS+'</td></tr><tr><td class=""></td><td class="sadrzaj2">(Real operation frequency depends on processor)</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Audio Features</td><td class=""></td></tr><tr><td class="podnaslovSpec">Audio Features:</td><td class="sadrzaj2">'+podatak.AudioFeatures+'</td></tr>';

					var z1=podatak.AudioFeaturesSvojstva;
					$.each(z1, function(index,podatak){
						y+='<tr><td class=""></td><td class="sadrzaj2">'+podatak.AudioFeaturesSvojstva+'</td></tr>';
					});

					y+='<tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Network</td><td class=""></td></tr><tr><td class="podnaslovSpec">Network / Communication:</td><td class="sadrzaj1">'+podatak.NetworkCommunication1+'</td></tr><tr><td class=""></td><td class="sadrzaj2">'+podatak.NetworkCommunication2+'</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Slots / Interface</td><td class=""></td></tr><tr><td class="podnaslovSpec">Slots: </td><td class="sadrzaj1">'+podatak.Slots+'</td></tr>';

					var z2=podatak.SlotsSvojstva;
					$.each(z2, function(index,podatak){
						y+='<tr><td class=""></td><td class="sadrzaj2">'+podatak.SlotsSvojstva+'</td></tr>';
					});

					y+='<tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Input / Output Ports</td><td></td></tr><tr><td class="podnaslovSpec">Ports:</td>';	

					var z3=podatak.InputOutputPorts;
					$.each(z3, function(index,podatak){
						y+='<td class="sadrzaj1">'+podatak.InputOutputPortsSvojstva+'</td></tr></tr><td class=""></td>';
					});

					y+='<tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Power System</td><td class=""></td></tr><tr><td class="podnaslovSpec">Battery:</td><td class="sadrzaj1">'+podatak.Battery+'</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Cooling</td><td class=""></td></tr><tr><td class="podnaslovSpec">Standard Cooling:</td><td class="podnaslovSpec">Copper CPU Heatsink</td></tr><tr><td class="sadrzaj2">Optional Cooling:</td><td class="sadrzaj2">IC Diamond Thermal Compound</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Size & Weight</td><td class=""></td></tr><tr><td class="podnaslovSpec">Size:</td><td class="sadrzaj2">'+podatak.Size+'</td></tr><tr><td class="podnaslovSpec">Weight:</td><td class="sadrzaj2">'+podatak.Weight+'</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Keyboard / Point Device</td><td class=""></td></tr><tr><td class="podnaslovSpec">Keyboard:</td><td class="sadrzaj1">'+podatak.Keyboard+'</td></tr><tr><td class="podnaslovSpec">Point Device:</td><td class="sadrzaj1">Integrated touchpad with Microsoft PTP multi-gesture and scrolling function</td></tr><tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Additional Features</td><td class=""></td></tr><tr><td class="podnaslovSpec">Extra Features:</td><td class="sadrzaj2">'+podatak.ExtraFeatures+'</td></tr>';

					var z4=podatak.ExtraFeaturesSvojstva;
					$.each(z4, function(index,podatak){
						y+='<tr><td class=""></td><td class="sadrzaj2">'+podatak.ExtraFeaturesSvojstva+'</td></tr>';
					});

					y+='<tr><td class=""></td><td class=""></td></tr><tr><td class="naslov">Operating System</td><td class=""></td></tr><tr><td class="podnaslovSpec">Standard OS:</td><td class="sadrzaj1">No Operating System Standard (Windows® 10 Available)</td></tr><tr><td class=""></td><td class="sadrzaj2">(if OS is purchased some custom drivers may be downloaded and not supplied with the system)</td></tr></table>';

					document.getElementById("specifikacije").innerHTML=y;
				}
			});
		},
		error:function(xhr,status,error){
			console.log(error)
		}				
		
		});

});