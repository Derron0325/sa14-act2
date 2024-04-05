function convert() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amount').value;
  
    fetch(`https://api.fixer.io/latest?base=${sourceCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[targetCurrency];
        const convertedAmount = amount * rate;
        document.getElementById('result').innerHTML = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency} (Rate: ${rate.toFixed(4)})`;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'An error occurred. Please try again later.';
      });
  }