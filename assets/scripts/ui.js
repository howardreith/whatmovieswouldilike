const showGetMovieMatchesSuccess = function (response) {
  $('#movie-list').attr('class', 'list-group text-center d-block')
  $('#movie-list-1').text('1. ' + response.movielist[1])
  $('#movie-list-2').text('2. ' + response.movielist[2])
  $('#movie-list-3').text('3. ' + response.movielist[3])
  $('#movie-list-4').text('4. ' + response.movielist[4])
  $('#movie-list-5').text('5. ' + response.movielist[5])
  $('#movie-list-6').text('6. ' + response.movielist[6])
  $('#movie-list-7').text('7. ' + response.movielist[7])
  $('#movie-list-8').text('8. ' + response.movielist[8])
  $('#movie-list-9').text('9. ' + response.movielist[9])
  $('#movie-list-10').text('10. ' + response.movielist[10])
  $('#movie-list-11').text('11. ' + response.movielist[11])
  $('#movie-list-12').text('12. ' + response.movielist[12])
  $('#movie-list-13').text('13. ' + response.movielist[13])
  $('#movie-list-14').text('14. ' + response.movielist[14])
  $('#movie-list-15').text('15. ' + response.movielist[15])
}

// const showGetMovieMatchesFail = function (error) {
//   // console.log('Error is ', error)
// }

module.exports = {
  showGetMovieMatchesSuccess
  // showGetMovieMatchesFail
}
