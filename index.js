(()=>{"use strict";var t=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentHTML(a,n)};t(document.querySelector("body"),' <main>\n    <div class="container"></div>\n  </main>');var n=document.querySelector("main .container");t(n,' <textarea class="textarea"></textarea>'),t(n,' <div class="keyboard">\n  <div class="row">\n    <button data-key="Backquote">`</button>\n    <button data-key="Digit1">1</button>\n    <button data-key="Digit2">2</button>\n    <button data-key="Digit3">3</button>\n    <button data-key="Digit4">4</button>\n    <button data-key="Digit5">5</button>\n    <button data-key="Digit6">6</button>\n    <button data-key="Digit7">7</button>\n    <button data-key="Digit8">8</button>\n    <button data-key="Digit9">9</button>\n    <button data-key="Digit0">0</button>\n    <button data-key="Minus">-</button>\n    <button data-key="Equal">=</button>\n    <button data-key="Backspace">&lArr;</button>\n  </div>\n  <div class="row">\n    <button data-key="Tab">Tab</button>\n    <button data-key="KeyQ">q</button>\n    <button data-key="KeyW">w</button>\n    <button data-key="KeyE">e</button>\n    <button data-key="KeyR">r</button>\n    <button data-key="KeyT">t</button>\n    <button data-key="KeyY">y</button>\n    <button data-key="KeyU">u</button>\n    <button data-key="KeyI">i</button>\n    <button data-key="KeyO">o</button>\n    <button data-key="KeyP">p</button>\n    <button data-key="BracketLeft">[</button>\n    <button data-key="BracketRight">]</button>\n    <button data-key="Backslash" id=\'backslash\'>\\</button>\n  </div>\n  <div class="row">\n    <button data-key="CapsLock">Caps</button>\n    <button data-key="KeyA">a</button>\n    <button data-key="KeyS">s</button>\n    <button data-key="KeyD">d</button>\n    <button data-key="KeyF">f</button>\n    <button data-key="KeyG">g</button>\n    <button data-key="KeyH">h</button>\n    <button data-key="KeyJ">j</button>\n    <button data-key="KeyK">k</button>\n    <button data-key="KeyL">l</button>\n    <button data-key="Semicolon">;</button>\n    <button data-key="Quote" id=\'quote\'>\'</button>\n    <button data-key="Enter">&crarr;</button>\n  </div>\n  <div class="row">\n    <button data-key="ShiftLeft">Shift</button>\n    <button data-key="KeyZ">z</button>\n    <button data-key="KeyX">x</button>\n    <button data-key="KeyC">c</button>\n    <button data-key="KeyV">v</button>\n    <button data-key="KeyB">b</button>\n    <button data-key="KeyN">n</button>\n    <button data-key="KeyM">m</button>\n    <button data-key="Comma">,</button>\n    <button data-key="Period">.</button>\n    <button data-key="Slash">/</button>\n    <button data-key="ArrowUp">&uarr;</button>\n    <button data-key="ShiftRight">Shift</button>\n  </div>\n  <div class="row">\n    <button data-key="ControlLeft">Ctrl</button>\n    <button data-key="MetaLeft">Win</button>\n    <button data-key="AltLeft">Alt</button>\n    <button data-key="Space"></button>\n    <button data-key="AltRight">Alt</button>\n    <button data-key="ArrowLeft">&larr;</button>\n    <button data-key="ArrowDown">&darr;</button>\n    <button data-key="ArrowRight">&rarr;</button>\n    <button data-key="ControlRight">Ctrl</button>\n  </div>\n</div>'),t(n,' <p class="descripton">\n    Клавиатура создана в операционной системе Windows.\n  </p>'),window.addEventListener("keydown",(function(t){var n=document.querySelector("button[data-key='".concat(t.code,"']"));n&&(n.classList.add("pressed"),t.preventDefault())})),window.addEventListener("keyup",(function(t){var n=document.querySelector("button[data-key='".concat(t.code,"']"));n&&(n.classList.remove("pressed"),t.preventDefault())}))})();