

var result;
function submit(){
    var inputCurrency = document.getElementById("inputCurrency").value
    var fromCurrency = document.getElementById("fromCurrency").value
    var toCurrency = document.getElementById("toCurrency").value
    var currency = document.getElementById("currency")
    console.log(toCurrency);
    if(toCurrency == "USD"){
        currency.innerHTML = "USD"
    } else{
        currency.innerHTML = "VND"
    }
    if(fromCurrency == toCurrency ){
        result = inputCurrency;
    }else if(fromCurrency == "VND" && toCurrency == "USD"){
        result = inputCurrency/24800;
    }else {
        result = inputCurrency*24800;
    }

    document.getElementById("Result").innerHTML = result;
    // console.log(currency);
    // console.log(inputCurrency);
}