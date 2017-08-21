'use strict';

function Image(name, path){
  this.name = name;
  this.path = path;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
}

var bag = new Image('bag', 'img/bag.jpg');
var ban = new Image('banana', 'img/banana.jpg');
var bath = new Image('bathroom', 'img/bathroom.jpg');

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
