const checkText = document.querySelector('.checkbox-text');
const inputCheckbox = document.querySelector('#consent');
checkText.addEventListener('click',function(e){
  if (inputCheckbox.checked === false) {
    inputCheckbox.checked = true;
  } else {
    inputCheckbox.checked = false;
  }
})