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

function formatTime(time) {
  minutes = Math.floor(time / 60) || 0
  seconds =  time % 60
  // return `  ${minutes} : ${seconds}`
  return [minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .join(":")
}

function callUpdateHighscores(highscores) {
  $(".highscore_row").remove()

  rows = highscores.sort((a, b) => a.game_time - b.game_time).map((highscore, index) => `
    <tr class="highscore_row">
      <td>${index}</td>
      <td>${highscore.player }</td>
      <td>${formatTime(highscore.game_time)}</td>
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
    const operator = $this.data("game_type")
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
        }
        , error: function(jqXHR, textStatus, err){
          alert('text status '+textStatus+', err '+err)
        }
      })
      dataSent = true
    }
  })
})
