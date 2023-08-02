const htmlContainer = document.querySelector('.container');
const btnAddTask = document.querySelector('.add');

const createNewElement = () => {
    const newDiv = document.createElement('div');
    const newBr = document.createElement('br');
    const newP = document.createElement('p')
    const newCheckboxDone = document.createElement('input')
    newCheckboxDone.setAttribute('type', 'checkbox')
    const newDoneBtn = document.createElement('button');
    const newDontBtn = document.createElement('button');
    newCheckboxDone.classList.add('done')
    newCheckboxDone.classList.add('cbstyled')
    newDontBtn.classList.add('dont')
    newDiv.classList.add('box')
    newP.classList.add('descr')
    newDontBtn.textContent = "X";
    newDoneBtn.style.backgroundColor = "green"
    newDontBtn.style.backgroundColor = "red"
    newDiv.append(newP)
    newDiv.append(newCheckboxDone)
    newDiv.append(newDontBtn)
    htmlContainer.append(newDiv)
    htmlContainer.append(newBr)
}

const actualP = (element) => { // получаем активный параграф - (ближнний параграф с классом descr)
    const currentP = element.target.closest('.descr')
}

btnAddTask.addEventListener('click', () => {
    const userAnswer = prompt("Was steht heute an?", "");
    if (userAnswer === null || userAnswer === "") {
        alert("Eingabe ist leer")
    } else {
        createNewElement();
        const createdP = document.querySelectorAll('#container .descr')
        const createdCheckboxDone = document.querySelectorAll('#container .done')
        const createdBtnDont = document.querySelectorAll('#container .dont')
        createdCheckboxDone.forEach(el => {
            el.addEventListener('click', addClassFn)
        })
        createdBtnDont.forEach(el => {
            el.addEventListener('click', removeFn)
        })
        createdP.forEach(el => {
            el.textContent = userAnswer
        })
    }
})

const addClassFn = (element) => { // используем ту область, в которой была нажата кнопка + добавляем класс
    const currentElement = element.target.closest('.box');
    currentElement.classList.toggle('active');
}
const removeFn = (element) => {
    confirm("Sicher?",element.target.closest('.box').remove());
}



