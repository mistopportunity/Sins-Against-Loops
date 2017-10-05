const seizureInducingDiv = document.body.children[0];
let seizureIntervalExecuting;
let htmlBuffer = new String();
function randomInt(max) {
	return Math.floor(Math.random() * max);
}
const seizureInterval = setInterval(function() { 
	seizureIntervalExecuting = true;
	for(var i = 0;i<11;i++) {
		htmlBuffer += "<span style='color:rgb(" + 
		randomInt(255) + "," + randomInt(255) + "," + randomInt(255)
		 + ")'>" + randomInt(9) + "</span>";

	}
	seizureInducingDiv.innerHTML = htmlBuffer;
	seizureIntervalExecuting = false;
	htmlBuffer = new String(); 

},30);
seizureInducingDiv.onclick = function() {
	clearInterval(seizureInterval);
	while(seizureIntervalExecuting);
	seizureInducingDiv.innerHTML = "46291053796";
};
