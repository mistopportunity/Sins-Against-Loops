/* From the shadows of the dark past,
something that is only slightly objectively better presents itself. */
const seizureInducingDiv = document.body.children[0];

/* A flag because of the unlikely, one-in-a-millionth 
chance the interval code runs after the interval 
is cleared and the values are set correctly.

If the div is clicked faster than hardware latency
and human reflexes even allows to be possible,
allocating this variable with no initial value
is more efficent than setting the value to false. */
let seizureIntervalExecuting;

/* JavaScript probably handles allocation in an odd way,
so I'm going to initialize the variable in the global scope
because this object will be used many times. */
let htmlBuffer = new String();

//Because redundancy sucks.
function randomInt(max) {
	return Math.floor(Math.random() * max);
}

//Create and start seizureInterval.
const seizureInterval = setInterval(function() { 

	/* It's cheaper to set both states of the flag in this function
	and let this code hypothetically run one extra time
	than to check for the flag and do a conditional each iteration 
	-- at the cost of a while(true) loop running for the 
	time it takes to execute this code. */
	seizureIntervalExecuting = true;

	/* Sweet, competent bliss.
	Ironically, all things considered,
	it isn't that bad of an idea to unroll this loop.
	Though, this is a time for repent, not invention. */
	for(var i = 0;i<11;i++) {

		//I don't think there is a better way to build strings in JavaScript. Whelp.
		htmlBuffer += "<span style='color:rgb(" + 
		randomInt(255) + "," + randomInt(255) + "," + randomInt(255)
		 + ")'>" + randomInt(9) + "</span>";

	}
	seizureInducingDiv.innerHTML = htmlBuffer;

	//This should be set immediately after HTML is no longer being modified to save a much time as possible.
	seizureIntervalExecuting = false;

	//Clear the buffer when we are done so we don't have to at the start.
	htmlBuffer = new String(); 

},30);

//Stop seizureInterval and set correct digits to seizureInducingDiv.
seizureInducingDiv.onclick = function() {
	clearInterval(seizureInterval);

	/* This is awful, but I know that. It's controlled awful.
	The most it'll ever run for is less than 1 millisecond. */
	while(seizureIntervalExecuting);

	/* The significance of this number is lost on me.
	It may as well be the programmer's equivilent of 666
	after seeing what atrocities it has previously caused.
	*/
	seizureInducingDiv.innerHTML = "46291053796";
};

/* All in all, I think the real software horror is JavaScript in HTML land.
It allowed beginners like me to sin the horrible sins that I sinned with
no consequences for my actions.

My advise is, learn to speak before you can write.

The end. */
