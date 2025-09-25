const result = document.getElementById('result') as HTMLParagraphElement;
const calculate = document.getElementById('calculate') as HTMLButtonElement;
const firstNumber = document.getElementById('firstNum') as HTMLInputElement;
const secondNumber = document.getElementById('secondNum') as HTMLInputElement;
const operations = document.getElementById('operation') as HTMLInputElement;


calculate.addEventListener('click', () => {
  if (firstNumber.value !== '' && secondNumber.value !== '') {
    if (operations.value === '+') {
      result.textContent = String(parseInt(firstNumber.value) + parseInt(secondNumber.value));
    } else if (operations.value === '-') {
      result.textContent = String(parseInt(firstNumber.value) - parseInt(secondNumber.value));
    } else if (operations.value === '*') {
      result.textContent = String(parseInt(firstNumber.value) * parseInt(secondNumber.value));
    } else if (operations.value === '/') {
      if (secondNumber.value === '0') {
        result.textContent = "You can't divide by Zero!";
        return;
      }
      result.textContent = `${String(parseInt(firstNumber.value) / parseInt(secondNumber.value))}`;
    }
  }else{
    result.textContent = "Please fill in the numbenrs!";
  }
});