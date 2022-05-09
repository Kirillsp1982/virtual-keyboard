import createMainTemplate from './components/createMainTemplate';
import createTextareaTemplate from './components/createTextareaTemplate';
import createKeyboardTemplate from './components/createKeyboardTemplate';

const render = (container, element, place = 'beforeend') => {
  container.insertAdjacentHTML(place, element);
};

const body = document.querySelector('body');
render(body, createMainTemplate());

const mainContainer = document.querySelector('main .container');
render(mainContainer, createTextareaTemplate());
render(mainContainer, createKeyboardTemplate());
