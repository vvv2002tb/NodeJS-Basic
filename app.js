console.log("Basic NodeJs");

// setTimeout(function() {
//     console.log("Server started after three seconds");
// }, 3000);

// var time = 0;

// var timer = setInterval(function() {
//     time += 2;
//     console.log("Server started after two seconds and auto restart", time);
//     if (time > 4) {
//         clearInterval(timer);
//     }
// }, 2000)




function callFunction () {
    sayGoodBye();
    sayHello();
}





// normal function gọi ở đâu cũng đc 
function sayGoodBye() {
    console.log("Goodbye!");
}

// sayGoodBye();


// function Expression 

// sayHello(); error

const sayHello = function() {
    console.log("Hello!");
};

// sayHello(); // chỉ được sử dụng sau khi khai báo 


callFunction(); // nếu để callFunction trên đầu thì error, sau sayHello thì oke