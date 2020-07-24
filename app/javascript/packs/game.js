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

jQuery(() => { 
  let complete = false
  let finishTime = null
  let startTime = Date.now()
  setInterval(function () {
    if (complete) {
      if (!finishTime) {
        finishTime = formatMinSec(Date.now() - startTime)
      }
      $('.timer').text(finishTime)
    } else {
      var elapsedTime = Date.now() - startTime
      $('.timer').text(formatMinSec(elapsedTime))
    }
  }, 100);

  
  $('.answer').blur(function () { //.on to select the parent
    const $this = $(this)
    const value = parseInt($this.val())
    const row = $this.data("row")
    const col = $this.data("col")
    let correct = validateAnswer(row, col, value, "multiplication")
    $this.removeClass("answer-correct answer-incorrect")
    $this.addClass(correct ? "answer-correct" : "answer-incorrect")
    complete = $('.answer-correct').length === 25
  })

  // let interval = setInterval()

  // let stopTimer

})

// stats controller => game id, player name, complete time
// TODO determine how to set timeout once game is complete
