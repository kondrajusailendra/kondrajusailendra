function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
}

function clearResult() {
    document.getElementById('result').value = '';
}
