	var nizSviChbx=document.getElementsByClassName("sviChbx");
	
	var nizCheckChbx = new Array();

		for(var index in nizSviChbx){
			if(nizSviChbx[index].checked)
			{
				nizCheckChbx.push(nizSviChbx[index].value);
			}
		}	
	console.log(nizCheckChbx)

	var ispisPretrage="";
	for(index in nizCheckChbx){
		ispisPretrage+="<p>"+nizCheckChbx[index]+" "+"</p>";
		console.log(nizCheckChbx[index])
	}
	document.getElementById("ispis-pretrage").innerHTML=ispisPretrage;
