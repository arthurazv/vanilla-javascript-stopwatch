const meter = document.getElementById("meter");

let seconds = 0;
let secondsParse = "";
let interval;

meter.textContent = "0";

const reset = () => {
	seconds = 0;
	meter.textContent = String(seconds);
}

const stop = () => {
	clearInterval(interval);
	changeTo("start");
}

const start = () => {
	changeTo("stop");
	interval = setInterval(() => addMilliseconds(), 9.3);
}

let stopwatch = start;

const addMilliseconds = () => {
	seconds += 0.01;
	secondsParse = String(seconds.toFixed(2));
	meter.textContent = secondsParse;
}

const changeTo = ( action ) => {
	if( action == "stop" ) {
		document.getElementById("main-btn").textContent = "Stop";
		document.getElementById("main-btn").className = "btn-stop";
		stopwatch = stop;
	} else {
		document.getElementById("main-btn").textContent = "Start";
		document.getElementById("main-btn").className = "btn-start";
		stopwatch = start;
	}
}
