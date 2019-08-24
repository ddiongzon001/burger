$(document).on("click", "#submit", function(){
    alert( `this was clicked`);

    let newBurger = $(`#usersBurger`).val().trim();

    console.log(newBurger);

    // $.post("/api/burgers",)
})