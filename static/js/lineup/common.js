$(function(){
  $('.lazy').lazy({
    effect: 'fadeIn'
  });
});

var win_wid = 0,
    sec_has = {},
    flg_onc = true;

$(window).on('resize load',contents_pos_set);

function contents_pos_set(){
  win_wid = $(window).width();
  if( win_wid >= 768) {
    sec_has = {};
    $("[id^=sec_]").each(function(){
      var tmp_arr = [
        Math.round($(this).offset().top),
        Math.round($(this).height())
      ];
      sec_has[$(this).attr('id')] = tmp_arr;
    });
    flg_onc = true;
    year_scroll();
  } else {
    if(flg_onc) {
      year_scroll();
    }
  }
}

$(window).scroll(year_scroll);

function year_scroll(){
  if( win_wid >= 768 ) {
    var first_check = true,
        tmp_sec_sum = 0,
        tmp_sec_top = 0,
        tmp_scr_top = Math.round($(this).scrollTop());

    for (var key in sec_has) {
      if (sec_has.hasOwnProperty(key)) {
        if( first_check ) {
          first_check = false,
          tmp_sec_sum = tmp_scr_top+sec_has[key][0],
          tmp_sec_top = sec_has[key][0];
        }
        if( tmp_sec_sum >= sec_has[key][0] && tmp_sec_sum < (sec_has[key][0]+sec_has[key][1]) ) {
          $('#'+key+'>div>p').css({ position: 'fixed', top: tmp_sec_top, bottom: 'auto' });
          eval();
        } else if( tmp_sec_sum < sec_has[key][0] ) {
          $('#'+key+'>div>p').css({ position: 'absolute', top: 0, bottom: 'auto' });
        } else if( tmp_sec_sum >= (sec_has[key][0]+sec_has[key][1]) ) {
          $('#'+key+'>div>p').css({ position: 'absolute', top: 'auto', bottom: 0 });
        }
      }
    }
  } else {
    if( flg_onc ) {
      var first_check = true,
          tmp_sec_sum = 0,
          tmp_sec_top = 0,
          tmp_scr_top = 0;
  
      for (var key in sec_has) {
        if (sec_has.hasOwnProperty(key)) {
          if( first_check ) {
            first_check = false,
            tmp_sec_sum = tmp_scr_top+sec_has[key][0],
            tmp_sec_top = sec_has[key][0];
          }
          $('#'+key+'>div>p').css({ position: 'absolute', top: 0, bottom: 'auto' });
        }
      }
      flg_onc = false;
    }
  }
}