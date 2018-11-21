'use strict'

const config = require('./config')

const getMovieMatches = function (selectedMovie) {
  return $.ajax({
    method: 'POST',
    dataType: 'json',
    url: config.apiUrl + '/movies/',
    data: selectedMovie
  })
}

module.exports = {
  getMovieMatches: getMovieMatches
}
