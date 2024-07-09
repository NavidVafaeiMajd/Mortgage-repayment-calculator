

function submitForm(){
    //get value of inputs
    const mortgageAmount = document.getElementById('MortgageAmount');
    const mortgageTerm = document.getElementById('MortgageTerm');
    const interestRate = document.getElementById('InterestRate');
    const mortgageAmountValue =Number(mortgageAmount.value);
    const mortgageTermValue = Number(mortgageTerm.value) * 12 ;
    const interestRateValue =Number(interestRate.value)/ 100 / 12;

    //oprators of Mortgage repayment calculator
    const moneyRepay = mortgageAmountValue * interestRateValue * (Math.pow(1 + interestRateValue, mortgageTermValue)) / (Math.pow(1 + interestRateValue, mortgageTermValue) - 1);
    const moneyRepayFloor = moneyRepay.toFixed(2);
    const totalRepay =(moneyRepayFloor * mortgageTermValue).toFixed(2);
    const radio = document.getElementById("calculator").elements["radiopay"].value;
 
    //condition for radio button
    if(radio == "repayment"){
        document.querySelector(".right-side").innerHTML=`      <h2>Your results</h2>
        <p>  Your results are shown below based on the information you provided. 
          To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <div id="right-side-result">
          <div id="monthly-repayments">
            <p>Your monthly repayments</p>
            <span class="monthly-repayments">243242</span>
          </div>
          <div id="total-repay">
            <p>Total you'll repay over the term </p>
            <span class="total-repay">4234234322343</span>
          </div>
        </div>`;
        const moneyRepayFloor = moneyRepay.toFixed(2);
        document.querySelector(".monthly-repayments").textContent =moneyRepayFloor;
        const totalRepay =(moneyRepayFloor * mortgageTermValue).toFixed(2);
        document.querySelector(".total-repay").textContent =totalRepay;

    }else{
        document.querySelector(".right-side").innerHTML=`      <h2>Your results</h2>
        <p>  Your results are shown below based on the information you provided. 
          To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <div id="right-side-result">
          <div id="monthly-repayments">
            <p>Your Interest Only</p>
            <span class="monthly-repayments" id="interestOnly">243242</span>
          </div>
        </div>`;
        const interestOnly = totalRepay - mortgageAmountValue ;
        document.getElementById("interestOnly").textContent =interestOnly;
    }
    

}

