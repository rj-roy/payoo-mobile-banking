function getValue(id){
    const input = document.getElementById(id);
    const value = input.value.trim();
    return value;
}


// Get Forms Accroding to button
function getFeatures(id){
    // const addMoney = document.getElementById("add-money");
    // const cashOut = document.getElementById("cashout");
    // const transferMoney = document.getElementById("transfer-money");
    // const getBonus = document.getElementById("get-bonus");
    // const payBill = document.getElementById("pay-bill");
    // const transaction = document.getElementById("transactions");


    // addMoney.classList.add("hidden");
    // cashOut.classList.add("hidden");
    // transferMoney.classList.add("hidden");
    // getBonus.classList.add("hidden");
    // payBill.classList.add("hidden");
    // transaction.classList.add("hidden");    
    
    // const selected = document.getElementById(id);    
    // selected.classList.remove("hidden");


    const sections = document.querySelectorAll(
        "#add-money, #cashout, #transfer-money, #get-bonus, #pay-bill, #transactions"
    );

    sections.forEach(section => section.classList.add("hidden"));

    const selected = document.getElementById(id);
    if(selected){
        selected.classList.remove("hidden")
    }

}

