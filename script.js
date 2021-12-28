const letter = document.getElementById('carta-gerada');
const text = document.getElementById('carta-texto');
const letterCreator = document.getElementById('criar-carta');

// Requisito 3

function letterGenerator() {
    letterCleaner();
   
    let splitedText = text.value.split(' ');
    
    for (let i = 0; i < splitedText.length; i += 1) {
       let word = document.createElement('span');

       word.innerText = splitedText[i];
       letter.appendChild(word);
    }
}

function letterCleaner() {
    let child = letter.children;

    while (child[0]) {
        child[0].outerHTML = '';
    }
}

letterCreator.addEventListener('click', letterGenerator);
// essa é a minha carta !!!
