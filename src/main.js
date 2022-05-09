import createMainTemplate from './components/createMainTemplate';
import createTextareaTemplate from './components/createTextareaTemplate';
import createKeyboardTemplate from './components/createKeyboardTemplate';
import createTextTemplate from './components/createTextTemplate';
import {
  render, addListeners, addTextareaValue, addButtonText,
} from './utils';

const body = document.querySelector('body');
render(body, createMainTemplate());

const mainContainer = document.querySelector('main .container');
render(mainContainer, createTextareaTemplate());
render(mainContainer, createKeyboardTemplate());
render(mainContainer, createTextTemplate());

addListeners();
addButtonText();

window.addEventListener('keydown', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el.dataset.key === 'CapsLock') el.classList.toggle('pressed');
  if (el && el.dataset.key !== 'CapsLock') {
    el.classList.add('pressed');
    addTextareaValue(el.innerHTML);
    e.preventDefault();
  }
});

window.addEventListener('keyup', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el && el.dataset.key !== 'CapsLock') {
    el.classList.remove('pressed');
    e.preventDefault();
  }
});

window.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.key !== 'CapsLock') {
    addTextareaValue(e.target.innerHTML);
    e.preventDefault();
  }
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.key === 'CapsLock') {
    e.target.classList.toggle('pressed');
    e.preventDefault();
  }
});
