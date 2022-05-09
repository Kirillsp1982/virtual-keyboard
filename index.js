(()=>{"use strict";var t=null,a=null,n=[],e=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentHTML(n,a)},d=function(a){switch(a){case"⇐":n.pop();break;case"Tab":n.push("\t");break;case"↵":n.push("\n");break;case"Caps":case"Alt":case"Shift":case"Win":case"Ctrl":break;default:n.push(a)}t.value=n.join("")},u=function(t,n,e){e&&(!t||t&&n)&&a.forEach((function(t){var a=t;a.innerHTML=a.dataset.en})),e&&(t&&!n||!t&&n)&&a.forEach((function(t){var a=t;a.innerHTML=a.dataset.enshift})),!e&&(!t||t&&n)&&a.forEach((function(t){var a=t;a.innerHTML=a.dataset.ru})),!e&&(t&&!n||!t&&n)&&a.forEach((function(t){var a=t;a.innerHTML=a.dataset.rushift}))},r=!1,i=!1,s=!0,o=window.localStorage,f=o.getItem("langEn");void 0!==f&&(s=JSON.parse(f)),e(document.querySelector("body"),' <main>\n    <div class="container"></div>\n  </main>');var h=document.querySelector("main .container");e(h,' <textarea class="textarea"></textarea>'),e(h,' <div class="keyboard">\n  <div class="row">\n    <button data-key="Backquote" data-en="`" data-enshift="~" data-ru="ё" data-rushift="Ё"></button>\n    <button data-key="Digit1" data-en="1" data-enshift="!" data-ru="1" data-rushift="!"></button>\n    <button data-key="Digit2" data-en="2" data-enshift="@" data-ru="2" data-rushift="&#34;"></button>\n    <button data-key="Digit3" data-en="3" data-enshift="#" data-ru="3" data-rushift="№"></button>\n    <button data-key="Digit4" data-en="4" data-enshift="$" data-ru="4" data-rushift=";"></button>\n    <button data-key="Digit5" data-en="5" data-enshift="%" data-ru="5" data-rushift="%"></button>\n    <button data-key="Digit6" data-en="6" data-enshift="^" data-ru="6" data-rushift=":"></button>\n    <button data-key="Digit7" data-en="7" data-enshift="&" data-ru="7" data-rushift="?"></button>\n    <button data-key="Digit8" data-en="8" data-enshift="*" data-ru="8" data-rushift="*"></button>\n    <button data-key="Digit9" data-en="9" data-enshift="(" data-ru="9" data-rushift="("></button>\n    <button data-key="Digit0" data-en="0" data-enshift=")" data-ru="0" data-rushift=")"></button>\n    <button data-key="Minus" data-en="-" data-enshift="_" data-ru="-" data-rushift="_"></button>\n    <button data-key="Equal" data-en="=" data-enshift="+" data-ru="=" data-rushift="+"></button>\n    <button data-key="Backspace" data-en="&lArr;" data-enshift="&lArr;" data-ru="&lArr;" data-rushift="&lArr;"></button>\n  </div>\n  <div class="row">\n    <button data-key="Tab" data-en="Tab" data-enshift="Tab" data-ru="Tab" data-rushift="Tab"></button>\n    <button data-key="KeyQ" data-en="q" data-enshift="Q" data-ru="й" data-rushift="Й"></button>\n    <button data-key="KeyW" data-en="w" data-enshift="W" data-ru="ц" data-rushift="Ц"></button>\n    <button data-key="KeyE" data-en="e" data-enshift="E" data-ru="у" data-rushift="У"></button>\n    <button data-key="KeyR" data-en="r" data-enshift="R" data-ru="к" data-rushift="К"></button>\n    <button data-key="KeyT" data-en="t" data-enshift="T" data-ru="е" data-rushift="Е"></button>\n    <button data-key="KeyY" data-en="y" data-enshift="Y" data-ru="н" data-rushift="Н"></button>\n    <button data-key="KeyU" data-en="u" data-enshift="U" data-ru="г" data-rushift="Г"></button>\n    <button data-key="KeyI" data-en="i" data-enshift="I" data-ru="ш" data-rushift="Ш"></button>\n    <button data-key="KeyO" data-en="o" data-enshift="O" data-ru="щ" data-rushift="Щ"></button>\n    <button data-key="KeyP" data-en="p" data-enshift="P" data-ru="з" data-rushift="З"></button>\n    <button data-key="BracketLeft" data-en="[" data-enshift="{" data-ru="х" data-rushift="Х"></button>\n    <button data-key="BracketRight" data-en="]" data-enshift="}" data-ru="ъ" data-rushift="Ъ"></button>\n    <button data-key="Backslash" data-en="\\" data-enshift="|" data-ru="\\" data-rushift="/"></button>\n  </div>\n  <div class="row">\n    <button data-key="CapsLock" data-en="Caps" data-enshift="Caps" data-ru="Caps" data-rushift="Caps"></button>\n    <button data-key="KeyA" data-en="a" data-enshift="A" data-ru="ф" data-rushift="Ф"></button>\n    <button data-key="KeyS" data-en="s" data-enshift="S" data-ru="ы" data-rushift="Ы"></button>\n    <button data-key="KeyD" data-en="d" data-enshift="D" data-ru="в" data-rushift="В"></button>\n    <button data-key="KeyF" data-en="f" data-enshift="F" data-ru="а" data-rushift="А"></button>\n    <button data-key="KeyG" data-en="g" data-enshift="G" data-ru="п" data-rushift="П"></button>\n    <button data-key="KeyH" data-en="h" data-enshift="H" data-ru="р" data-rushift="Р"></button>\n    <button data-key="KeyJ" data-en="j" data-enshift="J" data-ru="о" data-rushift="О"></button>\n    <button data-key="KeyK" data-en="k" data-enshift="K" data-ru="л" data-rushift="Л"></button>\n    <button data-key="KeyL" data-en="l" data-enshift="L" data-ru="д" data-rushift="Д"></button>\n    <button data-key="Semicolon" data-en=";" data-enshift=":" data-ru="ж" data-rushift="Ж"></button>\n    <button data-key="Quote" data-en="\'" data-enshift="&#34;" data-ru="э" data-rushift="Э"></button>\n    <button data-key="Enter" data-en="&crarr;" data-enshift="&crarr;" data-ru="&crarr;" data-rushift="&crarr;"></button>\n  </div>\n  <div class="row">\n    <button data-key="ShiftLeft" data-en="Shift" data-enshift="Shift" data-ru="Shift" data-rushift="Shift"></button>\n    <button data-key="KeyZ" data-en="z" data-enshift="Z" data-ru="я" data-rushift="Я"></button>\n    <button data-key="KeyX" data-en="x" data-enshift="X" data-ru="ч" data-rushift="Ч"></button>\n    <button data-key="KeyC" data-en="c" data-enshift="C" data-ru="с" data-rushift="С"></button>\n    <button data-key="KeyV" data-en="v" data-enshift="V" data-ru="м" data-rushift="М"></button>\n    <button data-key="KeyB" data-en="b" data-enshift="B" data-ru="и" data-rushift="И"></button>\n    <button data-key="KeyN" data-en="n" data-enshift="N" data-ru="т" data-rushift="Т"></button>\n    <button data-key="KeyM" data-en="m" data-enshift="M" data-ru="ь" data-rushift="Ь"></button>\n    <button data-key="Comma" data-en="," data-enshift="<" data-ru="б" data-rushift="Б"></button>\n    <button data-key="Period" data-en="." data-enshift=">" data-ru="ю" data-rushift="Ю"></button>\n    <button data-key="Slash" data-en="/" data-enshift="?" data-ru="." data-rushift=","></button>\n    <button data-key="ArrowUp" data-en="&uarr;" data-enshift="&uarr;" data-ru="&uarr;" data-rushift="&uarr;"></button>\n    <button data-key="ShiftRight" data-en="Shift" data-enshift="Shift" data-ru="Shift" data-rushift="Shift"></button>\n  </div>\n  <div class="row">\n    <button data-key="ControlLeft" data-en="Ctrl" data-enshift="Ctrl" data-ru="Ctrl" data-rushift="Ctrl"></button>\n    <button data-key="MetaLeft" data-en="Win" data-enshift="Win" data-ru="Win" data-rushift="Win"></button>\n    <button data-key="AltLeft" data-en="Alt" data-enshift="Alt" data-ru="Alt" data-rushift="Alt"></button>\n    <button data-key="Space" data-en=" " data-enshift=" " data-ru=" " data-rushift=" "></button>\n    <button data-key="AltRight" data-en="Alt" data-enshift="Alt" data-ru="Alt" data-rushift="Alt"></button>\n    <button data-key="ArrowLeft" data-en="&larr;" data-enshift="&larr;" data-ru="&larr;" data-rushift="&larr;"></button>\n    <button data-key="ArrowDown" data-en="&darr;" data-enshift="&darr;" data-ru="&darr;" data-rushift="&darr;"></button>\n    <button data-key="ArrowRight" data-en="&rarr;" data-enshift="&rarr;" data-ru="&rarr;" data-rushift="&rarr;"></button>\n    <button data-key="ControlRight" data-en="Ctrl" data-enshift="Ctrl" data-ru="Ctrl" data-rushift="Ctrl"></button>\n  </div>\n</div>'),e(h,' <p class="descripton">\n    Клавиатура создана в операционной системе Windows.<br/>\n    Смена языка раскладки - зажать Shift, затем Ctrl.\n  </p>'),t=document.querySelector("textarea"),a=document.querySelectorAll("button"),u(r,i,s),window.addEventListener("keydown",(function(t){var a=document.querySelector("button[data-key='".concat(t.code,"']"));a&&"CapsLock"===a.dataset.key&&(a.classList.toggle("pressed"),u(r=!r,i,s),t.preventDefault()),a&&"CapsLock"!==a.dataset.key&&(a.classList.add("pressed"),d(a.innerHTML),t.preventDefault()),a&&"Shift"===a.dataset.en&&(u(r,i=!0,s),t.preventDefault()),a&&"Ctrl"===a.dataset.en&&i&&(s=!s,o.setItem("langEn",s),u(r,i,s),t.preventDefault())})),window.addEventListener("keyup",(function(t){var a=document.querySelector("button[data-key='".concat(t.code,"']"));a&&"CapsLock"!==a.dataset.key&&(a.classList.remove("pressed"),t.preventDefault()),a&&"Shift"===a.dataset.en&&(u(r,i=!1,s),t.preventDefault())})),window.addEventListener("mousedown",(function(t){"BUTTON"===t.target.nodeName&&"CapsLock"!==t.target.dataset.key&&(d(t.target.innerHTML),t.preventDefault()),"BUTTON"===t.target.nodeName&&"CapsLock"===t.target.dataset.key&&(t.target.classList.toggle("pressed"),u(r=!r,i,s),t.preventDefault()),"BUTTON"===t.target.nodeName&&"Shift"===t.target.dataset.en&&(u(r,i=!0,s),t.preventDefault()),"BUTTON"===t.target.nodeName&&"Ctrl"===t.target.dataset.en&&i&&(s=!s,o.setItem("langEn",s),u(r,i,s),t.preventDefault())})),window.addEventListener("mouseup",(function(t){u(r,i=!1,s),t.preventDefault()}))})();