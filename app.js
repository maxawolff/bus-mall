'use strict';
var index1 = 0;
var index2 = 0;
var index3 = 0;
var prevIndex1;
var prevIndex2;
var prevIndex3;
// use an array for indicies
var timesVoted = 0;
var clickResults = [];
var displayResults = [];
var imageNames = [];

function Image(name, path){
  this.name = name;
  this.path = path;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
  imageNames.push(name);
}

// use a for loop to create these, no need to give them a name since they are stored in an array, not needed just a though
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
var position = document.getElementsByTagName('div')[0];

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
  //event.preventDefault();
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
  //event.preventDefault();
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
  //event.preventDefault();
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

// one function and find what you clicked by checking its id and comparing it to the id of what was clikced on

var votingResults = function(){
  for(var i = 0; i < images.length; i ++){
    displayResults.push(images[i].timesDisplayed);
    clickResults.push(images[i].timesClicked);
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var chartConfig = {
      type: 'bar',
      data: {
        labels: imageNames, // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
        datasets: [{ // <-- notice that this can be an array of multiple data sets.
          // each data set is its own object literal.
          label: '# of Votes', // <-- the label of this one data set
          data: clickResults, // <-- where your data actually goes. just the numbers
          backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 5
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    };
    var myChart = new Chart(ctx, chartConfig);

  }
};

displayImages();
var test = [2, 12, 6, 7, 18, 3, 10];
