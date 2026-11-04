const principle = document.getElementById("principal");
const rate = document.getElementById("rate");
const time = document.getElementById("time");

const result = document.getElementById("result");
const interestResult = document.getElementById("interestResult");
const amountResult = document.getElementById("amountResult");
const error = document.getElementById("error")

function calculateInterest() {
error.style.display = "none"

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

else {
let intrest =
    (principle.value * rate.value * time.value) / 100;

let amount =
    Number(intrest) + Number(principle.value);


interestResult.textContent =
    "₹ " + intrest.toFixed(2);

amountResult.textContent =
    "₹ " + amount.toFixed(2);


result.style.display = "block";
}

}

function resetCalculator() {


principle.value = "";
rate.value = "";
time.value = "";

interestResult.textContent = "₹ 0.00";
amountResult.textContent = "₹ 0.00";

result.style.display = "none";


}
