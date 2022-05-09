let textarea = null;
const valueArr = [];

export const render = (container, element, place = 'beforeend') => {
  container.insertAdjacentHTML(place, element);
};

export const addTextareaListener = () => {
  textarea = document.querySelector('textarea');
};

export const addTextareaValue = (key) => {
  valueArr.push(key);
  textarea.value = valueArr.join('');
};
