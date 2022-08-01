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
//# sourceMappingURL=all.js.map
