let res = document.getElementById('res');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let arry = [];
let arryOperands =[];
let arryOperator = [];
const operands = /[0,1]+/g;
const operator = /\D/;

btn0.onclick = () => {
    arry.push(0);
    res.innerHTML = arry.join("");
}
btn1.onclick = () => {
    arry.push(1);
    res.innerHTML = arry.join("");
}
btnClr.onclick = () => {
    arry=[];
    res.innerHTML = arry;
}
btnEql.onclick = () => {
    arryOperands = String(arry.join("")).match(/[0,1]+/g);
    let operand1 = arryOperands[0];
    let operand2 = arryOperands[1];
    arryOperator = String(arry.join("")).match(/\D/);
    let operator = arryOperator[0];
    let answer = '';
    if (operator == '+') answer = (parseInt(operand1,2) + parseInt(operand2,2)).toString(2)
    if (operator == '-') answer = (parseInt(operand1,2) - parseInt(operand2,2)).toString(2)
    if (operator == '*') answer = (parseInt(operand1,2) * parseInt(operand2,2)).toString(2)
    if (operator == '/') answer = (parseInt(operand1,2) / parseInt(operand2,2)).toString(2)
    arry = [];
    arry.push(answer);
    res.innerHTML = answer;
}
btnSum.onclick = () => {
    if (String(arry.join("")).match(/\D/)) res.innerHTML = arry.join("")
    else {
    arry.push('+');
    res.innerHTML = arry.join("");
    }
}
btnSub.onclick = () => {
    if (String(arry.join("")).match(/\D/)) res.innerHTML = arry.join("")
    else {
    arry.push('-');
    res.innerHTML = arry.join("");
    }
}
btnMul.onclick = () => {
    if (String(arry.join("")).match(/\D/)) res.innerHTML = arry.join("")
    else {
    arry.push('*');
    res.innerHTML = arry.join("");
    }
}
btnDiv.onclick = () => {
    if (String(arry.join("")).match(/\D/)) res.innerHTML = arry.join("")
    else {
    arry.push('/');
    res.innerHTML = arry.join("");
    }
}