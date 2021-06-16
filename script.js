const key1= document.querySelector('.key1');
const keycode= document.querySelector('.keycode');
const code= document.querySelector('.code');

window.addEventListener('keydown', (event) => {
    key1.innerHTML=`${event.key}`;
});

window.addEventListener('keydown', (event) => {
    keycode.innerHTML=`${event.keyCode}`;
});

window.addEventListener('keydown', (event) => {
    code.innerHTML=`${event.code}`;
});