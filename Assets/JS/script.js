
//Sets the HTML document as immediately ready for the function to follow
$(document).ready(function () {
    //Initiates the local storage using the save button listener
    $(".saveBtn").on("click", function () {
        //Retreives the values from HTML so they can be manipulated with JS
        var time = $(this).parent().attr("id")
        var desc = $(this).siblings(".description").val()

        //This saves the time and desc to the local storage
        localStorage.setItem(time, desc);
    })
   
    function main() {
        //Creates a variable that lets the function know the current time so that the color of block can be manipulated
        var currentTime = moment().hour()

        //Loop feature
        $(".time-block").each(function () {
            //Another variable created that allows JS to manipulate the classes 
            var blockTime = parseInt($(this).attr("id").split("hour")[1])

            //Checks real life time vs block time and removes or adds classes to change block
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //Calls the items from the local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    main();
})

//This uses the moment feature to set the day of the week and the date in the HTML
var currentDayDate = moment().format('dddd, MMM Do YYYY');
//Using jQuery to call the HTML ID of currentDate
$("#currentDate").html(currentDayDate);