import { printError, printResult } from "./printResult.js";
import getDateDiff from "./getDateDiff.js";
import { startTimer, stopTimer } from "./timer.js"

const form = document.getElementById('datecalc');
form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    console.log(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    console.log(firstDate, secondDate)

    if (!firstDate || !secondDate) {
        printError('Введите дату')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        console.log(dateDiff)
        printResult(`Лет:${dateDiff.years} Месяцев:${dateDiff.months} Дней:${dateDiff.days}`)
    }
}


const buttonHide = document.getElementById('buttonHide')
buttonHide.addEventListener('click', function (event) {
    const timer = document.getElementById('formTimer')
    timer.classList.toggle('hiden')
});

const formTimer = document.getElementById('formTimer');
formTimer.onsubmit = (event) => {
    event.preventDefault();
}

const buttonStart = document.getElementById('buttonStart')
buttonStart.addEventListener('click', startTimer)

const buttonStop = document.getElementById('buttonStop')
buttonStop.addEventListener('click', stopTimer)


