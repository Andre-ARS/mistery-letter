const letter = document.getElementById('carta-gerada');
const text = document.getElementById('carta-texto');
const letterCreator = document.getElementById('criar-carta');
const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotationClass = ['rotateleft', 'rotateright'];
const tiltClass = ['skewleft', 'skewright'];

// Requisito 3
function letterGenerator() {
    letterCleaner();
   
    let splitedText = text.value.split(' ');
    
    for (let i = 0; i < splitedText.length; i += 1) {
        let word = document.createElement('span');
        
        word.innerText = splitedText[i];
        letter.appendChild(word);
    }  
    
    textCheck();
    classAttribuiter();
}

function letterCleaner() {
    let child = letter.children;

    while (child[0]) {
        child[0].outerHTML = '';
    }
}

letterCreator.addEventListener('click', letterGenerator);
// essa é a minha carta !!!

// Requisito 5

// função inspirada no código do [André Sousa]
function textCheck() {
    if (letter.innerText === '' || text.value === null) {
        let word = document.createElement('span');
        word.innerText = "Por favor, digite o conteúdo da carta.";
        letter.appendChild(word);
    } 
}

// Requisito 6
function randomNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function classAttribuiter() {
    for (let index = 0; index < letter.childElementCount; index += 1) {
        letter.children[index].classList.add(styleClass[randomNum(styleClass.length)], sizeClass[randomNum(sizeClass.length)], rotationClass[randomNum(rotationClass.length)], tiltClass[randomNum(tiltClass.length)]);
    }
}