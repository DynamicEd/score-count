// What game are we playing?
let game = "Basketball"
let gameTxt = document.getElementById("sport-type")
gameTxt.textContent = game

// How many points is each button?
let point_count_1 = 1
let point_count_2 = 3
let point_count_3 = 5

// Get Text
let homeScoreText = document.getElementById("score-home")
let awayScoreText = document.getElementById("score-away")

// Get the text for each point amount
// Can't be the same id
// let incNum1A = document.getElementById("increment-1a")
// let incNum2A = document.getElementById("increment-2a")
// let incNum3A = document.getElementById("increment-3a")
// let incNum1B = document.getElementById("increment-1b")
// let incNum2B = document.getElementById("increment-2b")
// let incNum3B = document.getElementById("increment-3b")
// console.log(incNum1A.textContent)

let incNum1A = document.getElementsByClassName("incNum1")[0]
let incNum2A = document.getElementsByClassName("incNum2")[0]
let incNum3A = document.getElementsByClassName("incNum3")[0]
let incNum1B = document.getElementsByClassName("incNum1")[1]
let incNum2B = document.getElementsByClassName("incNum2")[1]
let incNum3B = document.getElementsByClassName("incNum3")[1]
// console.log(incNum3A.textContent)

// Set the button text for each point amount
incNum1A.textContent = "+" + point_count_1 // Home
incNum2A.textContent = "+" + point_count_2
incNum3A.textContent = "+" + point_count_3
incNum1B.textContent = "+" + point_count_1 // Away
incNum2B.textContent = "+" + point_count_2
incNum3B.textContent = "+" + point_count_3

let homeScoreNum = 0
let awayScoreNum = 0

// Increase Score for Home
function incHome_1() {
    let count = point_count_1
    homeScoreNum += count
    console.log("Home Score: " + homeScoreNum)
    homeScoreText.textContent = homeScoreNum
    scoreCheck()
}

function incHome_2() {
    let count = point_count_2
    homeScoreNum += count
    console.log("Home Score: " + homeScoreNum)
    homeScoreText.textContent = homeScoreNum
    scoreCheck()
}

function incHome_3() {
    let count = point_count_3
    homeScoreNum += count
    console.log("Home Score: " + homeScoreNum)
    homeScoreText.textContent = homeScoreNum
    scoreCheck()
}

// Increase Score for Away
function incAway_1() {
    let count = point_count_1
    awayScoreNum += count
    console.log("Away Score: " + awayScoreNum)
    awayScoreText.textContent = awayScoreNum
    scoreCheck()
}

function incAway_2() {
    let count = point_count_2
    awayScoreNum += count
    console.log("Away Score: " + awayScoreNum)
    awayScoreText.textContent = awayScoreNum
    scoreCheck()
}

function incAway_3() {
    let count = point_count_3
    awayScoreNum += count
    console.log("Away Score: " + awayScoreNum)
    awayScoreText.textContent = awayScoreNum
    scoreCheck()
}

// Show highest score
// Check which team is greater
let iconScore = document.getElementById("icon")
let topScore = document.getElementById("top-score")
console.log(topScore.textContent)

function scoreCheck() {
    iconScore.classList.remove("hidden")
    if (homeScoreNum > awayScoreNum) {
        // Add pts-high class to score-home
        topScore.textContent = "Home is Winning"
        console.log("Home Winning")
        awayScoreText.classList.remove("pts-high")
        homeScoreText.classList.add("pts-high")
    } else if (homeScoreNum < awayScoreNum) {
        // Add pts-high class to score-away
        topScore.textContent = "Away is Winning"
        console.log("Away Winning")
        homeScoreText.classList.remove("pts-high")
        awayScoreText.classList.add("pts-high")
    } else {
        // Remove pts-high class from score-home and score-away
        topScore.textContent = "Tied"
        console.log("Team Tied")
        homeScoreText.classList.remove("pts-high")
        awayScoreText.classList.remove("pts-high")
    }
}

function newGame() {
    console.log("New Game")
    // Reset score to 0
    homeScoreNum = 0
    awayScoreNum = 0
    // Reset text to --
    homeScoreText.textContent = "--"
    awayScoreText.textContent = "--"
    // Top Score
    iconScore.classList.add("hidden")
    topScore.textContent = ""
    homeScoreText.classList.remove("pts-high")
    awayScoreText.classList.remove("pts-high")
}