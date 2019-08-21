$(document).on("click", "#submit", function(){
    alert( `this was clicked`);
})

var createGreeting = function(message, name){
    return message + ", " + name + "!"
}

var createGreeting = (message, name) => {
    return message + ", " + name + "!"
}

var createGreeting = (message, name) => message + ", " + name + "!";

var greetOne = greetings => console.log(greetings)
