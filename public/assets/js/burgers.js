// On click function for adding new burgers to the page
$(document).on("click", "#submit", function(){

    // sets the new burgers name into an object
    let newBurger = {
        name: $(`#usersBurger`).val().trim()
    }

    // passes that object into a post AJAX call
    $.post("/api/burgers", newBurger, function(){
    })
    // reloads the page so that the user can see the new burger displayed
    location.reload();
})