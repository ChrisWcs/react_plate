import {compose} from 'redux';

const multiplyByTwo = x => x * 2
const addTwo = x => x + 2
const result = compose(multiplyByTwo, addTwo)(10);
console.log(result);

const root = document.createElement('h1');
root.innerHTML = 'Hello'

document.body.appendChild(root);
