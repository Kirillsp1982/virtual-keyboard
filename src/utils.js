let textarea = null;
let buttons = null;
const valueArr = [];

export const render = (container, element, place = 'beforeend') => {
  container.insertAdjacentHTML(place, element);
};

export const addListeners = () => {
  textarea = document.querySelector('textarea');
  buttons = document.querySelectorAll('button');
};

export const addTextareaValue = (key) => {
  switch (key) {
    case '⇐':
      valueArr.pop();
      break;
    case 'Tab':
      valueArr.push('\t');
      break;
    case '↵':
      valueArr.push('\n');
      break;
    case 'Caps':
    case 'Alt':
    case 'Shift':
    case 'Win':
    case 'Ctrl':
      break;
    default:
      valueArr.push(key);
      break;
  }
  textarea.value = valueArr.join('');
};

export const addButtonText = (caps, shift) => {
  if (!caps || (caps && shift)) {
    buttons.forEach((el) => {
      const elem = el;
      elem.innerHTML = elem.dataset.en;
    });
  }

  if ((caps && !shift) || (!caps && shift)) {
    buttons.forEach((el) => {
      const elem = el;
      elem.innerHTML = elem.dataset.enshift;
    });
  }
};
