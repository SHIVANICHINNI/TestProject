function calService(l1) {
	
	if(l1=='as1'){
		as1();
	}
	if(l1=='eai1'){
		eai1();
	}
	if(l1=='ea1'){
		ea1();
	}
	
	if(l1=='erp1'){
		erp1();
	}
	if(l1=='ad1'){
		ad1();
	}
	if(l1=='idm1'){
		idm1();
	}
}

function as1(){

var r=document.getElementById("as").innerHTML;
	document.getElementById("content").innerHTML=r;

}
function eai1(){
	
	var r=document.getElementById("eai").innerHTML;
	document.getElementById("content").innerHTML=r;
}
function ea1(){
	
	var r=document.getElementById("ea").innerHTML;
	document.getElementById("content").innerHTML=r;
}
function erp1(){
	
	var r=document.getElementById("erp").innerHTML;
	document.getElementById("content").innerHTML=r;
}
function ad1(){
	
	var r=document.getElementById("ad").innerHTML;
	document.getElementById("content").innerHTML=r;
}
function idm1(){
	
	var r=document.getElementById("idm").innerHTML;
	document.getElementById("content").innerHTML=r;
}
