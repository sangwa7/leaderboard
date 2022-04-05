import './css/style.css';

import { tasks } from './javascript/storage.js';

const ul = document.querySelector('.list');

const task = ()=> {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerText = "name: " + task.name;
    ul.appendChild(li);
  });
}

task();
