
	//sakrivanje gresaka pri ucitavanju
	var sakrijGreske=document.getElementsByClassName("error");
	for(var i=0; i<sakrijGreske.length; i++)
	{
		sakrijGreske[i].style.display="none";
	}
	
	
	function provera(){
		
		//dohvatanje svih elementa za proveru
		var name=document.getElementById("tbName").value;
		var email=document.getElementById("tbEmail").value;
		var phone=document.getElementById("tbPhone").value;
		var subject=document.getElementById("tbSubject").value;
		var message=document.getElementById("tbMessage").value;
		var allInputs=document.getElementsByClassName("allInputs");
		
		var nizPodaci=new Array();
		var nizGreske=new Array();
		

		//Regularni izrazi
		var reName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9})*$/;
		var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var rePhone = /^(06[01234569]\/[0-9]{6}[0-9]?)$|(06[01234569]\/[0-9]{3}\-[0-9]{3}[0-9]?)$/;
		var reSubject =/^.{3,30}$/;
		var reMessage =/^.{3,300}$/;
		
		//provera da li je uneseno ime u dobrom formatu
		if(!reName.test(name))
		{
			document.getElementById("labelName").style.color="red";
			document.getElementById("errorName").style.display="block";
			nizGreske.push("Please enter Your name");
			console.log(nizGreske);
		}
		else
		{
			document.getElementById("labelName").style.color="#fff";
			document.getElementById("errorName").style.display="none";
			nizPodaci.push("Name: "+name);
			console.log(nizPodaci);
		}
		
		//provera da li je unesen email u dobrom formatu
		if(!reEmail.test(email))
		{
			document.getElementById("labelEmail").style.color="red";
			document.getElementById("errorEmail").style.display="block";
			nizGreske.push("Please enter Your email");
			console.log(nizGreske);
		}
		else
		{
			document.getElementById("labelEmail").style.color="#fff";
			document.getElementById("errorEmail").style.display="none";
			nizPodaci.push("Email: "+email);
			console.log(nizPodaci);
		}
		

		//provera da li je unesen broj u dobrom formatu
		if(!rePhone.test(phone))
		{
			document.getElementById("labelPhone").style.color="red";
			document.getElementById("errorPhone").style.display="block";
			nizGreske.push("Please enter Your phone");
			console.log(nizGreske);
		}
		else
		{
			document.getElementById("labelPhone").style.color="#fff";
			document.getElementById("errorPhone").style.display="none";
			nizPodaci.push("Phone: "+phone);
			console.log(nizPodaci);
		}

		//provera da li je unesen subject u dobrom formatu
		if(!reSubject.test(subject))
		{
			document.getElementById("labelSubject").style.color="red";
			document.getElementById("errorSubject").style.display="block";
			nizGreske.push("Please enter Subject");
			console.log(nizGreske);
		}
		else
		{
			document.getElementById("labelSubject").style.color="#fff";
			document.getElementById("errorSubject").style.display="none";
			nizPodaci.push("Subject: "+subject);
			console.log(nizPodaci);
		}

		//provera da li je unesen message u dobrom formatu
		if(!reMessage.test(message))
		{
			document.getElementById("labelMessage").style.color="red";
			document.getElementById("errorMessage").style.display="block";
			nizGreske.push("Please enter Your message");
			console.log(nizGreske);
		}
		else
		{
			document.getElementById("labelMessage").style.color="#fff";
			document.getElementById("errorMessage").style.display="none";
			nizPodaci.push("Message: "+message);
			console.log(nizPodaci);
		}
		
		//provera da li su sva polja popunjena u odgovarajucem formatu
		if(nizGreske.length ==0)
		{
			alert("Your message has been sent!")
			for(var i=0; i<allInputs.length; i++)
			{
				allInputs[i].value="";
			}
		}
		else
		{
			alert("All fields must be filled in correct format!")
		}
	
	}	


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