// couldnt figure out how to link this JS to my html, the code is baked intot he html bc of that

function RandomIntFromInterval(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var computerNum
var gem1
var gem2
var gem3
var gem4

var totalScore

var wins = 0
var losses = 0

ResetVars()


$(".gem").click(function () {
    var gemVal = parseInt($(this).attr("value"))
    totalScore = Number(totalScore + gemVal)

    $("#totalScore").text(totalScore)

    if (totalScore == computerNum) {
        YouWin()
    } else if (totalScore > computerNum) {
        YouLose()
    }
})


function YouWin() {
    wins++
    $("#resultMsg").text("You won!!")
    $("#wins").text("Wins: " + wins)
    ResetVars()
}

function YouLose() {
    losses++
    $("#resultMsg").text("You lost!!")
    $("#losses").text("Losses: " + losses)
    ResetVars()
}

function ResetVars() {
    computerNum = RandomIntFromInterval(19, 120)
    gem1 = RandomIntFromInterval(1, 12)
    gem2 = RandomIntFromInterval(1, 12)
    gem3 = RandomIntFromInterval(1, 12)
    gem4 = RandomIntFromInterval(1, 12)

    totalScore = 0

    $(".gem1").attr("value", gem1)
    $(".gem2").attr("value", gem2)
    $(".gem3").attr("value", gem3)
    $(".gem4").attr("value", gem4)

    $("#randonNum").text(computerNum)
    $("#totalScore").text(0)
}