const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const output = document.querySelector("#output");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");

  //adding all the digits of the date
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};


const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number!! 🥳  `);
  }
  showMessage(`${numberToCheck} is not that lucky 😕`);
};

const showMessage = (message) => {
  output.innerText = message;
};

checkButton.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const lNumber = luckyNumber.value;
  if (date && lNumber) {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, lNumber);
  } else {
    showMessage("Please enter both the fields");
  }
});