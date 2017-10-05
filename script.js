var agh = 0, bgh = 0, cgh = 0, dgh = 0, egh = 0, fgh = 0, igh = 0, jgh = 0, kgh = 0, lgh = 0, mgh = 0;
var randomColorVar1, randomColorVar2, randomColorVar3, randomColorVar4, randomColorVar9, randomColorVar10;
var randomColorVar5, randomColorVar6, randomColorVar7, randomColorVar8, randomColorVar11;
var mainInterval = setInterval(changeSpanNumbers, 30);
function changeSpanNumbers() {
	changeGHVariables();
	changeSpanInnerHtml();
	changeSpanColors();
}
function changeGHVariables() {
	agh = Math.floor((Math.random() * 9));
	bgh = Math.floor((Math.random() * 9));
	cgh = Math.floor((Math.random() * 9));
	dgh = Math.floor((Math.random() * 9));
	egh = Math.floor((Math.random() * 9));
	fgh = Math.floor((Math.random() * 9));
	igh = Math.floor((Math.random() * 9));
	jgh = Math.floor((Math.random() * 9));
	kgh = Math.floor((Math.random() * 9));
	lgh = Math.floor((Math.random() * 9));
	mgh = Math.floor((Math.random() * 9));
}
function changeSpanInnerHtml() {
	document.getElementById("rngnspan1").innerHTML = agh;
	document.getElementById("rngnspan2").innerHTML = bgh;
	document.getElementById("rngnspan3").innerHTML = cgh;
	document.getElementById("rngnspan4").innerHTML = dgh;
	document.getElementById("rngnspan5").innerHTML = egh;
	document.getElementById("rngnspan6").innerHTML = fgh;
	document.getElementById("rngnspan7").innerHTML = igh;
	document.getElementById("rngnspan8").innerHTML = jgh;
	document.getElementById("rngnspan9").innerHTML = kgh;
	document.getElementById("rngnspan10").innerHTML = lgh;
	document.getElementById("rngnspan11").innerHTML = mgh;
}
function changeSpanColors() {
	randomColorGenerators();
	document.getElementById("rngnspan1").style.color = "#"+ randomColorVar1;
	document.getElementById("rngnspan2").style.color = "#"+ randomColorVar2;
	document.getElementById("rngnspan3").style.color = "#"+ randomColorVar3;
	document.getElementById("rngnspan4").style.color = "#"+ randomColorVar4;
	document.getElementById("rngnspan5").style.color = "#"+ randomColorVar5;
	document.getElementById("rngnspan6").style.color = "#"+ randomColorVar6;
	document.getElementById("rngnspan7").style.color = "#"+ randomColorVar7;
	document.getElementById("rngnspan8").style.color = "#"+ randomColorVar8;
	document.getElementById("rngnspan9").style.color = "#"+ randomColorVar9;
	document.getElementById("rngnspan10").style.color = "#"+ randomColorVar10;
	document.getElementById("rngnspan11").style.color = "#"+ randomColorVar11;
}
function randomColorGenerators() {
	randomColorVar1 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar2 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar3 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar4 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar5 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar6 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar7 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar8 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar9 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar10 = (Math.random().toString(16) + '000000').slice(2, 8);
	randomColorVar11 = (Math.random().toString(16) + '000000').slice(2, 8);
}
function printRandomColorVar() {
	console.log(randomColorVar1);
	console.log(randomColorVar2);
	console.log(randomColorVar3);
	console.log(randomColorVar4);
	console.log(randomColorVar5);
	console.log(randomColorVar6);
	console.log(randomColorVar7);
	console.log(randomColorVar8);
	console.log(randomColorVar9);
	console.log(randomColorVar10);
	console.log(randomColorVar11);
}
function changeToCorrectCode() {
	agh = 4;
	bgh = 6;
	cgh = 2;
	dgh = 9;
	egh = 1;
	fgh = 0;
	igh = 5;
	jgh = 3;
	kgh = 7;
	lgh = 9;
	mgh = 6;
}
function changetoCorrectColor() {
	document.getElementById("rngnspan1").style.color = "#FF0000";
	document.getElementById("rngnspan2").style.color = "#FF9900"; 
	document.getElementById("rngnspan3").style.color = "#99CC00";
	document.getElementById("rngnspan4").style.color = "#009933";
	document.getElementById("rngnspan5").style.color = "#00CC99";
	document.getElementById("rngnspan6").style.color = "#00CCFF";
	document.getElementById("rngnspan7").style.color = "#6600FF";
	document.getElementById("rngnspan8").style.color = "#CC00CC";
	document.getElementById("rngnspan9").style.color = "#FF3399";
	document.getElementById("rngnspan10").style.color = "#FF0000";
	document.getElementById("rngnspan11").style.color = "#FF9900";
}
function secretFunctionYouCheatedToUse() {
	clearInterval(mainInterval)
	changetoCorrectColor();
	changeToCorrectCode();
	changeSpanInnerHtml();
	changetoCorrectColor();
}