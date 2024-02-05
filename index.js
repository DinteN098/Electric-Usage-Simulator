
var currentItems = [];


//event listener when the add button is pressed
$("#addButton").click(function(event){
    // Avoid refreshing page if the user presses the add button
    event.preventDefault();

    // Value for name, electric usage, and electric measurement
    var itemName = $("#elecName").val();
    var itemUsage = $("#elecUsage").val();
    var electricMeasurement = $("#measurements").val();
    currentItems.push(parseInt(itemUsage))

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

//THIS IS THE FUNCTION FOR THE LIGHT MODE AND DARK MODE
const toggle = document.querySelector(".toggle input");

toggle.addEventListener('click', () => {
    
    const switch_label = document.querySelector(".toggle .switch");
    switch_label.textContent = toggle.checked ? "ON" : "OFF";

    if (toggle.checked == true){
        document.body.classList.add("dark_mode");

        //only update current usage when the switch is on
        var currentUsage = 0;
        
        //add up all current power on the currentItems list to the currentUsage list
        for (var i = 0; i < currentItems.length; i++){
                currentUsage = currentUsage + currentItems[i];
            }
        
        //show the current usage
        $("#current-electrity").text(currentUsage);
        }
    else if (toggle.checked == false){
        document.body.classList.remove("dark_mode");
        //when switch is off then reset the currentUsage
        currentUsage = 0;
        $("#current-electrity").text(currentUsage);
    }

});


