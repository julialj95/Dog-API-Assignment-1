'use strict'

function getDogImages() {
  let submittedValue = $('#number-of-dogs').val()
     fetch(`https://dog.ceo/api/breeds/image/random/${submittedValue}`)
     .then(response => response.json())
     .then(responseJson => console.log(responseJson))
     .catch(error => console.log('Oops! There has been a problem. Try again later.'))
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}
$(function(){
  watchForm();
});
