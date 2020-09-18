'use strict';

function getDogImage(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let dogBreed = $('#breed').val()
  let html = `<img src="${responseJson.message}" />`
  if (responseJson.code === 404) {
    $('.results h2').html(`Sorry, no dog found.  Please try again.`)
    $('.results-img').html(``)
  }else {
    $('.results h2').html(`Look at the ${dogBreed}!`)
    $('.results-img').html(html)
    }
  
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed = $('#breed').val().toLowerCase()
    
    getDogImage(dogBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
