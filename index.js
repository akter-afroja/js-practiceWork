// Import stylesheets
import './style.css';

// Write Javascript code!

console.log('Hello dummy');

const syncWithCallback = () => {
  for (let index = 0; index < 10; index++) {
    console.log('rocking:\t', index,'\t', new Date());
  }
}

syncWithCallback();
console.log('all is well');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hello World! so obvious!!!</h1>`;
