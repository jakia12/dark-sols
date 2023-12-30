$(function(){
  // リリース年タブ
  $('#category_tab').children('li').click(function(){
    $('#category_tab').children('li').removeClass('curr');
    $(this).addClass('curr');
    $('#category_select').val($(this).index());
    // func
    category_func($(this).index());
  });
  // リリース年セレクト
  $('#category_select').change(function(){
    $('#category_tab').children('li').removeClass('curr');
    $('#category_tab').children('li').eq($(this).prop('selectedIndex')).addClass('curr');
    // func
    category_func($(this).prop('selectedIndex'));
  });
});

function category_func(num) {
  switch (num) {
    case 0:
      $('#sec_figure').removeClass('hide');
      $('#sec_apparel').removeClass('hide');
      $('#sec_book').removeClass('hide');
      $('#sec_app').removeClass('hide');
      break;
    case 1:
      $('#sec_figure').removeClass('hide');
      $('#sec_apparel').addClass('hide');
      $('#sec_book').addClass('hide');
      $('#sec_app').addClass('hide');
      break;
    case 2:
      $('#sec_figure').addClass('hide');
      $('#sec_apparel').removeClass('hide');
      $('#sec_book').addClass('hide');
      $('#sec_app').addClass('hide');
      break;
    case 3:
      $('#sec_figure').addClass('hide');
      $('#sec_apparel').addClass('hide');
      $('#sec_book').removeClass('hide');
      $('#sec_app').addClass('hide');
      break;
    case 4:
      $('#sec_figure').addClass('hide');
      $('#sec_apparel').addClass('hide');
      $('#sec_book').addClass('hide');
      $('#sec_app').removeClass('hide');
      break;
  }
}

$(window).on('load resize',function(){
  // wide only
  if( $(this).width() >= 768 ) {
    var prv_ht = 0;
    $('p.title').each(function(){
      var prt_li = $(this).parent('li'),
          prt_ul = $(this).closest('ul.goods_list'),
          crr_ix = $(prt_ul).children('li').index(prt_li),
          crr_ht = Math.round($(this).height());
      if(crr_ix % 2 == 0) {
        prv_ht = crr_ht;
      }else{
        if(prv_ht != crr_ht) {
          var tmp_ht = (prv_ht > crr_ht) ? prv_ht : crr_ht;
          $(prt_li).prev('li').children('p.title').css('height',tmp_ht);
          $(this).css('height',tmp_ht);
        }
      }
    });
  }
});