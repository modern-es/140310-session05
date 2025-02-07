import 'animate.css/animate.min.css'

// let c1 = document.querySelector('.c1');
// let c2 = document.querySelector('.c2');
// let c3 = document.querySelector('.c3');


// c1.addEventListener('click', e => {
//     e.stopPropagation();
//     c1.classList.add('animate__pulse')
// })
// c2.addEventListener('click', e => {
//     e.stopPropagation();
//     c2.classList.add('animate__bounce')
// })
// c3.addEventListener('click', e => {
//     e.stopPropagation();
//     c3.classList.add('animate__wobble')
// })

document.querySelector('.my-flag').addEventListener('click', e => {
    e.target.classList.add(e.target.getAttribute('data-animate'));
})