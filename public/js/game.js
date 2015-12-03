var table = document.getElementById('scoreboard')

fetch('/scores')
  .then(res => res.json())
  .then(scoreboard => {
    scoreboard.forEach(function (score) {
      var tr = document.createElement('tr')
      var tdName = document.createElement('td')
      var tdScore = document.createElement('td')
      tdName.textContent = score.playerName
      tdScore.textContent = score.score
      tr.appendChild(tdName)
      tr.appendChild(tdScore)
      table.appendChild(tr)
    })
  })

var playerName = window.prompt("Please Enter Your Name. Thanks Bro")
checkName(playerName)
var getPlayerName = document.getElementById('playerName')
getPlayerName.textContent = playerName

function checkName (name) {
	if (name == null || name == "")
		var playerName = prompt("Please Enter Your Name. Thanks Bro")
}



function RandomNum () {
	var firstNum = Math.floor((Math.random() * 10) + 1)
	var secondNum = Math.floor((Math.random() * 10) + 1)

	var getFirst = document.getElementById('first')
	getFirst.innerHTML = "<span id='first'>"+firstNum + "</span>"

	var getSecond = document.getElementById('second')
	getSecond.innerHTML = "<span id='second'>"+secondNum + "</span>"

	var total = firstNum + secondNum
	var submitButton = document.querySelector('.btn-primary')
	// submitButton.addEventListener('click', function() {
	// 	var getAns = document.getElementById('answer').value
	// 	console.log(getAns)
	// 	getAns1 = parseInt(getAns)
	// 	if(total === getAns1) {
	// 		updateScore()
	// 		document.getElementById('answer').value = ""
	// 		RandomNum()
	// 	}
	// })
	submitButton.onclick = function (){
		var getAns = document.getElementById('answer').value
		getAns1 = parseInt(getAns)
		//Correct Answer
		if(total === getAns1) {
			document.getElementById('answer').value = ""
			document.getElementById('score').value = ""
			updateScore()
			RandomNum()
		} else {
			document.getElementById('answer').value = ""
			document.getElementById('score').value = ""
			reduceScore()
			RandomNum()
		}

	}

}

function resetGame() {
	var resetButton = document.querySelector('.btn-warning')
	resetButton.addEventListener('click', function () {
	window.location.reload(false)
	})
}

function updateScore() {
	var displayScore = document.getElementById('score')
	var score = parseInt(displayScore.textContent)
	var score = score + 20
	displayScore.innerHTML = "<div>" + score + "</div>"
}
function reduceScore() {
	var displayScore = document.getElementById('score')
	var score = parseInt(displayScore.textContent)
	var score = score - 20
	displayScore.innerHTML = "<div>" + score + "</div>"
}

RandomNum()
resetGame()
