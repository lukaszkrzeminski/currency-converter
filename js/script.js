let userValueElement = document.querySelector(".js-userValue");
let userCurrencyElement = document.querySelector(".js-userCurrency");
let chosenCurrencyElement = document.querySelector(".js-chosenCurrency");
let finalValueElement = document.querySelector(".js-finalValue");
let formElement = document.querySelector(".js-form");


let PLNtoEUR = 0.22;
let PLNtoUSD = 0.25;
let EURtoUSD = 1.12;
let EURtoPLN = 1/PLNtoEUR;
let USDtoPLN = 1/PLNtoUSD;
let USDtoEUR = 1/EURtoUSD;


userValueElement.focus();

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let startValue = +userValueElement.value;
    let startCurrency = userCurrencyElement.value;
    let finalCurrency = chosenCurrencyElement.value;

    let finalValue

    switch (startCurrency+finalCurrency) {
        case "PLNEUR":
            finalValue = PLNtoEUR * startValue;
            break;
        case "PLNUSD":
            finalValue = PLNtoUSD * startValue;
            break;
        case "EURUSD":
            finalValue = EURtoUSD * startValue;
            break;
        case"EURPLN":
            finalValue = EURtoPLN * startValue;
            break;
        case "USDEUR":
            finalValue = USDtoEUR * startValue;
            break;
        case "USDPLN":
            finalValue = USDtoPLN * startValue;
            break;
        default:
            finalValue = startValue;
    }

    finalValueElement.value = finalValue.toFixed(2);

});