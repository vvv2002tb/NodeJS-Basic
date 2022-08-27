console.log("Basic NodeJs");

// setTimeout(function() {
//     console.log("Server started after three seconds");
// }, 3000);

var time = 0;

var timer = setInterval(function() {
    time += 2;
    console.log("Server started after two seconds and auto restart", time);
    if (time > 10) {
        clearInterval(timer);
    }
}, 2000)