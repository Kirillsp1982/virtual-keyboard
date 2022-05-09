const createKeyboardTemplate = () => (
  ` <div class="keyboard">
  <div class="row">
    <button data-key="Backquote">\`</button>
    <button data-key="Digit1">1</button>
    <button data-key="Digit2">2</button>
    <button data-key="Digit3">3</button>
    <button data-key="Digit4">4</button>
    <button data-key="Digit5">5</button>
    <button data-key="Digit6">6</button>
    <button data-key="Digit7">7</button>
    <button data-key="Digit8">8</button>
    <button data-key="Digit9">9</button>
    <button data-key="Digit0">0</button>
    <button data-key="Minus">-</button>
    <button data-key="Equal">=</button>
    <button data-key="Backspace">&lArr;</button>
  </div>
  <div class="row">
    <button data-key="Tab">Tab</button>
    <button data-key="KeyQ">q</button>
    <button data-key="KeyW">w</button>
    <button data-key="KeyE">e</button>
    <button data-key="KeyR">r</button>
    <button data-key="KeyT">t</button>
    <button data-key="KeyY">y</button>
    <button data-key="KeyU">u</button>
    <button data-key="KeyI">i</button>
    <button data-key="KeyO">o</button>
    <button data-key="KeyP">p</button>
    <button data-key="BracketLeft">[</button>
    <button data-key="BracketRight">]</button>
    <button data-key="Backslash" id='backslash'>\\</button>
  </div>
  <div class="row">
    <button data-key="CapsLock">Caps</button>
    <button data-key="KeyA">a</button>
    <button data-key="KeyS">s</button>
    <button data-key="KeyD">d</button>
    <button data-key="KeyF">f</button>
    <button data-key="KeyG">g</button>
    <button data-key="KeyH">h</button>
    <button data-key="KeyJ">j</button>
    <button data-key="KeyK">k</button>
    <button data-key="KeyL">l</button>
    <button data-key="Semicolon">;</button>
    <button data-key="Quote" id='quote'>'</button>
    <button data-key="Enter">&crarr;</button>
  </div>
  <div class="row">
    <button data-key="ShiftLeft">Shift</button>
    <button data-key="KeyZ">z</button>
    <button data-key="KeyX">x</button>
    <button data-key="KeyC">c</button>
    <button data-key="KeyV">v</button>
    <button data-key="KeyB">b</button>
    <button data-key="KeyN">n</button>
    <button data-key="KeyM">m</button>
    <button data-key="Comma">,</button>
    <button data-key="Period">.</button>
    <button data-key="Slash">/</button>
    <button data-key="ArrowUp">&uarr;</button>
    <button data-key="ShiftRight">Shift</button>
  </div>
  <div class="row">
    <button data-key="ControlLeft">Ctrl</button>
    <button data-key="MetaLeft">Win</button>
    <button data-key="AltLeft">Alt</button>
    <button data-key="Space"> </button>
    <button data-key="AltRight">Alt</button>
    <button data-key="ArrowLeft">&larr;</button>
    <button data-key="ArrowDown">&darr;</button>
    <button data-key="ArrowRight">&rarr;</button>
    <button data-key="ControlRight">Ctrl</button>
  </div>
</div>`);

export default createKeyboardTemplate;
