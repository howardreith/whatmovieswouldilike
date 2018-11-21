'use strict'

const events = require('./events')

$(() => {
  $('#movie-input').on('click', events.onMovieInput)
  $('#result-list').on('click', events.onMovieClick)
})
