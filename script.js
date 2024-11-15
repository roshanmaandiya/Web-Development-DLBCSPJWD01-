import { currency_list, api } from "./currencyCodes.js";

const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const resultTag = document.getElementById("result");
const btn = document.getElementById("btn");
const status = document.getElementById("status");
const userValueInput = document.getElementById("userValue");

// Populate currency dropdowns
currency_list.forEach(([code, name]) => {
    const optionFrom = new Option(`${code} - ${name}`, code);
    const optionTo = new Option(`${code} - ${name}`, code);
    
    if (code === "USD") optionFrom.selected = true;
    if (code === "INR") optionTo.selected = true;

    fromCurrencySelect.add(optionFrom);
    toCurrencySelect.add(optionTo);
});

// Swap currencies
document.getElementById("switchCurrency").onclick = () => {
    [fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value];
};

// Convert amount
btn.onclick = () => {
    const amount = parseFloat(userValueInput.value);
    if (amount < 1 || isNaN(amount)) {
        userValueInput.style.border = "1px solid red";
        resultTag.textContent = "Enter a valid amount above zero.";
    } else {
        userValueInput.style.border = "1px solid gray";
        btn.disabled = true;
        btn.textContent = "Converting...";
        convertAmount(amount);
    }
};


async function convertAmount(amount) {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/${fromCurrencySelect.value}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        const rate = data.conversion_rates[toCurrencySelect.value];
        const convertedAmount = (amount * rate).toFixed(2);

        status.textContent = `1 ${fromCurrencySelect.value} = ${rate.toFixed(2)} ${toCurrencySelect.value}`;
        resultTag.textContent = `${amount} ${fromCurrencySelect.value} = ${convertedAmount} ${toCurrencySelect.value}`;

    } catch (error) {
        resultTag.textContent = "Conversion failed. Please try again.";
    } finally {
        btn.disabled = false;
        btn.textContent = "Convert";
    }
}
