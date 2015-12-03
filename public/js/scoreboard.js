var table = document.getElementById('scoreboard')

fetch('/scores')
	.then(function (res) {
		res.json().then(function (scoreboard) {
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
	})