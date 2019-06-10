let value1 = "";
let value2 = "";
let sign = "";
let value1_focus = true;
let display = document.getElementById("res");

function addToVal(id) {
    if(value1_focus){
        value1 += document.getElementById(id).innerHTML;
        display.innerHTML = value1;
    }
    else {
        value2 += document.getElementById(id).innerHTML;
        display.innerHTML = value1 + sign + value2;
    }
}

function addOperator(id) {
    sign = document.getElementById(id).innerHTML;
    value1_focus = false;
    display.innerHTML = value1 + sign;
}

function clearAll() {
    value1 = "";
    value2 = "";
    sign = "";
    value1_focus = true;
    display.innerHTML = "";
}

function answer() {
    let dec_val1 = parseInt(value1, 2);
    let dec_val2 = parseInt(value2, 2);
    value1 = dec_val1.toString();
    value2 = dec_val2.toString();
    let result = value1 + sign + value2;
    let dec_res = eval(result);
    let bin_res = Number(dec_res).toString(2);
    display.innerHTML = `${result} = ${dec_res} = ${bin_res}`;
}