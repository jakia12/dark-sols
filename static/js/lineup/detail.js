var movie = [
  { code:'87b9Ss14pYs', title:'最新プロモーション映像' },
	{ code:'4hrpFlkeVRw', title:'プロモーション映像 第3弾' },
	{ code:'30gk_-WiFBI', title:'プロモーション映像 第4弾' },
  { code:'P3Z43rU-1HY', title:'プロモーション映像 第5弾' },
  { code:'bKyR37iC02o', title:'with ARTORIAS OF THE ABYSS EDITION　プロモーション映像（予告）' },
  { code:'tzVfKW_Omfg', title:'with ARTORIAS OF THE ABYSS EDITION　プロモーション映像（本告）' },
	{ code:'uBqWu6XEIt4', title:'特報トレーラー' },
	{ code:'X9XHJtItRlI', title:'プロモーション映像　第1弾' },
	{ code:'T2cQolPePZw', title:'プロモーション映像　第2弾' },
  { code:'b0ieIyn5iKo', title:'プロモーション映像　第3弾' },
	{ code:'CbxKjNqxEsY', title:'Launch Trailer' },
	{ code:'g_24S4j-jWU', title:'CROWN OF THE SUNKEN KING プロモーション映像' },
  { code:'cppexBUmpHs', title:'SCHOLAR OF THE FIRST SIN プロモーション映像' },
	{ code:'a1twf3amPmM', title:'SCHOLAR OF THE FIRST SIN プロモーション映像' },
	{ code:'iHoebaVyqSM', title:'デビュートレーラー' },
	{ code:'-XwhYVzN_a0', title:'トレーラー第1弾' },
  { code:'KSVPYoHHPvM', title:'発売日決定トレーラー' },
  { code:'jjK5f7ozzOM', title:'GamePlay Footage' },
  { code:'Na5ZwyLVli8', title:'オープニングシネマティックトレーラー' },
  { code:'QjY99zF3_to', title:'発売ロンチトレーラー' },
  { code:'TXFotcyV8sw', title:'ASHES OF ARIANDEL　DLC第1弾発表トレーラー' },
  { code:'KWCt6PVXCvQ', title:'DARK SOULS &#8546; ASHES OF ARIANDEL　GamePlay Footage　【TGS 2016】' },
	{ code:'k5nkt3ylAPA', title:'THE RINGED CITY　DLC第2弾発表トレーラー' },
  { code:'wWTmSUjaYdg', title:'DARK SOULS &#8546; THE RINGED CITY　GamePlay Footage　【2017.02】' },
  { code:'lJT9nyCxs8E', title:'DARK SOULS &#8546; THE RINGED CITY　DLC第2弾発表トレーラー完全版　【2017.3】' },
  { code:'Dl4BiWdW5Ek', title:'DARK SOULS REMASTERED デビュートレーラー【2018.1】' },
  { code:'m4tobsFkHgE', title:'DARK SOULS REMASTERED プロモーショントレーラー【2018.4】' },
  { code:'nwJbcN5uxNQ', title:'DARK SOULS REMASTERED 発売ロンチトレーラー【2018.5】' },
];
let yt_player;
let yt_crntId;
function onYouTubeIframeAPIReady() {
  yt_player = new YT.Player('yt_frame', {
    height: '315',
    width: '560',
    playerVars: {
      playsinline: 1,
      rel: 0
    },
  });
}

$(function(){
  // function
  $('#product_package').find('li').click(function(){
    if(!$(this).hasClass('curr')) {
      $('#product_package').find('img.curr').removeClass('curr');
      $('#product_package').find('li.curr').removeClass('curr');
      var index = $('#product_package').find('li').index(this);
      $('#product_package').find('img').eq(index).addClass('curr');
      $('#product_package').find('li').eq(index).addClass('curr');
    }
  });
  $('#screen_shot_list').find('img').click(function(){
    var index = $('#screen_shot_list').children('li').index($(this).parent('li'));
    $('.screen_shot').removeClass('curr');
    $('#game_screenshot_wrapper div').find('img').eq(index).addClass('curr');
  });
  // ムービー
  if (document.getElementById('yt_frame') !== null) {
    let yt_tag = document.createElement('script');
    yt_tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(yt_tag, firstScriptTag);
  }
  if (document.getElementById('game_movie_wrapper') !== null) {
    $('#game_movie_wrapper li').click(function(){
      if (yt_crntId !== movie[$(this).attr('id')]['code']) {
        yt_crntId = movie[$(this).attr('id')]['code'];
        yt_player.loadVideoById(yt_crntId);
      } else {
        yt_player.playVideo();
      }
      $('#game_movie_wrapper>div').removeClass('none').removeClass('hide');
    });
    $('#game_movie_wrapper>div').click(function(){
      $(this).addClass('hide').on('transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd',function(){
        $(this).addClass('none').off('transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd');
        yt_player.pauseVideo();
      });
    });
  }
});
