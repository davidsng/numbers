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

<<<<<<< HEAD
var playerName = window.prompt("Please Enter Your Name. Thanks Bro")
=======
// var playerName = window.prompt("Please Enter Your Name. Thanks Bro")
// checkName(playerName)
>>>>>>> jsstrn/master
var getPlayerName = document.getElementById('playerName')
getPlayerName.textContent = playerName


 
function countdown() {
	var seconds;
	var temp;
	seconds = document.getElementById('countdown').innerHTML;
	seconds = parseInt(seconds, 10);

	if (seconds == 1) {
	  temp = document.getElementById('countdown');
	  temp.innerHTML = "0";
	  return;
	}

	seconds--;
	temp = document.getElementById('countdown');
	temp.innerHTML = seconds;
	timeoutMyOswego = setTimeout(countdown, 1000);
}
 
  countdown();

function search(ele) {
    if(event.keyCode == 13) {
        var getFirst = parseInt(document.getElementById('first').textContent)
        var getSecond = parseInt(document.getElementById('second').textContent)
        var total = getFirst + getSecond
        console.log(total)
        if (total === parseInt(ele.value)){
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

function RandomNum () {
	var firstNum = Math.floor((Math.random() * 10) + 1)
<<<<<<< HEAD
	var secondNum = Math.floor((Math.random() * 10) + 1)	
=======
	var secondNum = Math.floor((Math.random() * 10) + 1)

>>>>>>> jsstrn/master
	var getFirst = document.getElementById('first')
	getFirst.innerHTML = "<span id='first'>"+firstNum + "</span>"
	var getSecond = document.getElementById('second')
	getSecond.innerHTML = "<span id='second'>"+secondNum + "</span>"
<<<<<<< HEAD
=======

>>>>>>> jsstrn/master
	var total = firstNum + secondNum
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
