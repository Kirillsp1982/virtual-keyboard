"use strict"
let str = [];
let shift = false;
const keyboard = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "OSLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"];

const keyEnUp = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"];

const keyEnLow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"];

let key = keyEnLow;
if(shift) key = keyEnUp;

document.querySelector('body').innerHTML = '<div class="wrapper"><textarea></textarea><div class="container"></div></div>';

function init() {
	let out = '';
	for (let i = 0; i < keyboard.length; i++) {		
		out += '<div class="k-key" id="' + keyboard[i] + '" >' + key[i] + '</div>';
	}
	document.querySelector('.container').innerHTML = out;
}
init();

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	document.querySelectorAll('.k-key').forEach(function (element) {
	  element.classList.remove('active');
	});
	  document.getElementById(event.code).classList.add('active');
	  str.push(key[keyboard.indexOf(event.code)]);
	  document.querySelector('textarea').value = str.join('');
  });

document.querySelectorAll('.k-key').forEach(function (element) {
	element.onclick = function (event) {
		document.querySelectorAll('.k-key').forEach(function (element) {
			element.classList.remove('active');
		});
		this.classList.add('active');
		str.push(key[keyboard.indexOf(this.getAttribute('id'))]);
		document.querySelector('textarea').value = str.join('');
    if(this.getAttribute('id') === 'ShiftLeft' || this.getAttribute('id') === 'ShiftRight') {
      if(shift) {
        shift = false;
	  } else shift = true;
	}	
	}   
});