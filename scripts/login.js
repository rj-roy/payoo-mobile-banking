document.getElementById("login-btn").addEventListener('click', function(){

    const inputNumber = document.getElementById("input-number");
    const mobileNumber = inputNumber.value;

    const inputPin = document.getElementById("input-pin");
    const pinNumber = inputPin.value;

    if(
        mobileNumber.length === 11 && !isNaN(mobileNumber) &&
        pinNumber.length === 4 && !isNaN(pinNumber)
    ){
        window.location.replace('/home.html')
    }

    else{
        alert("Mobile Number or Pin is Wrong")
    }
})