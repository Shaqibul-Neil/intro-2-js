//show text

function showText(){

	document.getElementById('st').innerHTML = "Hello there";

}

//show date

function showDate(){

	document.getElementById('da1').innerHTML = "Fri Jan 31 1.22am";


}

//bulb on off

function bulbOn(){

	document.getElementById('myimage').src = "on.jpg";

}

function bulbOff(){

	document.getElementById('myimage').src = "off.jpg";

}

//fontsize

function fontSizeIncrease(){

	document.getElementById('fsi').style.fontSize = "35px";
}

//texthide

function textHide(){

	document.getElementById('th').style.display = "none";;
}

//invisible text show

function invisibleTextShow(){
	document.getElementById('stext').style.display = "block"
}
