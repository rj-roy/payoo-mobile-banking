document.getElementById("logout-btn").addEventListener('click', function () {
    window.location.href = "/Login.html";
})

const avialBalance = document.getElementById("avail-balance");
const mainBalance = avialBalance.innerText;
let balance = Number(mainBalance);


//    add Money
document.getElementById("add-money-btn").addEventListener('click', function () {    
    const bankAccount = getValue("input-bc");
    const amount = getValue("input-amount");
    const authPin = getValue("input-auth-pin");

    if (
        bankAccount.length !== 11 || amount.length <= 0 || authPin.length !== 4
    ) {
        alert("Enter Valid Details")
    }

    else if (
        amount.length > 0 && bankAccount.length === 11 && authPin.length === 4
    ) {

        balance += Number(amount);
        avialBalance.innerText = balance
        alert("Amount added to account")
    }

    else {
        alert("Something Wrong")
        return;
    }
})


// cashout
document.getElementById("cashout-btn").addEventListener('click', function () {
    const agentNumber = getValue("input-agent");
    const amount = getValue("input-amount-w");
    const authPin = getValue("input-auth-pin-w");

    if (
        agentNumber.length !== 11 || amount.length > balance || authPin.length !== 4
    ) {
        alert("Enter Valid Details")
    }

    else if (
        amount.length < balance && agentNumber.length === 11 && authPin.length === 4
    ) {

        balance -= Number(amount);
        avialBalance.innerText = balance
        alert("Withdrawn Successfully")
    }

    else {
        alert("Something Wrong")
        return;
    }
})


// send money
document.getElementById("send-money-btn").addEventListener('click', function(){
    const userAc = getValue("input-ac-s");
    const transferAmount = getValue("input-amount-send");
    const pin = getValue("input-auth-pin-send");

    if (
        userAc.length !== 11 || transferAmount.length > balance || pin.length !== 4
    ) {
        alert("Enter Valid Details")
    }

    else if (
        transferAmount.length < balance && userAc.length === 11 && pin.length === 4
    ) {

        balance -= Number(transferAmount);
        avialBalance.innerText = balance;
        alert("Send Money Successfull");
    }

    else {
        alert("Transection Incomplete");
        return;
    }    
})


// getBonus

let couponUsed = false;

document.getElementById("get-bonus-btn").addEventListener('click', function(){
    const coupon = getValue("coupon");
    
    if(coupon === "NewUserPayoo" && !couponUsed){
        balance+= 500;
        avialBalance.innerText = balance;
        couponUsed = true;

        alert("New User Bonus Added to Account")
    }

    else if (couponUsed){
        alert("Coupon already used");
    }

    else{
        alert("Enter Valid Coupon");
    }
})


// pay bill
document.getElementById("pay-bill-btn").addEventListener('click', function(){
    const userAc = getValue("biller-ac");
    const transferAmount = getValue("input-amount-pay");
    const pin = getValue("input-auth-pin-pay");

    if (
        userAc.length !== 11 || transferAmount.length > balance || pin.length !== 4
    ) {
        alert("Enter Valid Details")
    }

    else if (
        transferAmount.length < balance && userAc.length === 11 && pin.length === 4
    ) {

        balance -= Number(transferAmount);
        avialBalance.innerText = balance;
        alert("Pay Bill Successfull");
    }

    else {
        alert("Transection Incomplete");
        return;
    }    
})