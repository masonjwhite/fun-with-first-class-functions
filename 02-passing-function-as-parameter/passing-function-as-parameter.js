// Just a simple function 🤷‍♀️
function logDone() {
	console.log('Done!');
}

/*
 * Nowww we're gonna get crazy 🤯
 * The 3rd argument to "add" is "cb" (a callback function)
 * In this example its going to be our "logDone" function
 * The "add" function will log "done!" after its logged x + y
 */
function add(x, y, cb) {
	console.log(x + y);

	// Notice how we're calling "cb" here. Because "cb" is just a function
	cb();
}

/*
 * Finally, notice how we pass the "logDone" function as a parameter
 * "logDone" gets mapped to the "cb" parameter of "add"
 */
add(2, 2, logDone);
