"use strict";

console.log('Hello!'); // $(document).ready(() => {
//   $('.icon-menu').click(function(e){
//     $('.mobile-nav-list').toggleClass('.active')
//   })
// });

$(document).ready(function () {
  $('.icon-menu').click(function (e) {
    $('.mobile-nav-list').addClass('active');
    $('.icon-menu').addClass('none');
    $('.navbar').addClass('jcc');
  });
  $('.mobile-nav-list li, .nav-img').click(function (e) {
    $('.navbar').removeClass('jcc');
    $('.mobile-nav-list').removeClass('active');
    $('.icon-menu').removeClass('none');
  });
});
"use strict";

var checkText = document.querySelector('.checkbox-text');
var inputCheckbox = document.querySelector('#consent');
checkText.addEventListener('click', function (e) {
  if (inputCheckbox.checked === false) {
    inputCheckbox.checked = true;
  } else {
    inputCheckbox.checked = false;
  }
});
//# sourceMappingURL=all.js.map
