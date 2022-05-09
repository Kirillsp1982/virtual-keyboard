import createMainTemplate from './components/createMainTemplate';
import createTextareaTemplate from './components/createTextareaTemplate';
import createKeyboardTemplate from './components/createKeyboardTemplate';
import createTextTemplate from './components/createTextTemplate';
import {
  render, addListeners, addTextareaValue, addButtonText,
} from './utils';

let caps = false;
let shift = false;

const body = document.querySelector('body');
render(body, createMainTemplate());

const mainContainer = document.querySelector('main .container');
render(mainContainer, createTextareaTemplate());
render(mainContainer, createKeyboardTemplate());
render(mainContainer, createTextTemplate());

addListeners();
addButtonText(caps, shift);

window.addEventListener('keydown', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el.dataset.key === 'CapsLock') {
    el.classList.toggle('pressed');
    caps = !caps;
    addButtonText(caps, shift);
  }
  if (el && el.dataset.key !== 'CapsLock') {
    el.classList.add('pressed');
    addTextareaValue(el.innerHTML);
    e.preventDefault();
  }
  if (el.dataset.en === 'Shift') {
    shift = true;
    addButtonText(caps, shift);
  }
});

window.addEventListener('keyup', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el && el.dataset.key !== 'CapsLock') {
    el.classList.remove('pressed');
    e.preventDefault();
  }
  if (el.dataset.en === 'Shift') {
    shift = false;
    addButtonText(caps, shift);
  }
});

window.addEventListener('mousedown', (e) => {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.key !== 'CapsLock') {
    addTextareaValue(e.target.innerHTML);
    e.preventDefault();
  }
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.key === 'CapsLock') {
    e.target.classList.toggle('pressed');
    caps = !caps;
    addButtonText(caps, shift);
    e.preventDefault();
  }
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.en === 'Shift') {
    shift = true;
    addButtonText(caps, shift);
    e.preventDefault();
  }
});

window.addEventListener('mouseup', (e) => {
  shift = false;
  addButtonText(caps, shift);
  e.preventDefault();
});
