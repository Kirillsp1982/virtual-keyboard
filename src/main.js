import createMainTemplate from './components/createMainTemplate';
import createTextareaTemplate from './components/createTextareaTemplate';
import createKeyboardTemplate from './components/createKeyboardTemplate';
import createTextTemplate from './components/createTextTemplate';

const render = (container, element, place = 'beforeend') => {
  container.insertAdjacentHTML(place, element);
};

const body = document.querySelector('body');
render(body, createMainTemplate());

const mainContainer = document.querySelector('main .container');
render(mainContainer, createTextareaTemplate());
render(mainContainer, createKeyboardTemplate());
render(mainContainer, createTextTemplate());

window.addEventListener('keydown', (e) => {
  const el = document.querySelector(`button[data-key='${e.code}']`);
  if (el) {
    el.classList.add('pressed');
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
