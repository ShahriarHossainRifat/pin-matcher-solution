function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random
}

function getPin() {
    const pin = generatePin()
    const pinString = pin + ""
    if (pinString.length === 4) {
        return pin
    }
    else {
        return getPin()
    }
}

document.getElementById("generate-pin").addEventListener("click", function () {
    const generatedPin = getPin()

    const generatedPinInputField = document.getElementById("generated-pin-input-field")

    generatedPinInputField.value = generatedPin
})

document.getElementById("calculator").addEventListener("click", function (event) {
    const number = event.target.innerText
    const typedNumberField = document.getElementById("entered-pin-input-field")
    const previousTypedNumber = typedNumberField.value
    const newTypedNumber = previousTypedNumber + number
    if (isNaN(number)) {
        if (number === "C") {
            typedNumberField.value = ""
        }
        else if(number === "<"){
            const digits = previousTypedNumber.split("")
            digits.pop()
            const remainingDigits = digits.join("")
            typedNumberField.value = remainingDigits
        }
    }
    else {
        typedNumberField.value = newTypedNumber
    }
})

document.getElementById("verify-pin").addEventListener("click", function(){
    const displayPinField = document.getElementById("generated-pin-input-field")
    const displayPin = displayPinField.value

    const enteredPinField = document.getElementById("entered-pin-input-field")
    const enteredPin = enteredPinField.value

    const pinMatchedAlert = document.getElementById("pin-matched-alert")
    const pinNotMatchedAlert = document.getElementById("pin-not-matched-alert")

    if(displayPin === enteredPin){
        pinMatchedAlert.style.display = "block"
        pinNotMatchedAlert.style.display = "none"
    }
    else{
        pinNotMatchedAlert.style.display = "block"
        pinMatchedAlert.style.display = "none"
    }
})