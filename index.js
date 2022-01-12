let billInput  = document.getElementById("bill-input");
let numOfPeople = document.getElementById("person-input");
let btn5 = document.getElementById("btn5");
let btn10 = document.getElementById("btn10");
let btn15 = document.getElementById("btn15");
let btn25 = document.getElementById("btn25");
let btn50 = document.getElementById("btn50");
let customBtn = document.getElementById("btn5");
let resetBtn = document.getElementById("resetBtn");





btn5.addEventListener("click" , function () {
    let percentage = (5 * billInput.value) / 100;
    let total = percentage / numOfPeople.value;
    document.getElementById("outputTipAmount").innerHTML = "$" + percentage;
    document.getElementById("outputTotalAmount").innerHTML = "$" + total;
    
});

btn10.addEventListener("click" , function () {
    let percentage = (10 * billInput.value) / 100;
     let total = percentage / numOfPeople.value;
    document.getElementById("outputTipAmount").innerHTML = "$" + percentage;
     document.getElementById("outputTotalAmount").innerHTML = "$" + total;
});

btn15.addEventListener("click" , function () {
    let percentage = (15 * billInput.value) / 100;
     let total = percentage / numOfPeople.value;
     document.getElementById("outputTipAmount").innerHTML = "$" + percentage;
      document.getElementById("outputTotalAmount").innerHTML = "$" + total;
});

btn25.addEventListener("click" , function () {
    let percentage = (25 * billInput.value) / 100;
    let total = percentage / numOfPeople.value;
     document.getElementById("outputTipAmount").innerHTML = "$" + percentage;
      document.getElementById("outputTotalAmount").innerHTML = "$" + total;
});

btn50.addEventListener("click" , function () {
    let percentage = (50 * billInput.value) / 100;
     let total = percentage / numOfPeople.value;
     document.getElementById("outputTipAmount").innerHTML = "$" + percentage;
      document.getElementById("outputTotalAmount").innerHTML = "$" + total;
});

resetBtn.addEventListener("click" , function() {
   document.getElementById("outputTipAmount").innerHTML = "$" + "" + "00.00";
    document.getElementById("outputTotalAmount").innerHTML = "$" + "" + "00.00";
    billInput.value = "0";
    numOfPeople.value = "1";
})

 


   


 