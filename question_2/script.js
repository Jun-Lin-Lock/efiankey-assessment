"use strict";

const discountBtn = document.querySelector("#calculate-discount");
const discountOutput = document.querySelector("#discount-amount");

const calculateDiscount = () => {
    const priceAmount = parseFloat(document.querySelector("#price").value);
    var outputText = `Purchase Value is ${priceAmount}, `;
    if(priceAmount > 500) {
        outputText+= `discount is 10%`
    } else if(priceAmount <= 500 && priceAmount >= 100) {
        outputText+= `discount is 5%`
    } else if(priceAmount < 100 && priceAmount > 0) {
        outputText+= `there are no discount`
    } else {
        outputText = "Please enter a valid price amount."
    }
    discountOutput.textContent=outputText;
};

discountBtn.addEventListener("click", calculateDiscount);