// calculator
const $ = document
const ac = $.querySelector('.ac')
const plusMinus = $.querySelector('.plus-minus')
const divideRemaining = $.querySelector('.divideRemaining')
const zero = $.querySelector('.zero')
const one = $.querySelector('.one')
const two = $.querySelector('.two')
const three = $.querySelector('.three')
const four = $.querySelector('.four')
const five = $.querySelector('.five')
const six = $.querySelector('.six')
const seven = $.querySelector('.seven')
const eight = $.querySelector('.eight')
const nine = $.querySelector('.nine')
const plus = $.querySelector('.plus')
const minus = $.querySelector('.minus')
const equal = $.querySelector('.equal')
const multiple = $.querySelector('.xmark')
const divide = $.querySelector('.divide')
const dot = $.querySelector('.dot')
const inputElem = $.querySelector('input')
const operation = $.querySelector('.operation')
let isMinus = true

let firstNumber;
let secondNumber;
let currentOperation;

zero.addEventListener('click', () => {
    inputElem.value += zero.innerHTML
})
one.addEventListener('click', () => {
    inputElem.value += one.innerHTML
})
two.addEventListener('click', () => {
    inputElem.value += two.innerHTML
})
three.addEventListener('click', () => {
    inputElem.value += three.innerHTML
})
four.addEventListener('click', () => {
    inputElem.value += four.innerHTML
})
five.addEventListener('click', () => {
    inputElem.value += five.innerHTML
})
six.addEventListener('click', () => {
    inputElem.value += six.innerHTML
})
seven.addEventListener('click', () => {
    inputElem.value += seven.innerHTML
})
eight.addEventListener('click', () => {
    inputElem.value += eight.innerHTML
})
nine.addEventListener('click', () => {
    inputElem.value += nine.innerHTML
})
dot.addEventListener('click', () =>{
    inputElem.value += dot.innerHTML
})



ac.addEventListener('click', () =>{
    inputElem.value = ''
    operation.innerHTML = ''
})
plusMinus.addEventListener('click', () =>{
    if(!isMinus){
        inputElem.value = ""
        isMinus = true
    }else{
        inputElem.value = "-"
        isMinus = false
    }
})
// plus operation
plus.addEventListener('click', () =>{
    firstNumber = +(inputElem.value)
    inputElem.value = '+'
    currentOperation = inputElem.value
    operation.innerHTML = currentOperation
    inputElem.value = ''
})
// minus operation
minus.addEventListener('click', () =>{
    firstNumber = +(inputElem.value)
    inputElem.value = '-'
    currentOperation = inputElem.value
    operation.innerHTML = currentOperation
    inputElem.value = ''
})
// multiple operation
multiple.addEventListener('click', () =>{
    firstNumber = +(inputElem.value)
    inputElem.value = '*'
    currentOperation = inputElem.value
    operation.innerHTML = currentOperation
    inputElem.value = ''
})
// divide operation
divide.addEventListener('click', () =>{
    firstNumber = +(inputElem.value)
    inputElem.value = '/'
    currentOperation = inputElem.value
    operation.innerHTML = currentOperation
    inputElem.value = ''
})
divideRemaining.addEventListener('click', () =>{
    firstNumber = +(inputElem.value)
    inputElem.value = '%'
    currentOperation = inputElem.value
    operation.innerHTML = currentOperation
    inputElem.value = ''
})
equal.addEventListener('click', () =>{
    secondNumber = +(inputElem.value)
    switch (currentOperation) {
        case '+':
            inputElem.value = firstNumber + secondNumber
            break;
        case '-':
            inputElem.value = firstNumber - secondNumber
            break;
        case '*':
            inputElem.value = firstNumber * secondNumber
            break;
        case '/':
            inputElem.value = firstNumber / secondNumber
        break;
        case '%':
            inputElem.value = firstNumber % secondNumber
        break;
        default:
            return('invalid data')
    }
    operation.innerHTML = ''
})
// clock function
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}