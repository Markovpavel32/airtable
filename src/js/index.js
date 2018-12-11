import {connectionDepartures, connectionArrivals} from './dataFromServer';
import {dataHandler, makeDate, detainedDataHandler} from './dataHandler';
import render from './render';
import today from './api'

const input = document.getElementsByClassName('inputa')[0];
console.log(input);
const departures = connectionDepartures();
const arrivals = connectionArrivals();
const departing = document.getElementsByClassName('departing')[0];
const arriving = document.getElementsByClassName('arriving')[0];
const detained = document.getElementsByClassName('detained')[0];
departing.onclick = departingHandler;
arriving.onclick = arrivingHandler;
detained.onclick = detainedHandler;
input.oninput = inputHandler;

function departingHandler(){
  departures.then(resp => dataHandler(resp))
  .then(arr => today(arr)).then(arr => makeDate(arr)).then(arr => render(arr));
  departing.style.color = 'orange';
  arriving.style.color = 'black';
  detained.style.color = 'black';
}

function arrivingHandler(){
  arrivals.then(resp => dataHandler(resp))
  .then(arr => today(arr)).then(arr => makeDate(arr)).then(arr => render(arr));
  departing.style.color = 'black';
  arriving.style.color = 'orange';
  detained.style.color = 'black';
}

function detainedHandler(){
  departures.then(resp => detainedDataHandler(resp))
  .then(arr => today(arr)).then(arr => makeDate(arr)).then(arr => render(arr));
  departing.style.color = 'black';
  arriving.style.color = 'black';
  detained.style.color = 'orange';
}

function inputHandler(){
  let tr = document.getElementsByTagName('tr');
  console.log(tr)
  for(let i = 0; i < tr.length; i++){
    
    if(!tr[i].lastChild.textContent.includes(input.value)){
    tr[i].style.display = 'none';
    } else{
      tr[i].style.display = 'table-row';
    }
  }
}
