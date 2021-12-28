const letter = document.getElementById('carta-gerada')
const text = document.getElementById('carta-texto')
const letterCreator = document.getElementById('criar-carta')

// Requisito 3

function letterGenerator() {
    let splitedText = text.value.split(' ');
    
    for (let i = 0; i < splitedText.length; i += 1) {
       let word = document.createElement('span');

       word.innerText = splitedText[i];
       letter.appendChild(word)
    }
}

letterCreator.addEventListener('click', letterGenerator)
// essa é a minha carta !!!
