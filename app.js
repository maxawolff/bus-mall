'use strict';
var index1 = 0;
var index2 = 0;
var index3 = 0;
var prevIndex1;
var prevIndex2;
var prevIndex3;
var timesVoted = 0;

function Image(name, path){
  this.name = name;
  this.path = path;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
}

var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Image('dog duck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petSweep = new Image('pet sweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.gif');
var waterCan = new Image('water can', 'img/water-can.jpg');
var wineGlass = new Image('wine glass', 'img/wine-glass.jpg');

var images = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogDuck,dragon,pen,petSweep,scissors,shark,sweep,tauntaun,unicorn,usb,waterCan,wineGlass];
var position = document.getElementsByTagName('body')[0];

var whichImages = function(){
  index1 = Math.floor(Math.random() * 20);
  index2 = Math.floor(Math.random() * 20);
  index3 = Math.floor(Math.random() * 20);
  while(index1 === prevIndex1 || index1 === prevIndex2 || index1 === prevIndex3){
    index1 = Math.floor(Math.random() * 20);
  }
  while(index2 === index1 || index2 === prevIndex1 || index2 === prevIndex2 || index2 === prevIndex3){
    index2 = Math.floor(Math.random() * 20);
  }
  while(index3 === index2 || index3 === index1 || index3 === prevIndex1 || index3 === prevIndex2 || index3 === prevIndex3){
    index3 = Math.floor(Math.random() * 20);
  }
  prevIndex1 = index1;
  prevIndex2 = index2;
  prevIndex3 = index3;
};

var displayImages = function(){
  whichImages();
  var im1 = document.createElement('img');
  var im2 = document.createElement('img');
  var im3 = document.createElement('img');

  im1.setAttribute('src', images[index1].path);
  im2.setAttribute('src', images[index2].path);
  im3.setAttribute('src', images[index3].path);
  images[index1].timesDisplayed ++;
  images[index2].timesDisplayed ++;
  images[index3].timesDisplayed ++;
  position.appendChild(im1);
  position.appendChild(im2);
  position.appendChild(im3);
  document.getElementsByTagName('img')[0].addEventListener('click', vote1);
  document.getElementsByTagName('img')[1].addEventListener('click', vote2);
  document.getElementsByTagName('img')[2].addEventListener('click', vote3);
};

var deleteImages = function(){
  for(var i = 0; i < 3; i ++){
    var anImage = document.getElementsByTagName('img')[0];
    var container = anImage.parentNode;
    container.removeChild(anImage);
  }
};

function vote1(event){
  event.preventDefault();
  images[index1].timesClicked ++;
  deleteImages();
  timesVoted ++;
  console.log(timesVoted);
  if(timesVoted === 25){
    votingResults();
  }
  else{
    displayImages();
  }

}

function vote2(event){
  event.preventDefault();
  images[index2].timesClicked ++;
  deleteImages();
  timesVoted ++;
  console.log(timesVoted);
  if(timesVoted === 25){
    votingResults();
  }
  else{
    displayImages();
  }
}

function vote3(event){
  event.preventDefault();
  images[index3].timesClicked ++;
  deleteImages();
  timesVoted ++;
  console.log(timesVoted);
  if(timesVoted === 25){
    votingResults();
  }
  else{
    displayImages();
  }
}

var votingResults = function(){
  var list = document.createElement('ul');
  position.appendChild(list);

  for(var i = 0; i < images.length; i ++){
    var li = document.createElement('li');
    list.appendChild(li);
    li.innerText = images[i].name + ' was seen ' + images[i].timesDisplayed + ' times, and voted for ' + images[i].timesClicked + ' times';
  }
};

displayImages();
