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
hourFive = 17

var date = moment().format("[Today is: ] dddd, MMMM Do");
displayDay.text(date)


function compareHour() {
    if (currentHour > hourNine) {
        $(".hour-nine").addClass("past")
    } else if (currentHour == hourNine) {
        $(".hour-nine").addClass("present")
    } else {
        $(".hour-nine").addClass("future")
    }

    if (currentHour > hourTen) {
        $(".hour-ten").addClass("past")
    } else if (currentHour == hourTen) {
        $(".hour-ten").addClass("present")
    } else {
        $(".hour-ten").addClass("future")
    }

    if (currentHour > hourEleven) {
        $(".hour-eleven").addClass("past")
    } else if (currentHour == hourEleven) {
        $(".hour-eleven").addClass("present")
    } else {
        $(".hour-eleven").addClass("future")
    }

    if (currentHour > hourTwelve) {
        $(".hour-twelve").addClass("past")
    } else if (currentHour == hourTwelve) {
        $(".hour-twelve").addClass("present")
    } else {
        $(".hour-twelve").addClass("future")
    }

    if (currentHour > hourOne) {
        $(".hour-one").addClass("past")
    } else if (currentHour == hourOne) {
        $(".hour-one").addClass("present")
    } else {
        $(".hour-one").addClass("future")
    }

    if (currentHour > hourTwo) {
        $(".hour-two").addClass("past")
    } else if (currentHour == hourTwo) {
        $(".hour-two").addClass("present")
    } else {
        $(".hour-two").addClass("future")
    }

    if (currentHour > hourThree) {
        $(".hour-three").addClass("past")
    } else if (currentHour == hourThree) {
        $(".hour-three").addClass("present")
    } else {
        $(".hour-three").addClass("future")
    }

    if (currentHour > hourFour) {
        $(".hour-four").addClass("past")
    } else if (currentHour == hourFour) {
        $(".hour-four").addClass("present")
    } else {
        $(".hour-four").addClass("future")
    }

    if (currentHour > hourFive) {
        $(".hour-five").addClass("past")
    } else if (currentHour == hourFive) {
        $(".hour-five").addClass("present")
    } else {
        $(".hour-five").addClass("future")
    }
}

function setLocal() {
    localStorage.setItem("9AM", hourNine.val);
}

function getLocal() {
    $(".hour-nine").text = localStorage.getItem("9AM")
}

compareHour()
setLocal()
getLocal()