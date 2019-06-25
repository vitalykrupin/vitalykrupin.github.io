const input = document.querySelector('.autocomplete__input');
const citiesList = document.querySelector('.autocomplete__drop-down');
const city = document.querySelector('.autocomplete__drop-down li');
// const xhr = new XMLHttpRequest;
// const URL = 'kladr.json';
// xhr.open('GET', URL, true);
// xhr.send();


const URL = '/json/kladr.json';

const inputHandler = (evt) => {
  if (evt.target.value) {
    console.log(evt.target.value);
  }
}

input.addEventListener('input', inputHandler);

fetch('/kladr.json')  
  .then(res => res.json())
  .then(data => console.log(data))
