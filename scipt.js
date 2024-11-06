
const manualRates = {
    "USD": 1.00,        // US Dollar
    "EUR": 0.85,        // Euro
    "GBP": 0.75,        // British Pound
    "JPY": 110.53,      // Japanese Yen
    "AUD": 1.40,        // Australian Dollar
    "CAD": 1.30,        // Canadian Dollar
    "CHF": 0.92,        // Swiss Franc
    "CNY": 6.45,        // Chinese Yuan
    "INR": 74.15,       // Indian Rupee
    "RUB": 75.50        // Russian Ruble
};

// Event listener to display currency rates when the "Get Data" button is clicked
document.getElementById("getDataBtn").addEventListener("click", function() {
    let output = '<h3>Currency Rates:</h3><ul>';
    for (let currency in manualRates) {
        output += `<li>${currency}: ${manualRates[currency].toFixed(2)}</li>`;
    }
    output += '</ul>';
    document.getElementById("apiData").innerHTML = output;
});
