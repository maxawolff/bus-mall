'use strict';

function Image(name, path){
  this.name = name;
  this.path = path;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
}

var bag = new Image(bag, 'img/bag.jpg');

var pic1 = document.createElement('img');
pic1.setAttribute('src', bag.path);
//pic1.setAttribute('src', 'img/bag.jpg');
var position = document.getElementsByTagName('body')[0];
position.appendChild(pic1);
