//event listener when the add button is pressed
$("#addButton").click(function(){
    //avoid refreshing page if user presses add button
    event.preventDefault();

    //value for name, electric usage, and electric measurement
    var itemName = $("#elecName").val();
    var itemUsage = $("#elecUsage").val();
    var ElectricMeasurement = $("#measurements").val();

    //making sure we get user's input
    if (itemName == "" || itemUsage == ""){
        alert("You need a name and its electric usage.")
    }
    else{
    //adding all the above values into a string
    var addItem = $("<li>").text(`${itemName} --${itemUsage} ${ElectricMeasurement}`);
    
    //add the string from above into the unlisted list
    $("#listOfItems").append(addItem);

    //clearing the text boxes
    $("#elecName").val('');
    $("#elecUsage").val('');
    }


})