var displayDay = $("#currentDay")

var hourNine = $("#hour-nine")
var hourTen = $("#hour-ten")
var hourEleven = $("#hour-eleven")
var hourTwelve = $("#hour-twelve")
var hourOne = $("#hour-one")
var hourTwo = $("#hour-two")
var hourThree = $("#hour-three")
var hourFour = $("#hour-four")
var hourFive = $("#hour-five")

var currentHour = moment().hour();

hourNine = 9
hourTen = 10
hourEleven = 11
hourTwelve = 12
hourOne = 13
hourTwo = 14
hourThree = 15
hourFour = 16

var date = moment().format("[Today is: ] dddd, MMMM Do");
displayDay.text(date)


function compareHour() {
    if (currentHour > hourNine) {
        $("#hour-nine").addClass("past")
        console.log("hi")
    } else if (currentHour == hourNine) {
        $("#hour-nine").addClass("present")
    } else {
        $("#hour-nine").addClass("future")
    }
}

compareHour()
