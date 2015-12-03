function createNewPlayer (newPlayerName, newPlayerScore, method) {
  var newPlayer = {
    playerName: newPlayerName,
    score: newPlayerScore
  }

  fetch('/scores', {
    method: method,
    body: JSON.stringify(newPlayer),
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  })
}
