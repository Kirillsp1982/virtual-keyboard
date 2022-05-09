const createKeyboardTemplate = () => (
  ` <div class="keyboard">
  <div class="row">
    <button data-key="Backquote" data-en="\`" data-enshift="~" data-ru="ё" data-rushift="Ё"></button>
    <button data-key="Digit1" data-en="1" data-enshift="!" data-ru="1" data-rushift="!"></button>
    <button data-key="Digit2" data-en="2" data-enshift="@" data-ru="2" data-rushift="&#34;"></button>
    <button data-key="Digit3" data-en="3" data-enshift="#" data-ru="3" data-rushift="№"></button>
    <button data-key="Digit4" data-en="4" data-enshift="$" data-ru="4" data-rushift=";"></button>
    <button data-key="Digit5" data-en="5" data-enshift="%" data-ru="5" data-rushift="%"></button>
    <button data-key="Digit6" data-en="6" data-enshift="^" data-ru="6" data-rushift=":"></button>
    <button data-key="Digit7" data-en="7" data-enshift="&" data-ru="7" data-rushift="?"></button>
    <button data-key="Digit8" data-en="8" data-enshift="*" data-ru="8" data-rushift="*"></button>
    <button data-key="Digit9" data-en="9" data-enshift="(" data-ru="9" data-rushift="("></button>
    <button data-key="Digit0" data-en="0" data-enshift=")" data-ru="0" data-rushift=")"></button>
    <button data-key="Minus" data-en="-" data-enshift="_" data-ru="-" data-rushift="_"></button>
    <button data-key="Equal" data-en="=" data-enshift="+" data-ru="=" data-rushift="+"></button>
    <button data-key="Backspace" data-en="&lArr;" data-enshift="&lArr;" data-ru="&lArr;" data-rushift="&lArr;"></button>
  </div>
  <div class="row">
    <button data-key="Tab" data-en="Tab" data-enshift="Tab" data-ru="Tab" data-rushift="Tab"></button>
    <button data-key="KeyQ" data-en="q" data-enshift="Q" data-ru="й" data-rushift="Й"></button>
    <button data-key="KeyW" data-en="w" data-enshift="W" data-ru="ц" data-rushift="Ц"></button>
    <button data-key="KeyE" data-en="e" data-enshift="E" data-ru="у" data-rushift="У"></button>
    <button data-key="KeyR" data-en="r" data-enshift="R" data-ru="к" data-rushift="К"></button>
    <button data-key="KeyT" data-en="t" data-enshift="T" data-ru="е" data-rushift="Е"></button>
    <button data-key="KeyY" data-en="y" data-enshift="Y" data-ru="н" data-rushift="Н"></button>
    <button data-key="KeyU" data-en="u" data-enshift="U" data-ru="г" data-rushift="Г"></button>
    <button data-key="KeyI" data-en="i" data-enshift="I" data-ru="ш" data-rushift="Ш"></button>
    <button data-key="KeyO" data-en="o" data-enshift="O" data-ru="щ" data-rushift="Щ"></button>
    <button data-key="KeyP" data-en="p" data-enshift="P" data-ru="з" data-rushift="З"></button>
    <button data-key="BracketLeft" data-en="[" data-enshift="{" data-ru="х" data-rushift="Х"></button>
    <button data-key="BracketRight" data-en="]" data-enshift="}" data-ru="ъ" data-rushift="Ъ"></button>
    <button data-key="Backslash" data-en="\\" data-enshift="|" data-ru="\\" data-rushift="/"></button>
  </div>
  <div class="row">
    <button data-key="CapsLock" data-en="Caps" data-enshift="Caps" data-ru="Caps" data-rushift="Caps"></button>
    <button data-key="KeyA" data-en="a" data-enshift="A" data-ru="ф" data-rushift="Ф"></button>
    <button data-key="KeyS" data-en="s" data-enshift="S" data-ru="ы" data-rushift="Ы"></button>
    <button data-key="KeyD" data-en="d" data-enshift="D" data-ru="в" data-rushift="В"></button>
    <button data-key="KeyF" data-en="f" data-enshift="F" data-ru="а" data-rushift="А"></button>
    <button data-key="KeyG" data-en="g" data-enshift="G" data-ru="п" data-rushift="П"></button>
    <button data-key="KeyH" data-en="h" data-enshift="H" data-ru="р" data-rushift="Р"></button>
    <button data-key="KeyJ" data-en="j" data-enshift="J" data-ru="о" data-rushift="О"></button>
    <button data-key="KeyK" data-en="k" data-enshift="K" data-ru="л" data-rushift="Л"></button>
    <button data-key="KeyL" data-en="l" data-enshift="L" data-ru="д" data-rushift="Д"></button>
    <button data-key="Semicolon" data-en=";" data-enshift=":" data-ru="ж" data-rushift="Ж"></button>
    <button data-key="Quote" data-en="'" data-enshift="&#34;" data-ru="э" data-rushift="Э"></button>
    <button data-key="Enter" data-en="&crarr;" data-enshift="&crarr;" data-ru="&crarr;" data-rushift="&crarr;"></button>
  </div>
  <div class="row">
    <button data-key="ShiftLeft" data-en="Shift" data-enshift="Shift" data-ru="Shift" data-rushift="Shift"></button>
    <button data-key="KeyZ" data-en="z" data-enshift="Z" data-ru="я" data-rushift="Я"></button>
    <button data-key="KeyX" data-en="x" data-enshift="X" data-ru="ч" data-rushift="Ч"></button>
    <button data-key="KeyC" data-en="c" data-enshift="C" data-ru="с" data-rushift="С"></button>
    <button data-key="KeyV" data-en="v" data-enshift="V" data-ru="м" data-rushift="М"></button>
    <button data-key="KeyB" data-en="b" data-enshift="B" data-ru="и" data-rushift="И"></button>
    <button data-key="KeyN" data-en="n" data-enshift="N" data-ru="т" data-rushift="Т"></button>
    <button data-key="KeyM" data-en="m" data-enshift="M" data-ru="ь" data-rushift="Ь"></button>
    <button data-key="Comma" data-en="," data-enshift="<" data-ru="б" data-rushift="Б"></button>
    <button data-key="Period" data-en="." data-enshift=">" data-ru="ю" data-rushift="Ю"></button>
    <button data-key="Slash" data-en="/" data-enshift="?" data-ru="." data-rushift=","></button>
    <button data-key="ArrowUp" data-en="&uarr;" data-enshift="&uarr;" data-ru="&uarr;" data-rushift="&uarr;"></button>
    <button data-key="ShiftRight" data-en="Shift" data-enshift="Shift" data-ru="Shift" data-rushift="Shift"></button>
  </div>
  <div class="row">
    <button data-key="ControlLeft" data-en="Ctrl" data-enshift="Ctrl" data-ru="Ctrl" data-rushift="Ctrl"></button>
    <button data-key="MetaLeft" data-en="Win" data-enshift="Win" data-ru="Win" data-rushift="Win"></button>
    <button data-key="AltLeft" data-en="Alt" data-enshift="Alt" data-ru="Alt" data-rushift="Alt"></button>
    <button data-key="Space" data-en=" " data-enshift=" " data-ru=" " data-rushift=" "></button>
    <button data-key="AltRight" data-en="Alt" data-enshift="Alt" data-ru="Alt" data-rushift="Alt"></button>
    <button data-key="ArrowLeft" data-en="&larr;" data-enshift="&larr;" data-ru="&larr;" data-rushift="&larr;"></button>
    <button data-key="ArrowDown" data-en="&darr;" data-enshift="&darr;" data-ru="&darr;" data-rushift="&darr;"></button>
    <button data-key="ArrowRight" data-en="&rarr;" data-enshift="&rarr;" data-ru="&rarr;" data-rushift="&rarr;"></button>
    <button data-key="ControlRight" data-en="Ctrl" data-enshift="Ctrl" data-ru="Ctrl" data-rushift="Ctrl"></button>
  </div>
</div>`);

export default createKeyboardTemplate;
