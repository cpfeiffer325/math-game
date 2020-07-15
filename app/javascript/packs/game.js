function validateAnswer(row, col, res, operator) {
  switch (operator) {
    case "multiplication":
      return row * col === res
    case "addition":
      return row + col === res
  }
}

jQuery(() => { 
  $('.answer').blur(function () { //.on to select the parent
    const $this = $(this)
    const value = parseInt($this.val())
    const row = $this.data("row")
    const col = $this.data("col")
    let correct = validateAnswer(row, col, value, "multiplication")
    $this.removeClass("answer-correct answer-incorrect")
    $this.addClass(correct ? "answer-correct" : "answer-incorrect")
    // select all.answer-correct === 25 then clearInterval, extract value
  })

  // let interval = setInterval()

  // let stopTimer

})

// stats controller => game id, player name, complete time

