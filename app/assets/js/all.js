console.log('Hello!');

$(document).ready(() => {
  $('.icon-menu').click(function(e){
    $('.mobile-nav-list').toggleClass('.active')
  })
});