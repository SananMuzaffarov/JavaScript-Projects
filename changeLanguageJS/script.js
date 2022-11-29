// JavaScript Section
const langSec = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textDesc = document.querySelector('.description');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language');

        textTitle.textContent = data[attr].title;
        textDesc.textContent = data[attr].description;
    });
});



const data = {
    "english": 
    {
        "title": "Hello World!",
        "description": "Hi guys, I'm Sanan Muzaffarov and I'm from Azerbaijan."
    },
    "azerbaijan": 
    {
        "title": "Salam Dünya!",
        "description": "Salam uşaqlar, mən Sənan Muzaffarov və mən Azərbaycandanam."
    },
    "turkish": 
    {
        "title": "Selam Dünya!",
        "description": "Merhaba arkadaşlar, ben Sanan Muzaffarov ve Azerbaycanlıyım."
    },
    "russian": 
    {
        "title": "Привет, мир!",
        "description": "Привет, ребята, меня зовут Санан Музаффаров, я из Азербайджана."
    }
}
 