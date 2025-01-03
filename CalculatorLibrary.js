var txtInput;
var txtResult;

function initialize() {
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click', numberClick, false);
    }
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');
    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);

    document.getElementById('btnMultiplication').addEventListener('click', multiplicationClick, false);
    document.getElementById('btnDivision').addEventListener('click', divisionClick, false);
    clear();
}
function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}
function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}
function clearEntry() {
    txtInput.value = '0';
}
function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();
}
function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}
function multiplicationClick() {
    let a = Number(txtResult.value);
    if (a === 0) {
        txtResult.value = 1;
    }
    txtResult.value = Number(txtResult.value) * Number(txtInput.value);
    clearEntry();
}

function divisionClick() {
    let a = Number(txtResult.value);
    if (a === 0) {
        txtResult.value = Number(txtInput.value);
    }
    else {
        txtResult.value = Number(txtResult.value) / Number(txtInput.value);     
    }
    clearEntry();
}

