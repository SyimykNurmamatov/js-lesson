function randomGenerate() {
    const HEX_MAX = 255;
    const HEX_MIN = 0;

const randNumber = Math.round(Math.random() * (HEX_MAX - HEX_MIN) + HEX_MIN );
return randNumber.toString(16).padStart(2,'0');
}

function changeColor() {
//    console.log('test')
    let redHex = randomGenerate();
    let greenHex = randomGenerate();
    let blueHex = randomGenerate();

    let colorHex = ['#', redHex, greenHex, blueHex].join("")

    let wrapperInner = document.querySelector('.wrapper-inner');
    let colorText = wrapperInner.getElementsByClassName('background-color')[0];
    colorText.innerHTML = colorHex
    document.body.style.background = colorHex
}

const button = document.getElementById('color-btn')
console.log(button)

button.addEventListener('click', changeColor)