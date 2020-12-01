//hamburger 
$(function () {
  // クリック時の動作
  $('.hamberger_line').on('click', function() {
      // メニューを閉じる
      if($(this).hasClass('open')) {
          $(this).removeClass('open');
          $('.hamberger_list').removeClass('open');
      // メニューを開く
      } else {
          $(this).addClass('open');
          $('.hamberger_list').addClass('open');
      }
  });
}); 



// 上の写真スライド
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

