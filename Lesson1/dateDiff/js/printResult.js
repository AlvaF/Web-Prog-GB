const result = document.getElementById('datecalc__result')

export const printError = (errorText) => {
    result.innerText = errorText
    result.classList.add('error')
}
export const printResult = (date) => {
    result.innerText = date
}