
var allPictures = [];

// constructor function for pictures

function SurveyPicture(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votesPerPicture = 0;
  this.viewsShown = 0;
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