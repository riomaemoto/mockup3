// メインスライド
function slideSwitch() {
  var $active = $('#slideshow img.active');

  if ( $active.length == 0 ) $active = $('#slideshow img:last');

  var $next =  $active.next().length ? $active.next()
     : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
     .addClass('active')
     .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
     });
}

$(function() {
  setInterval( "slideSwitch()", 3500 );
});
// ハンバーガーメニュー
$(function() {
  // ハンバーガーメニューが押された時
  $('#toggle').on('click',function(){
      $(this).toggleClass('on');
      $('.js-drower').toggleClass('on');
      
      let isActive = $(this).hasClass('on');
      toggleDrower(isActive);
  });
});

//ハンバーガーメニューでドロップダウン
  function toggleDrower(isActive) {
    if (isActive) {
      // onになっていた時、メニューを表示
      $('#drower-bg').fadeIn(600);
    } else {
      // onを外した時、メニューを非表示
      $('#drower-bg').fadeOut(600);
    }
  }