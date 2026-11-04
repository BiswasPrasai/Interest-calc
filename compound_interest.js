const principle = document.getElementById("principal")
const rate = document.getElementById("rate")
const time = document.getElementById("time")
const descision = document.getElementById("frequency")
const variable = Number(1)
const result = document.getElementById("result")
const months = document.getElementById("months")
let total_time = undefined

let interestResult = document.getElementById("interestResult")
let amountResult = document.getElementById("amountResult")
let error = document.getElementById("error")
let comp_interest = undefined
let comp_amount = undefined

function calculateCompoundInterest() {

const error = document.getElementById("error");
error.style.display = "none";

if (
    principle.value === "" ||
    rate.value === "" ||
    time.value === "" ||
    principle.value < 0 ||
    rate.value < 0 ||
    time.value < 0
) {
    error.innerText = "Please! Enter valid information";
    error.style.color = "red";
    error.style.display = "block";

    resetCalculator();
}

else if (descision.value === "1" && months.value == "0"){

comp_interest = principle.value * ((variable + rate.value / 100)**time.value - variable)
comp_amount = Number(principle.value) + Number(comp_interest)
interestResult.textContent =
    "₹ " + comp_interest.toFixed(2);

amountResult.textContent =
    "₹ " + comp_amount.toFixed(2);

result.style.display = "block"

}

else if (descision.value === "2"){

total_time =  Number(time.value) + Number(months.value)/12
comp_interest = principle.value * ((variable + rate.value / 200)**(2*total_time) - variable)
comp_amount = Number(principle.value) + Number(comp_interest)
interestResult.textContent =
    "₹ " + comp_interest.toFixed(2);

amountResult.textContent =
    "₹ " + comp_amount.toFixed(2);

result.style.display = "block"

}

else if (descision.value === "3") {

total_time =  Number(time.value) + Number(months.value)/12
comp_interest = principle.value * ((variable + rate.value / 400)**(4*total_time) - variable)
comp_amount = Number(principle.value) + Number(comp_interest)
interestResult.textContent =
    "₹ " + comp_interest.toFixed(2);

amountResult.textContent =
    "₹ " + comp_amount.toFixed(2);

result.style.display = "block"

}

else if (descision.value === "1" && months.value !== "0") {

comp_amount =
    Number(principle.value) *
    ((variable + Number(rate.value) / 100) ** Number(time.value)) *
    (variable + (Number(months.value) * Number(rate.value)) / 1200);

comp_interest =
    comp_amount - Number(principle.value);

interestResult.textContent =
    "₹ " + comp_interest.toFixed(2);

amountResult.textContent =
    "₹ " + comp_amount.toFixed(2);

result.style.display = "block";

}

}

function resetCalculator() {

principle.value = "";
rate.value = "";
time.value = "";
months.value = ""

interestResult.textContent = "₹ 0.00";
amountResult.textContent = "₹ 0.00";

descision.value = "1";

result.style.display = "none";

}


