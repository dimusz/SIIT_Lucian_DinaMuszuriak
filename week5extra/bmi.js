const inputName = document.getElementById("new-name");
const inputGender = document.getElementById("sex-select");
const inputHeight = document.getElementById("new-height");
const inputWeight = document.getElementById("new-weight");

function BMI() {
  let newHeight = inputHeight.value;
  let newWeight = inputWeight.value;
  console.log(newHeight);
  console.log(newWeight);
  let BMI = newWeight / (newHeight * newHeight);
  return BMI;
}

function newBMI() {
  if (BMI() < 18.5) {
    return "UNDERWEIGHT";
  } else if (BMI() >= 18.5 && BMI() < 25) {
    return "NORMAL";
  } else if (BMI() >= 25 && BMI() < 30) {
    return "OVERWEIGHT";
  } else if (BMI() > 30) {
    return "OBESE";
  }
}

const newResult = document.createElement("ul");

function calculate() {
  console.log("se da click");
  let newName = inputName.value;
  console.log(newName);
  let newGender = inputGender.value;
  console.log(newGender);
  let result = document.createElement("li");
  result.innerHTML = `${newName} | ${newGender} | ${BMI()} | ${newBMI()}`;
  console.log(result);

  newResult.appendChild(result);
}
document.body.appendChild(newResult);
