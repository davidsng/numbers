//Get Player Name
var playerName = prompt("Please Enter Your Name. Thanks Bro")
checkName(playerName)
var getPlayerName = document.getElementById('playerName')
getPlayerName.textContent = playerName

//This only does once - need to find out how to do it for multiple entries
function checkName (name) {
	if (name == null || name == "")
		var playerName = prompt("Please Enter Your Name. Thanks Bro")
}

//RESET GAME
var resetButton = document.querySelector('.btn-warning')
resetButton.addEventListener('click', function () {
	window.location.reload(false)
})

function RandomNum () {
	var firstNum = Math.floor((Math.random() * 10) + 1)
	var secondNum = Math.floor((Math.random() * 10) + 1)	
	console.log(firstNum)
	console.log(secondNum)
}
RandomNum()
RandomNum()