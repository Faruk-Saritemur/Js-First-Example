
function toplama() {
	var s1, s2, sonuc;
	s1 = Number(document.getElementById("sayi1").value);
	s2 = Number(document.getElementById("sayi2").value);
	sonuc = s1 + s2;
	document.getElementById("sonuc1").innerHTML = sonuc;
}

function cikarma() {
	var s1, s2, sonuc;
	s1 = Number(document.getElementById("sayi1").value);
	s2 = Number(document.getElementById("sayi2").value);
	sonuc = s1 - s2;
	document.getElementById("sonuc1").innerHTML = sonuc;
}

function carpma() {
	var s1, s2, sonuc;
	s1 = Number(document.getElementById("sayi1").value);
	s2 = Number(document.getElementById("sayi2").value);
	sonuc = s1 * s2;
	document.getElementById("sonuc1").innerHTML = sonuc;
}

function bolme() {
	var s1, s2, sonuc;
	s1 = Number(document.getElementById("sayi1").value);
	s2 = Number(document.getElementById("sayi2").value);
	sonuc = s1 / s2;
	document.getElementById("sonuc1").innerHTML = sonuc;
}