let textarea = null;
const valueArr = [];

export const render = (container, element, place = 'beforeend') => {
  container.insertAdjacentHTML(place, element);
};

export const addTextareaListener = () => {
  textarea = document.querySelector('textarea');
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
