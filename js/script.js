{
    const computeResult = (startCurrency, finalCurrency, startValue) => {
        const PLNtoEUR = 0.22;
        const PLNtoUSD = 0.25;
        const EURtoUSD = 1.12;
        const EURtoPLN = 1 / PLNtoEUR;
        const USDtoPLN = 1 / PLNtoUSD;
        const USDtoEUR = 1 / EURtoUSD;

        switch (startCurrency + finalCurrency) {
            case "PLNEUR":
                return finalValue = PLNtoEUR * startValue;
            case "PLNUSD":
                return finalValue = PLNtoUSD * startValue;
            case "EURUSD":
                return finalValue = EURtoUSD * startValue;
            case "EURPLN":
                return finalValue = EURtoPLN * startValue;
            case "USDEUR":
                return finalValue = USDtoEUR * startValue;
            case "USDPLN":
                return finalValue = USDtoPLN * startValue;
            default:
                return finalValue = startValue;
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const userValueElement = document.querySelector(".js-userValue");
        const userCurrencyElement = document.querySelector(".js-userCurrency");
        const chosenCurrencyElement = document.querySelector(".js-chosenCurrency");
        const finalValueElement = document.querySelector(".js-finalValue");

        const startValue = +userValueElement.value;
        const startCurrency = userCurrencyElement.value;
        const finalCurrency = chosenCurrencyElement.value;

        let finalValue = computeResult(startCurrency, finalCurrency, startValue);

        finalValueElement.value = finalValue.toFixed(2);

    }

    const init = () =>{
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onSubmit);
    }

    init();
    
}