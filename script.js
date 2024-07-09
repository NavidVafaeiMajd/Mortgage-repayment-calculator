

function submitForm(){
    const mortgageAmount = document.getElementById('MortgageAmount');
    const mortgageTerm = document.getElementById('MortgageTerm');
    const interestRate = document.getElementById('InterestRate');
    const mortgageAmountValue =Number(mortgageAmount.value);
    const mortgageTermValue = Number(mortgageTerm.value) * 12 ;
    const interestRateValue =Number(interestRate.value)/ 100 / 12;
    const moneyRepay = mortgageAmountValue * interestRateValue * (Math.pow(1 + interestRateValue, mortgageTermValue)) / (Math.pow(1 + interestRateValue, mortgageTermValue) - 1);
    console.log(moneyRepay.toFixed(2))
    typeof(moneyRepay)
}

