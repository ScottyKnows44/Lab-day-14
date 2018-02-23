'use strict';

var allPictures = [];
var submitForm = document.getElementById('submitForm');
var itemsSelected = [];

// constructor function for pictures

function SurveyPicture(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allPictures.push(this);
}

new SurveyPicture('bag', 'img/bag.jpg');
new SurveyPicture('banana', 'img/banana.jpg');
new SurveyPicture('bathroom', 'img/bathroom.jpg');
new SurveyPicture('boots', 'img/boots.jpg');
new SurveyPicture('breakfast', 'img/breakfast.jpg');
new SurveyPicture('bebblegum', 'img/bubblegum.jpg');
new SurveyPicture('chair', 'img/chair.jpg');
new SurveyPicture('cthulhu', 'img/cthulhu.jpg');
new SurveyPicture('dog-duck', 'img/dog-duck.jpg');
new SurveyPicture('dragon', 'img/dragon.jpg');
new SurveyPicture('pen', 'img/pen.jpg');
new SurveyPicture('pet-sweep', 'img/pet-sweep.jpg');
new SurveyPicture('scissors', 'img/scissors.jpg');
new SurveyPicture('shark', 'img/shark.jpg');
new SurveyPicture('sweep', 'img/sweep.jpg');
new SurveyPicture('tauntaun', 'img/tauntaun.jpg');
new SurveyPicture('unicorn', 'img/unicorn.jpg');
new SurveyPicture('usb', 'img/usb.jpg');
new SurveyPicture('water-can', 'img/water-can.jpg');
new SurveyPicture('wine-glass', 'img/wine-glass.jpg');

// puts pictures in the form

SurveyPicture.displayPictures = function() {
  var pics = document.getElementById('pictures');
  for (var i = 0 ; i < allPictures.length; i++) {
    var namesForPictures = document.createElement('option');
    namesForPictures.textContent = allPictures[i].name;
    pics.appendChild(namesForPictures);
  }
};
SurveyPicture.displayPictures();

// event listener

submitForm.addEventListener('submit', submitingPictures);

// turns ray into string

function savingCart() {
  localStorage.filepath = JSON.stringify(itemsSelected);
}

function submitingPictures (event) {
  event.preventDefault();
  console.log(event.target.pictures.value);
  for (var i = 0; i < allPictures.length; i++) {
    if (event.target.pictures.value === allPictures[i].name) {
      itemsSelected[i]= allPictures[i].filepath;
    }
  }
  savingCart();
  event.target.reset();
}

var allPictures = [];
var submitForm = document.getElementById('submitForm');
var itemsSelected = [];


function createInstanceOrRetrieveThem() {
  localStorage.itemsSelected;
  itemsSelected = JSON.parse(localStorage.filepath);
  
}  

function cartTable() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  createInstanceOrRetrieveThem();
  

}

// var liEl = document.createElement('li');
// var img = document.createElement('img');
// img.innerHTML = allPictures[i].filepath;
// liEl.appendChild(img);