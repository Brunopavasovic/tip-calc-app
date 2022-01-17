let billInput = document.getElementById("bill-input");
let numOfPeople = document.getElementById("person-input");
let customBtn = document.getElementById("btn5");
let resetBtn = document.getElementById("resetBtn");

let btns = document.querySelectorAll('[data-tip]');

const preventTyping = () => {
    let disabled = false;
    if (numOfPeople.value === '' || numOfPeople.value === '0') {
        disabled = true;
    }
    if(billInput.value === '' || billInput.value === '0') {
        disabled = true;
    }

    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btn.disabled = disabled;
    }
}

billInput.addEventListener('input', preventTyping);

preventTyping();
numOfPeople.addEventListener('input', preventTyping);

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    const tip = parseFloat(btn.dataset.tip);
    console.log('Tip: ', tip);

    btn.addEventListener('click', () => calculatePercentage(tip));
}

function formatCurrency(num) {
    const rounded = Math.round(num * 100) / 100;

    return `$${rounded}`;
}

const calculatePercentage = (perc) => {
    let tipAmount = (perc / 100 * billInput.value);
    let total = tipAmount / numOfPeople.value;
    document.getElementById("outputTipAmount").innerHTML = formatCurrency(tipAmount);
    document.getElementById("outputTotalAmount").innerHTML = formatCurrency(total);
}

resetBtn.addEventListener("click", function () {
    document.getElementById("outputTipAmount").innerHTML = "$" + "" + "00.00";
    document.getElementById("outputTotalAmount").innerHTML = "$" + "" + "00.00";
    billInput.value = "0";
    numOfPeople.value = "0";



});
