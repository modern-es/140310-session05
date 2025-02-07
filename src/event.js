import confetti from 'canvas-confetti';
import { qs } from './utils/dom'
import XYZ from './utils/dom'
/*
    path:       ./  -> current folder
                ../ -> parent folder

    default:    import confetti from 'canvas-confetti';
                import XYZ from './utils/dom' -> XYZ = ?

    named import:
                import { qs } from './utils/dom'

    import css
                import 'animate.css/animate.min.css'

*/

console.log(XYZ, '<---')
// const button = document.querySelector('#events button');
const button = qs('#events button');
button.addEventListener("click", e => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});


const input = qs('#events input');

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



const body = qs('body');
body.addEventListener('keydown', e => {
    if (e.key === 'p' && e.ctrlKey) {
        e.preventDefault();
    }
})

// window.addEventListener('contextmenu', e => {
//     e.preventDefault();
// })