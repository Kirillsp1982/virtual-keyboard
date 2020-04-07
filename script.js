"use strict";

let [str, shift, lang] = [[], false, "en"];

if (localStorage.lang === "ru") lang = "ru";

const keyboard = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"];

const keyEnUp = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→"];

const keyEnLow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→"];

const keyRuUp = ["Ё", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→"];

const keyRuLow = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→"];

let key = keyEnLow;

document.querySelector("body").innerHTML = "<div class='wrapper'><textarea></textarea><div class='container'></div><div><p class='info'>Для смены языка ввода нажмите Left Alt, затем Left Ctrl.<br>Приложение разработано в ОС Windows.</p></div></div>";

function init() {
  document.querySelector(".container").innerHTML = null;
  if(shift && lang === "en") key = keyEnUp;
  if(!shift && lang === "en") key = keyEnLow;
  if(shift && lang === "ru") key = keyRuUp;
  if(!shift && lang === "ru") key = keyRuLow;
	let out = "";
  
	for (let i = 0; i < keyboard.length; i++) {		
		out += "<div class='k-key' id='" + keyboard[i] + "' >" + key[i] + "</div>";
	}
	document.querySelector(".container").innerHTML = out;
  
  document.addEventListener("keydown", keydown);	  

  document.querySelectorAll(".k-key").forEach(function (element) {
	  element.onclick = function (event) {
		  document.querySelectorAll(".k-key").forEach(function (element) {
        if (element.id === "AltLeft") setTimeout(() => element.classList.remove("active"), 2000);
		  });
		  element.classList.add("active");
      text(element.getAttribute("id"));
      if (element.id !== "AltLeft") setTimeout(() => element.classList.remove("active"), 700);
	  };   
  });
}

init();

function keydown(event) {
	event.preventDefault();
	document.querySelectorAll(".k-key").forEach(function (element) {
	  if (element.id === "AltLeft") setTimeout(() => element.classList.remove("active"), 1500);
	});
	document.getElementById(event.code).classList.add("active");
  text(event.code);
  if (event.code !== "AltLeft") setTimeout(() => document.getElementById(event.code).classList.remove("active"), 700);
};

function text(element) {  
  switch (element) {
  case "Backspace":
    str.pop();
    break;

  case "Tab":
    str.push("\t");
    break;

  case "Enter":
    str.push("\n");
    break;
    
  case "ShiftLeft":
  case "ShiftRight":
    shift = !shift; 
    document.removeEventListener("keydown", keydown);	
    setTimeout(init, 700);
    break;
  
  
  case "ControlLeft":
    if (document.querySelector("#AltLeft").classList.contains("active")) {      
      if (lang === "en") {
        lang = "ru";
      } else lang = "en";
      localStorage.lang = lang;
      document.removeEventListener("keydown", keydown);	
      setTimeout(init, 700);
    } 
    break;

  case "Delete":
  case "CapsLock":
  case "MetaLeft":
  case "AltLeft":
  case "AltRight":
  case "ControlRight":
    break;
  
  default:
    str.push(key[keyboard.indexOf(element)]);
  }
  document.querySelector("textarea").value = str.join("");
};
