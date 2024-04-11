let output_year = document.querySelector(".output-year");
let output_month = document.querySelector(".output-month");
let output_day = document.querySelector(".output-day");
let buttonEl = document.querySelector(".submit-btn");

let isValid = false;
let input_year = document.querySelector("#year");
let input_month = document.querySelector("#month");
let input_day = document.querySelector("#Day");

let error_year = document.querySelector(".error-year");
let error_month = document.querySelector(".error-month");
let error_day = document.querySelector(".error-day");

buttonEl.addEventListener("click", CalculateDate);

buttonEl.addEventListener("click", () => {
  new Audio('./music/mouse-click-104737.mp3').play();
} );


input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid day";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }

  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid month";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }

  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2024) {
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }

  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageOff = Date.now() - birthdayObj;
    let ageDate = new Date(ageOff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert("error");
  }
}
