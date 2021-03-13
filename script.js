//  // 10 requisito - incluir varias divs
 function addPixel () {
    let qtdPixel = 500;
    for (let index = 0; index < qtdPixel; index +=1) {
        let pixelParent = document.getElementById('pixel-board');
        let divPixel = document.createElement('div');

        divPixel.classList.add('pixel');
        pixelParent.appendChild(divPixel);
    }
} addPixel();


// 1.cria o click
let clickColor = document.getElementsByClassName('color');

// 2. adiciona o click
for(let index = 0; index < clickColor.length; index +=1) {
    clickColor[index].addEventListener('click', selectedRemove);
}

// remove a selected de todas as classes
function selectedRemove (evente) {
    let divClassRemove = document.getElementsByClassName('selected');
    divClassRemove[0].classList.remove('selected');

    let eventeTarget = evente.target;
    eventeTarget.classList.add('selected');
} 

// 8. incluir click nos pixels
let pixelSelect = document.getElementsByClassName('pixel');

for(let index = 0; index < pixelSelect.length; index +=1) {
    pixelSelect[index].addEventListener('click', pixelColor);
}

// função clicar no pixel
function pixelColor (event) {
    let eventTarget = event.target;
    eventTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

//9. limpar quadro de pixels

let clearPixels = document.getElementById('clear-board');

clearPixels.addEventListener('click', clearBoard);

function clearBoard () {
    let blockPixels = document.getElementsByClassName('pixel');
    for (let index = 0; index< blockPixels.length; index += 1){
        blockPixels[index].style.backgroundColor = 'white';
    }
 }