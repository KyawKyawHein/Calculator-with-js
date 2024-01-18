
//function for calculator
let text = document.getElementById("showText");
let numArr = [0,1,2,3,4,5,6,7,8,9];

function showText(symbol){
    if (text.innerText == 0 && text.innerText.length==1) {
        for (const number of numArr) {
            //  check the number u clicked is same or not with numArr array
            if (symbol == number) {
                document.getElementById("showText").innerHTML = symbol;
            }
        }
    }else{
        document.getElementById("showText").innerHTML += symbol;
    }
}

function clearAll(){
    $("#showText").html("0");
}

function delBtn(){
    let innerText = text.innerText;
    let currentText = innerText.substr(0,innerText.length-1);
    text.innerHTML = currentText;
    if (text.innerText.length == 0){
        text.innerText = 0;
    }
}

function showDot(){
    if (text.innerText.length == 1 && text.innerText==0){
        text.innerHTML = "0.";
     }else{
        showSymbol(".");
     }
}

function showSymbol(symbol) {
    // if (text.innerText == 0 && text.innerText.length==1) {
    //     text.innerText += symbol;
    // }else{
    // }
    let operators = ["+", "-", "*", "/", "%", '.'];
    let currentText = text.innerText;
    let length = text.innerText.length;
    let lastText = currentText.substr(length - 1, length);
    if (symbol != lastText) {
        if (lastText == "+" || lastText == "-" || lastText == "*" || lastText == "/" || lastText == "%" || lastText == ".") {
            let changeSymbolText = currentText.substr(0, currentText.length - 1);
            document.getElementById("showText").innerHTML = changeSymbolText + symbol;
        } else {
            document.getElementById("showText").innerHTML = currentText + symbol;
            }
    }
}

function calculate(){
    let value = text.innerText;
    text.innerText = eval(value);
}