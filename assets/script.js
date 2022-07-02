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

var userInput9 = $(".hour-nine");
var userInput10 = $(".hour-ten");
var userInput11 = $(".hour-eleven");
var userInput12 = $(".hour-twelve");
var userInput1 = $(".hour-one");
var userInput2 = $(".hour-two");
var userInput3 = $(".hour-three");
var userInput4 = $(".hour-four");
var userInput5 = $(".hour-five");

$(".btn9").click(function() {
    localStorage.setItem("9AM", userInput9.val())
});

$(".btn10").click(function() {
    localStorage.setItem("10AM", userInput10.val())
});

$(".btn11").click(function() {
    localStorage.setItem("11AM", userInput11.val())
});

$(".btn12").click(function() {
    localStorage.setItem("12PM", userInput12.val())
});

$(".btn1").click(function() {
    localStorage.setItem("1PM", userInput1.val())
});

$(".btn2").click(function() {
    localStorage.setItem("2PM", userInput2.val())
});

$(".btn3").click(function() {
    localStorage.setItem("3PM", userInput3.val())
});

$(".btn4").click(function() {
    localStorage.setItem("4PM", userInput4.val())
});

$(".btn5").click(function() {
    localStorage.setItem("5PM", userInput5.val())
});

function getLocal() {
    var listOfKeys = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var listOfTimeKeys = [".hour-nine", ".hour-ten", ".hour-eleven", ".hour-twelve", ".hour-one", ".hour-two", ".hour-three", ".hour-four", ".hour-five"];

    for (var i = 0; i < listOfKeys.length; i++){
            $(listOfTimeKeys[i]).html(localStorage.getItem(listOfKeys[i]));
    }
}



getLocal()
compareHour()