import confetti from 'canvas-confetti';

const button = document.querySelector('#events button');
button.addEventListener("click", e => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});


const input = document.querySelector('#events input');
input.addEventListener('keypress', e => {
    if (e.key >= '0' && e.key <= '9') {
        //
    } else {
        e.preventDefault();
    }
})
//keydown
//keypress
//input/change
//keyup



const body = document.querySelector('body');
body.addEventListener('keydown', e => {
    if (e.key === 'p' && e.ctrlKey) {
        e.preventDefault();
    }
})

window.addEventListener('contextmenu', e => {
    e.preventDefault();
})