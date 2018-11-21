const ui = require('./ui.js')
const api = require('./api.js')
const movieList = require('./movielist.js')

const movieString = movieList.movieString

const onMovieInput = function (event) {
}

$('#movie-input').keyup(function () {
  $('#movie-list').attr('class', 'list-group text-center d-none')
  const search = $(this).val()
  const resultsText = $('#results_text')
  const resultsCount = $('#results_count')
  const resultList = document.querySelector('#result-list')
  resultList.innerHTML = ''
  if (!search) {
    resultsText.val('')
    resultsCount.val('0')
    return
  }
  const rx = new RegExp('"([^"]*' + search + '[^"]*)"', 'gi')
  let i = 0
  let results = ''
  let result
  while (result = rx.exec(movieString)) {
    results += '\n' + result
    i += 1
    if (i >= 100) {
      break
    }
  }
  // console.log('results is ', results)
  const resultsArray = results.split('\n')
  // console.log('resultsArray is ', resultsArray)
  for (let i = 0; i < resultsArray.length; i++) {
    const newResult = resultsArray[i].split(',')
    resultsArray[i] = newResult[1]
  }
  // console.log('revised resultsArray is ', resultsArray)
  for (let i = 0; i < resultsArray.length; i++) {
    if (resultsArray[i]) {
      resultList.innerHTML += `<li class="list-group-item search-result" style="width: 350px; margin: auto;">${resultsArray[i]}</li>`
    }
  }
  $('#search-results').show()
  // resultList.innerHTML += `<li class="list-group-item">${resultsArray}</li>`
  resultsText.val(results)
  resultsCount.val(i)
})

const onMovieClick = function (event) {
  const chosenMovie = event.target.innerHTML
  // const movieIndex = movieList.movieList.indexOf(chosenMovie)
  // document.getElementById('movie-input').value = ''
  $('#search-results').hide()
  api.getMovieMatches(chosenMovie)
    .then(ui.showGetMovieMatchesSuccess)
    .catch(ui.showGetMovieMatchesFail)
}

module.exports = {
  onMovieInput: onMovieInput,
  onMovieClick: onMovieClick
}
