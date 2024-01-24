$("#addButton").click(function(event){
    // Avoid refreshing page if the user presses the add button
    event.preventDefault();

    // Value for name, electric usage, and electric measurement
    var itemName = $("#elecName").val();
    var itemUsage = $("#elecUsage").val();
    var electricMeasurement = $("#measurements").val();

    // Validate if itemUsage is a valid integer
    if (!Number.isInteger(Number(itemUsage))) {
        alert("Electric usage must be an integer.");
    } else {
        // Making sure we get the user's input
        if (itemName === "" || itemUsage === "") {
            alert("You need a name and its electric usage.");
        } else {
            // Adding all the above values into a string
            var addItem = $("<li>").text(`${itemName} --${itemUsage} ${electricMeasurement}`);
            
            // Add the string from above into the unordered list
            $("#listOfItems").append(addItem);

            // Clearing the text boxes
            $("#elecName").val('');
            $("#elecUsage").val('');
        }
    }
});
