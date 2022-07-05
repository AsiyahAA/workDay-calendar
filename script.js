var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMM Do, YYYY"));

var currentHour = moment().format("H");

var saveBtn = document.querySelectorAll(".saveBtn");

var saveEvent = JSON.parse(localStorage.getItem("event"))||[];

function init() {
    for (let i = 9; i < 18; i++) {

        var timeSlot = document.getElementById(i);
        console.log(timeSlot.id);

        if(currentHour==parseInt(timeSlot.id)) {
            timeSlot.classList.add("present");         
        }else if(currentHour<parseInt(timeSlot.id)) {
            timeSlot.classList.add("future");
        }else if(currentHour>parseInt(timeSlot.id)) {
            timeSlot.classList.add("past");
        }     
    }

}
init();

for (let i = 0; i < saveBtn.length; i++) {

    saveBtn[i].addEventListener("click", function save(event) {
        console.log(event.target.previousElementSibling.value);
        var text = event.target.previousElementSibling.value
        saveEvent[event.target.previousElementSibling.id] = text
    
        localStorage.setItem("event",JSON.stringify(saveEvent));
    })
}
for (let i = 0; i < saveEvent.length; i++) {
    if(saveEvent[i] != null) {
        document.getElementById(i).value = saveEvent[i]
    }   
}