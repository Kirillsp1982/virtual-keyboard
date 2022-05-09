import createMainTemplate from './components/createMainTemplate';
import createTextareaTemplate from './components/createTextareaTemplate';
import createKeyboardTemplate from './components/createKeyboardTemplate';
import createTextTemplate from './components/createTextTemplate';
import { render, addTextareaListener, addTextareaValue } from './utils';

const body = document.querySelector('body');
render(body, createMainTemplate());

const mainContainer = document.querySelector('main .container');
render(mainContainer, createTextareaTemplate());
render(mainContainer, createKeyboardTemplate());
render(mainContainer, createTextTemplate());

addTextareaListener();

window.addEventListener('keydown', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el) {
    el.classList.add('pressed');
    addTextareaValue(el.innerHTML);
    e.preventDefault();
  }
});

window.addEventListener('keyup', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el) {
    el.classList.remove('pressed');
    e.preventDefault();
  }
});

window.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    addTextareaValue(e.target.innerHTML);
    e.preventDefault();
  }
});
