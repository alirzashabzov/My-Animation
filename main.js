let whell = document.querySelector('.whell');
let spitBtn = document.querySelector('.spitBtn');
let value = Math.ceil(Math.random() * 600000000000);



spitBtn.onclick=function () {
    whell.style.transform = 'rotate(' + value + 'deg)';
    value += Math.ceil(Math.random() * 600000000000);
}






















