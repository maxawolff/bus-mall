'use strict';

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
var chair = new Image('chair', 'img/char.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Image('dogDuck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petSweep = new Image('petSweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('sub', 'img/usb.gif');
var waterCan = new Image('waterCan', 'img/water-can.jpg');
var wineGlass = new Image('wineGlass', 'img/wine-glass.jpg');

var position = document.getElementsByTagName('body')[0];

var pic1 = document.createElement('img');
pic1.setAttribute('src', 'img/bag.jpg');
pic1.className = bag.name;
position.appendChild(pic1);

var pic2 = document.createElement('img');
pic2.setAttribute('src', ban.path);
pic2.className = ban.name;
position.appendChild(pic2);

var pic3 = document.createElement('img');
pic3.setAttribute('src', bath.path);
pic3.className = bath.name;
position.appendChild(pic3);

document.getElementsByClassName('bag')[0].addEventListener('click', vote);

function vote(event){
  event.preventDefault();
  bag.timesClicked ++;
  console.log('you clicked on the bag, timesClicked = ' + bag.timesClicked);
}
