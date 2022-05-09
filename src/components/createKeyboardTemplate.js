const createKeyboardTemplate = () => (
  ` <div class="keyboard">
  <div class="row">
    <button data-key="Backquote" data-en="\`" data-enshift="~"></button>
    <button data-key="Digit1" data-en="1" data-enshift="!"></button>
    <button data-key="Digit2" data-en="2" data-enshift="@"></button>
    <button data-key="Digit3" data-en="3" data-enshift="#"></button>
    <button data-key="Digit4" data-en="4" data-enshift="$"></button>
    <button data-key="Digit5" data-en="5" data-enshift="%"></button>
    <button data-key="Digit6" data-en="6" data-enshift="^"></button>
    <button data-key="Digit7" data-en="7" data-enshift="&"></button>
    <button data-key="Digit8" data-en="8" data-enshift="*"></button>
    <button data-key="Digit9" data-en="9" data-enshift="("></button>
    <button data-key="Digit0" data-en="0" data-enshift=")"></button>
    <button data-key="Minus" data-en="-" data-enshift="_"></button>
    <button data-key="Equal" data-en="=" data-enshift="+"></button>
    <button data-key="Backspace" data-en="&lArr;" data-enshift="&lArr;"></button>
  </div>
  <div class="row">
    <button data-key="Tab" data-en="Tab" data-enshift="Tab"></button>
    <button data-key="KeyQ" data-en="q" data-enshift="Q"></button>
    <button data-key="KeyW" data-en="w" data-enshift="W"></button>
    <button data-key="KeyE" data-en="e" data-enshift="E"></button>
    <button data-key="KeyR" data-en="r" data-enshift="R"></button>
    <button data-key="KeyT" data-en="t" data-enshift="T"></button>
    <button data-key="KeyY" data-en="y" data-enshift="Y"></button>
    <button data-key="KeyU" data-en="u" data-enshift="U"></button>
    <button data-key="KeyI" data-en="i" data-enshift="I"></button>
    <button data-key="KeyO" data-en="o" data-enshift="O"></button>
    <button data-key="KeyP" data-en="p" data-enshift="P"></button>
    <button data-key="BracketLeft" data-en="[" data-enshift="{"></button>
    <button data-key="BracketRight" data-en="]" data-enshift="}"></button>
    <button data-key="Backslash" data-en="\\" data-enshift="|"></button>
  </div>
  <div class="row">
    <button data-key="CapsLock" data-en="Caps" data-enshift="Caps"></button>
    <button data-key="KeyA" data-en="a" data-enshift="A"></button>
    <button data-key="KeyS" data-en="s" data-enshift="S"></button>
    <button data-key="KeyD" data-en="d" data-enshift="D"></button>
    <button data-key="KeyF" data-en="f" data-enshift="F"></button>
    <button data-key="KeyG" data-en="g" data-enshift="G"></button>
    <button data-key="KeyH" data-en="h" data-enshift="H"></button>
    <button data-key="KeyJ" data-en="j" data-enshift="J"></button>
    <button data-key="KeyK" data-en="k" data-enshift="K"></button>
    <button data-key="KeyL" data-en="l" data-enshift="L"></button>
    <button data-key="Semicolon" data-en=";" data-enshift=":"></button>
    <button data-key="Quote" data-en="'" data-enshift="&#34;"></button>
    <button data-key="Enter" data-en="&crarr;" data-enshift="&crarr;"></button>
  </div>
  <div class="row">
    <button data-key="ShiftLeft" data-en="Shift" data-enshift="Shift"></button>
    <button data-key="KeyZ" data-en="z" data-enshift="Z"></button>
    <button data-key="KeyX" data-en="x" data-enshift="X"></button>
    <button data-key="KeyC" data-en="c" data-enshift="C"></button>
    <button data-key="KeyV" data-en="v" data-enshift="V"></button>
    <button data-key="KeyB" data-en="b" data-enshift="B"></button>
    <button data-key="KeyN" data-en="n" data-enshift="N"></button>
    <button data-key="KeyM" data-en="m" data-enshift="M"></button>
    <button data-key="Comma" data-en="," data-enshift="<"></button>
    <button data-key="Period" data-en="." data-enshift=">"></button>
    <button data-key="Slash" data-en="/" data-enshift="?"></button>
    <button data-key="ArrowUp" data-en="&uarr;" data-enshift="&uarr;"></button>
    <button data-key="ShiftRight" data-en="Shift" data-enshift="Shift"></button>
  </div>
  <div class="row">
    <button data-key="ControlLeft" data-en="Ctrl" data-enshift="Ctrl"></button>
    <button data-key="MetaLeft" data-en="Win" data-enshift="Win"></button>
    <button data-key="AltLeft" data-en="Alt" data-enshift="Alt"></button>
    <button data-key="Space" data-en=" " data-enshift=" "></button>
    <button data-key="AltRight" data-en="Alt" data-enshift="Alt"></button>
    <button data-key="ArrowLeft" data-en="&larr;" data-enshift="&larr;"></button>
    <button data-key="ArrowDown" data-en="&darr;" data-enshift="&darr;"></button>
    <button data-key="ArrowRight" data-en="&rarr;" data-enshift="&rarr;"></button>
    <button data-key="ControlRight" data-en="Ctrl" data-enshift="Ctrl"></button>
  </div>
</div>`);

export default createKeyboardTemplate;
