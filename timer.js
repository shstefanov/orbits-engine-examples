const Timer = require("./lib/Timer");



const timer_options = {
	rel_start: new Date('2021-08-14T13:14:50.564Z').getTime() * -1,
	rel_speed: 1,
	
	// Should match on start
	rel_anchor: new Date('2073-03-29T09:10:49.895Z').getTime(),
	rel_now:    new Date('2073-03-29T09:10:49.895Z').getTime(),
};

const timer = new Timer(timer_options);



timer.start(200);



// timer.interval(1000, (time, cancel) => {
// 	console.log("INTERVAL 1000");
// });

// timer.interval(2030, (time, cancel) => console.log("INTERVAL 2030"));
// timer.period(10000, (time, phase, cancel) => console.log("PERIOD 10000", phase));
// timer.at( Date.now() + 1000 * 5, (time, cancel) => console.log("AT +5 sec"));
// timer.transition( 500, Timer.EASE_IN_QUINT, (value, cancel) => console.log("TRANSITION: ", value));


// timer.relInterval(2000, (time, cancel) => console.log("REL_INTERVAL 2000"));

timer.relPeriod(3000, (time, phase, cancel) => console.log("REL_PERIOD 3000", phase));



setTimeout(() => timer.setRelSpeed(3, timer.state.rel_now + 2000), 5000);


// timer.relAt(
// 	timer_options.rel_now + 5000,
// 	(time) => console.log("REL_At +3000")
// );





// timer.stop()

// timer.period(2000, (time, phase, cancel) => {
// 	console.log("PERIOD 2000", phase);
// });


// const three_years = 1000 * 60 * 60 * 24 * 365 * 3;

// timer.period(three_years, (time, phase, cancel) => {
// 	console.log("PERIOD three_years", phase);
// });