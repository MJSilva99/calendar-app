// Function to display the current day
function displayCurrentDay() {
    var currentDay = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDay);
}
displayCurrentDay();

// Loop to create time blocks for each hour from 9 to 17
for (var currentHour = 9; currentHour <= 17; currentHour++) {
    createTimeBlock(currentHour);
}

// Function to create a time block for a specific hour
function createTimeBlock(currentHour) {
    // Create a new div element with the 'time-block' class and a unique id
    var timeBlock = $("<div>").addClass("row time-block").attr("id", "hour-" + currentHour);
    
    // Get the formatted hour using dayjs
    var hour = dayjs().hour(currentHour).format("hA");
    
    // Create a textarea element with the 'description' class and a unique id
    var textArea = $("<textarea>").addClass("col-md-10 description").attr("id", "hour-" + currentHour);
    
    // Created a button element with the 'saveBtn' class and an icon
    var saveBtn = $("<button>").addClass("col-md-1 saveBtn").append($("<i>").addClass("fas fa-save"));
    
    // Created a div element to display the hour
    var hourBlock = $("<div>").addClass("col-md-1 hour").text(hour);

    // Append the hour, textarea, and button to the time block
    timeBlock.append(hourBlock);
    timeBlock.append(textArea);
    timeBlock.append(saveBtn);

    textArea.val(localStorage.getItem("hour-" + currentHour) || "");

  // Save to local storage
  saveBtn.click(function () {
      localStorage.setItem("hour-" + currentHour, textArea.val());

      console.log(hour, ":", localStorage.getItem("hour-" + currentHour));
  });

    $(".container").append(timeBlock);

// Set the color based on the hour of the day
if (currentHour < dayjs().hour()) {
    timeBlock.addClass("past");
} else if (currentHour === dayjs().hour()) {
    timeBlock.addClass("present");
} else {
    timeBlock.addClass("future");
}
}