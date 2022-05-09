const createKeyboardTemplate = () => (
  ` <div class="keyboard">
  <div class="row">
    <button data-key="\`">\`</button>
    <button data-key="1">1</button>
    <button data-key="2">2</button>
    <button data-key="3">3</button>
    <button data-key="4">4</button>
    <button data-key="5">5</button>
    <button data-key="6">6</button>
    <button data-key="7">7</button>
    <button data-key="8">8</button>
    <button data-key="9">9</button>
    <button data-key="0">0</button>
    <button data-key="-">-</button>
    <button data-key="=">=</button>
    <button data-key="backspace">&lArr;</button>
  </div>
  <div class="row">
    <button data-key="tab">Tab</button>
    <button data-key="q">q</button>
    <button data-key="w">w</button>
    <button data-key="e">e</button>
    <button data-key="r">r</button>
    <button data-key="t">t</button>
    <button data-key="y">y</button>
    <button data-key="u">u</button>
    <button data-key="i">i</button>
    <button data-key="o">o</button>
    <button data-key="p">p</button>
    <button data-key="[">[</button>
    <button data-key="]">]</button>
    <button data-key="\\" id='backslash'>\\</button>
  </div>
  <div class="row">
    <button data-key="caps">Caps</button>
    <button data-key="a">a</button>
    <button data-key="s">s</button>
    <button data-key="d">d</button>
    <button data-key="f">f</button>
    <button data-key="g">g</button>
    <button data-key="h">h</button>
    <button data-key="j">j</button>
    <button data-key="k">k</button>
    <button data-key="l">l</button>
    <button data-key=";">;</button>
    <button data-key="'" id='quote'>'</button>
    <button data-key="enter">&crarr;</button>
  </div>
  <div class="row">
    <button data-key="lshift">Shift</button>
    <button data-key="z">z</button>
    <button data-key="x">x</button>
    <button data-key="c">c</button>
    <button data-key="v">v</button>
    <button data-key="b">b</button>
    <button data-key="n">n</button>
    <button data-key="m">m</button>
    <button data-key=",">,</button>
    <button data-key=".">.</button>
    <button data-key="/">/</button>
    <button data-key="arrowup">&uarr;</button>
    <button data-key="rshift">Shift</button>
  </div>
  <div class="row">
    <button data-key="lctrl">Ctrl</button>
    <button data-key="lwin">Win</button>
    <button data-key="lalt">Alt</button>
    <button data-key="space"></button>
    <button data-key="ralt">Alt</button>
    <button data-key="arrowleft">&larr;</button>
    <button data-key="arrowdown">&darr;</button>
    <button data-key="arrowright">&rarr;</button>
    <button data-key="rctrl">Ctrl</button>
  </div>
</div>`);

export default createKeyboardTemplate;
