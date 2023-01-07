

function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    interestrateValue = document.getElementById("interest-rate").value;
    monthsToPay = document.getElementById("month-to-pay").value;

    interest = (loanAmountValue * (interestrateValue * 0.01) ) / monthsToPay;

    monthlyPayment = (loanAmountValue / monthsToPay + interest);

    document.getElementById("payment").innerHTML=`Monthly Payment: ${monthlyPayment}`;
}