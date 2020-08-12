const { ajax } = require("jquery");

function validateAnswer(row, col, res, operator) {
  switch (operator) {
    case "multiplication":
      return row * col === res
    case "addition":
      return row + col === res
  }
}

function formatMinSec(elapsedTime) {
  var minutes = Math.floor((elapsedTime% (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsedTime% (1000 * 60)) / 1000);
  return `${minutes} m :  ${seconds} s`
}

function callUpdateHighscores(highscores) {
  console.log(highscores)
  $(".highscore_row").remove()
  rows = highscores.map(highscore => `
    <tr>
      <td>${ highscore.player_id }</td>
      <td>${highscore.game_time}</td>
    </tr>
    `
  ).join('')
  $(".highscores").append(rows);

}

function callFuncToUpdateLeaderBoard() {
  let gameId = $('.gameEvent').data().game_id
  $.ajax({
    url: `/leaderboards/${gameId}`,
    type: 'Get',
    success: function (data) {
      callUpdateHighscores(data)
      alert(JSON.stringify(data))
      // alert(`Yay, you have finished the game in ${finishTime}`)
    }
    , error: function (jqXHR, textStatus, err) {
      alert('text status ' + textStatus + ', err ' + err)
    }
  })
}

jQuery(() => { 
  let complete = false
  let dataSent
  let finishTime = null
  let startTime = Date.now()
  setInterval(function () {
    if (complete) {
      if (!finishTime) {
        finishTime = formatMinSec(Date.now() - startTime)
        clearInterval()
      }
      $(".timer").text(finishTime)
      $(".highscores")
    } else {
      let elapsedTime = Date.now() - startTime
      $(".timer").text(formatMinSec(elapsedTime))
    }
  }, 100);

  $(".answer").blur(function () {
    const $this = $(this)
    const value = parseInt($this.val())
    const row = $this.data("row")
    const col = $this.data("col")
    let correct = validateAnswer(row, col, value, "multiplication")
    $this.removeClass("answer-correct answer-incorrect")
    $this.addClass(correct ? "answer-correct" : "answer-incorrect")
    complete = $('.answer-correct').length === 2
    if (complete && !dataSent) {
      let eventId = $('.gameEvent').data().event_id
      $.ajax({ 
        url: `/events/${eventId}`,
        type: 'Patch',
        success: function(data){
          callFuncToUpdateLeaderBoard()
          // alert(`Yay, you have finished the game in ${finishTime}`)
        }
        , error: function(jqXHR, textStatus, err){
          alert('text status '+textStatus+', err '+err)
        }
      })
      dataSent = true
    }
  })
})
