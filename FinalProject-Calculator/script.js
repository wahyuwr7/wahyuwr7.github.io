const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNum = ''
let calculationOperator = ''
let currentNum = '0'

const inputNum = (number) => {
    if (currentNum === '0') {
        currentNum = number
    } else {
        currentNum += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNum(event.target.value)
        updateScreen(currentNum)
    })
})

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNum = currentNum
    }
    calculationOperator = operator
    currentNum = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector(".equal-sign")

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNum) + parseFloat(currentNum)
            break;
        case '-':
            result = parseFloat(prevNum) - parseFloat(currentNum)
            break;
        case '*':
            result = parseFloat(prevNum) * parseFloat(currentNum)
            break;
        case '/':
            result = parseFloat(prevNum) / parseFloat(currentNum)
            break;

        default:
            return;
    }
    currentNum = result
    calculationOperator = ''
}

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNum)
})

const inputDecimal = (dot) => {
    if (currentNum.includes('.')) {
        return
    } else {
        currentNum += dot
    }
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNum)
})

const ac = document.querySelector(".ac")

const clearAll = () => {
    prevNum = ''
    calculationOperator = ''
    currentNum = '0'
}

ac.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNum)
})

const percent = document.querySelector(".percent")

percent.addEventListener("click", () => {
    updateScreen(currentNum / 100)
})