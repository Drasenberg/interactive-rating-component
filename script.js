const rateInputs = document.querySelectorAll('[data-type-rate-input]');
const rateInputsLabels = document.querySelectorAll('[data-type-rate');
const submitButton = document.getElementById('submitRate');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const rateVal = document.querySelector('[data-rate-value]');
let rateValue = 0;

for (rateInput of rateInputs) {
  rateInput.addEventListener('click', (e) => {
    rateValue = +e.path[0].value;
    rateInputsLabels[rateValue - 1].classList.add('active-rate');
    for (rateInputLabel of rateInputsLabels) {
      if (rateInputLabel.classList.contains('active-rate')) {
        rateInputLabel.classList.remove('active-rate');
        rateInputsLabels[rateValue - 1].classList.add('active-rate');
      }
    }
    submitButton.removeAttribute('disabled');
  });
}

submitButton.addEventListener('click', () => {
  ratingState.classList.remove('visible');
  ratingState.classList.add('hidden')
  thankYouState.classList.add('visible');
  thankYouState.classList.remove('hidden');
  console.log(rateVal);
  rateVal.innerHTML = rateValue.toString();
  console.log(rateValue);
});
