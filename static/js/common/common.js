$(function(){
  // copyright
  var current_year = new Date().getFullYear();
  $('#copy_right').html("&copy;Bandai&nbsp;Namco&nbsp;Entertainment&nbsp;Inc.&nbsp;/&nbsp;&copy;2011-"+current_year+"&nbsp;FromSoftware,&nbsp;Inc.");
  // --- scroll top ---
  $('#scroll_top').fadeOut();
  $('#scroll_top').find('img').click(function(){
    $('html,body').animate({
      scrollTop: 0
    }, 'easeInQuart');
  });
  // --- sidemenu ---
  $('#sidemenu_switch').click(function(){
    $('.menu_icon_t').toggleClass('active');
    $('.menu_icon_r').toggleClass('active');
    $('#pane_R').toggleClass('open');
    $('#contents_wrapper').toggleClass('open');
    $('footer').toggleClass('open');
  });
  // --- menu list add ---
  for (var index = 0; index < $('#sidemenu_list ul').children('li').length; index++) {
    var add_tag;
    switch (index) {
      case 0:
      add_tag = '<svg class="svg_menu" viewBox="0 0 158.4 54.9"><path d="M25.6,33.6c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.4,0.6-1.1,0.6c-3.9,0-8.3-0.2-8.6-0.2s-4.8,0.2-6.9,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V4L9.4,4.1C5,4.2,3.4,4.7,2.2,6.4c-0.8,1.2-1,1.7-1.2,2.2C0.8,9.1,0.6,9.2,0.4,9.2C0.1,9.2,0,9,0,8.6c0-0.7,1.4-6.7,1.5-7.3C1.7,0.9,2,0,2.2,0c0.5,0,1.2,0.7,3.1,0.8c2,0.2,4.7,0.3,5.5,0.3h26.3c2.2,0,3.8-0.1,5-0.3c1.1-0.1,1.7-0.3,2-0.3c0.3,0,0.3,0.4,0.3,0.8c0,2.1-0.2,6.9-0.2,7.7c0,0.6-0.2,0.9-0.5,0.9c-0.3,0-0.5-0.2-0.6-1.2L43.1,8c-0.2-2.1-1.9-3.7-8.6-3.9L25.6,4V33.6z"/><path d="M82.2,0c15.8,0,27.5,9.9,27.5,26.3c0,15.7-11.1,28.6-27.9,28.6c-19.2,0-27.2-14.9-27.2-27.5C54.6,16,62.9,0,82.2,0z M83.7,52.2c6.3,0,19.3-3.6,19.3-24c0-16.8-10.2-25.8-21.3-25.8c-11.7,0-20.4,7.7-20.4,23C61.3,41.7,71.1,52.2,83.7,52.2z"/><path d="M130.1,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C126.4,2,125.2,2,124.6,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7.4,0.2,7.9,0.2c1.5,0,5.6-0.2,8.8-0.2c8.8,0,11.9,2.9,13,4c1.5,1.5,3.5,4.6,3.5,8.3c0,9.9-7.3,16.7-17.2,16.7c-0.3,0-1.1,0-1.5-0.1c-0.4,0-0.8-0.1-0.8-0.5c0-0.6,0.4-0.6,1.9-0.6c6.8,0,12.1-5,12.1-11.4c0-2.3-0.2-7-3.9-10.8s-8-3.5-9.6-3.5c-1.2,0-2.4,0.1-3,0.4c-0.4,0.1-0.6,0.6-0.6,1.3v28.8c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.3,0.6-1.1,0.6c-3.8,0-8.3-0.2-8.6-0.2c-0.2,0-4.6,0.2-6.7,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/></svg>';
      break;
      case 1:
      add_tag = '<svg class="svg_menu" viewBox="0 0 225.8 54.9"><g id="svg_news"><path d="M9.7,44.4c0.1,5.7,0.8,7.6,2.7,8.1c1.3,0.4,2.9,0.4,3.5,0.4c0.4,0,0.6,0.1,0.6,0.4c0,0.4-0.4,0.6-1.3,0.6c-4,0-6.8-0.2-7.4-0.2c-0.6,0-3.6,0.2-6.7,0.2c-0.7,0-1.1-0.1-1.1-0.6c0-0.3,0.2-0.4,0.6-0.4c0.6,0,1.8-0.1,2.9-0.4C5.2,52,5.5,50,5.5,43.6L5.6,3.5C5.6,0.8,5.8,0,6.4,0c0.6,0,1.8,1.5,2.5,2.2c1,1.2,11.5,12.5,22.3,24c6.9,7.4,14.6,16,16.8,18.3L47.1,9c-0.1-4.6-0.6-6.1-2.7-6.7C43.1,2,41.5,2,41,2c-0.5,0-0.6-0.2-0.6-0.5C40.4,1,41,1,41.8,1c3.2,0,6.5,0.2,7.3,0.2c0.8,0,3.1-0.2,6-0.2c0.8,0,1.3,0.1,1.3,0.5C56.3,1.8,56,2,55.5,2c-0.4,0-0.8,0-1.7,0.2c-2.3,0.5-2.6,2-2.6,6.2l-0.1,41c0,4.6-0.1,5-0.6,5c-0.6,0-1.4-0.8-5.1-4.5c-0.8-0.7-10.9-11-18.3-19c-8.1-8.8-16-17.6-18.3-20.1L9.7,44.4z"/><path d="M77.6,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C73.9,2,72.7,2,72.1,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c1.6,0,3.5,0,5,0.1l2.9,0.1c0.5,0,14.4,0,16-0.1c1.3-0.1,2.5-0.2,3-0.4c0.4-0.1,0.6-0.3,1-0.3c0.2,0,0.3,0.3,0.3,0.6c0,0.5-0.4,1.3-0.6,3.3C100.2,5,100.1,8.1,100,9c-0.1,0.3-0.2,0.8-0.5,0.8c-0.4,0-0.6-0.3-0.6-0.9c0-0.5-0.1-1.7-0.4-2.5c-0.5-1.1-1.2-2-5-2.4c-1.2-0.1-8.8-0.2-9.6-0.2c-0.3,0-0.4,0.2-0.4,0.7v19.3c0,0.5,0.1,0.7,0.4,0.7c0.9,0,9.5,0,11.1-0.1c1.7-0.1,2.7-0.3,3.3-1c0.5-0.6,0.8-0.9,1-0.9c0.2,0,0.4,0.1,0.4,0.6s-0.4,1.6-0.6,3.9c-0.1,1.4-0.3,4-0.3,4.5c0,0.6,0,1.3-0.5,1.3c-0.4,0-0.5-0.3-0.5-0.6c0-0.7,0-1.4-0.3-2.3c-0.3-1-0.9-2.2-3.6-2.5c-1.9-0.2-8.8-0.4-10-0.4c-0.3,0-0.5,0.2-0.5,0.5v6.2c0,2.4-0.1,10.5,0,12c0.2,4.8,1.3,5.7,8.1,5.7c1.8,0,4.9,0,6.7-0.8c1.8-0.8,2.7-2.2,3.2-5c0.1-0.8,0.3-1.1,0.6-1.1c0.4,0,0.4,0.6,0.4,1.1c0,0.6-0.6,5.3-0.9,6.8c-0.5,1.8-1,1.8-3.8,1.8c-5.3,0-9.1-0.1-11.8-0.2c-2.7-0.1-4.4-0.2-5.5-0.2c-0.1,0-1.3,0-2.8,0.1c-1.4,0-3,0.1-4.1,0.1c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/><path d="M167.2,44.2h0.3c1.9-6.4,8.3-26.7,10.8-35.7c0.7-2.6,0.8-3.6,0.8-4.5c0-1.3-0.8-2.1-4-2.1c-0.4,0-0.6-0.2-0.6-0.5c0-0.3,0.4-0.5,1.2-0.5c3.6,0,6.5,0.2,7.1,0.2c0.5,0,3.5-0.2,5.7-0.2c0.6,0,1,0.1,1,0.4c0,0.4-0.2,0.6-0.6,0.6c-0.3,0-1.6,0.1-2.4,0.3c-2.1,0.8-3.2,3.7-4.6,7.6c-3.1,8.9-10.2,31.2-12.9,39c-1.8,5.2-2.2,6-2.9,6c-0.7,0-1.1-0.9-2.1-3.6l-13.7-39h-0.1c-2.5,6.7-12.1,32.4-14.6,38.9c-1.1,2.9-1.5,3.7-2.3,3.7c-0.7,0-1-0.8-2.5-5.5L118.2,7.8c-1.1-3.7-2-4.8-3.8-5.5C113.5,2,111.7,2,111.2,2c-0.4,0-0.6-0.1-0.6-0.5c0-0.3,0.4-0.5,1.1-0.5c3.6,0,7.5,0.2,8.3,0.2c0.6,0,3.7-0.2,7.2-0.2c1,0,1.3,0.2,1.3,0.5c0,0.4-0.4,0.5-0.7,0.5c-0.6,0-1.9,0-2.7,0.4c-0.4,0.2-0.9,0.8-0.9,1.7s0.6,3.4,1.3,6.4c1,4.5,8.3,30.2,9.4,33.9h0.1l14.8-40c1.1-2.9,1.3-3.2,1.8-3.2c0.5,0,0.9,0.9,1.8,3.3L167.2,44.2z"/><path d="M199.8,53c-1-0.5-1-0.8-1-2.7c0-3.5,0.3-6.3,0.3-7.4c0.1-0.8,0.2-1.1,0.6-1.1c0.4,0,0.5,0.2,0.5,0.8c0,0.6,0,1.6,0.2,2.6c1,5.2,5.7,7.1,10.4,7.1c6.7,0,10-4.8,10-9.3c0-4.8-2-7.6-8.1-12.6l-3.2-2.6c-7.4-6.1-9.1-10.4-9.1-15.2C200.5,5.1,206.1,0,215,0c2.7,0,4.8,0.3,6.5,0.7c1.3,0.3,1.9,0.3,2.5,0.3c0.6,0,0.7,0.1,0.7,0.5c0,0.3-0.3,2.7-0.3,7.4c0,1.1-0.1,1.6-0.5,1.6c-0.4,0-0.5-0.3-0.6-0.9c-0.1-0.8-0.5-2.7-0.9-3.5c-0.4-0.8-2.3-3.7-8.8-3.7c-4.8,0-8.6,3-8.6,8.1c0,4,1.8,6.5,8.5,11.8l2,1.5c8.3,6.5,10.2,10.9,10.2,16.5c0,2.9-1.1,8.2-6,11.6c-3,2.1-6.8,2.9-10.6,2.9C205.9,54.9,202.7,54.4,199.8,53z"/></g></svg>';
      break;
      case 2:
      add_tag = '<svg class="svg_menu" viewBox="0 0 393.3 54.9"><g id="svg_concept"><path d="M8.5,47.3C1.7,41.2,0,33.3,0,26.6c0-4.7,1.6-12.9,7.8-19.1C12,3.3,18.4,0,29.2,0c2.8,0,6.7,0.2,10.2,0.8c2.7,0.5,4.9,0.9,7.1,1c0.8,0.1,0.9,0.4,0.9,0.8c0,0.6-0.2,1.4-0.3,3.9c-0.1,2.3-0.1,6.2-0.2,7.2s-0.2,1.5-0.6,1.5c-0.5,0-0.6-0.5-0.6-1.5c0-2.7-1.1-5.6-2.9-7.1c-2.5-2.1-7.8-4-14-4c-9.3,0-13.7,2.7-16.1,5.1C7.5,12.7,6.3,18.9,6.3,26c0,13.4,10.3,25.6,25.3,25.6c5.3,0,9.4-0.6,12.2-3.5c1.5-1.5,2.4-4.6,2.6-5.9c0.1-0.8,0.3-1,0.7-1c0.3,0,0.5,0.5,0.5,1c0,0.5-0.8,6.6-1.5,9c-0.4,1.3-0.6,1.5-1.8,2c-2.8,1.1-8.1,1.6-12.6,1.6C21.1,54.9,14,52.3,8.5,47.3z"/><path d="M87.4,0c15.8,0,27.5,9.9,27.5,26.3c0,15.7-11.1,28.6-27.9,28.6c-19.2,0-27.2-14.9-27.2-27.5C59.8,16,68.1,0,87.4,0z M88.9,52.2c6.3,0,19.3-3.6,19.3-24c0-16.8-10.2-25.8-21.3-25.8c-11.7,0-20.4,7.7-20.4,23C66.5,41.7,76.3,52.2,88.9,52.2z"/><path d="M137.3,44.4c0.1,5.7,0.8,7.6,2.7,8.1c1.3,0.4,2.9,0.4,3.5,0.4c0.4,0,0.6,0.1,0.6,0.4c0,0.4-0.4,0.6-1.3,0.6c-4,0-6.8-0.2-7.4-0.2c-0.6,0-3.6,0.2-6.7,0.2c-0.7,0-1.1-0.1-1.1-0.6c0-0.3,0.2-0.4,0.6-0.4c0.6,0,1.8-0.1,2.9-0.4c1.8-0.5,2.1-2.5,2.1-8.9l0.1-40.1c0-2.7,0.2-3.5,0.8-3.5c0.6,0,1.8,1.5,2.5,2.2c1,1.2,11.5,12.5,22.3,24c6.9,7.4,14.6,16,16.8,18.3L174.7,9c-0.1-4.6-0.6-6.1-2.7-6.7C170.7,2,169.1,2,168.5,2c-0.5,0-0.6-0.2-0.6-0.5c0-0.4,0.6-0.5,1.4-0.5c3.2,0,6.5,0.2,7.3,0.2c0.8,0,3.1-0.2,6-0.2c0.8,0,1.3,0.1,1.3,0.5c0,0.3-0.3,0.5-0.8,0.5c-0.4,0-0.8,0-1.7,0.2c-2.3,0.5-2.6,2-2.6,6.2l-0.1,41c0,4.6-0.1,5-0.6,5c-0.6,0-1.4-0.8-5.1-4.5c-0.8-0.7-10.9-11-18.3-19c-8.1-8.8-16-17.6-18.3-20.1L137.3,44.4z"/><path d="M205.7,47.3c-6.8-6.1-8.5-14.1-8.5-20.7c0-4.7,1.6-12.9,7.8-19.1c4.2-4.2,10.6-7.5,21.4-7.5c2.8,0,6.7,0.2,10.2,0.8c2.7,0.5,4.9,0.9,7.1,1c0.8,0.1,0.9,0.4,0.9,0.8c0,0.6-0.2,1.4-0.3,3.9c-0.1,2.3-0.1,6.2-0.2,7.2s-0.2,1.5-0.6,1.5c-0.5,0-0.6-0.5-0.6-1.5c0-2.7-1.1-5.6-2.9-7.1c-2.5-2.1-7.8-4-14-4c-9.3,0-13.7,2.7-16.1,5.1c-5.1,4.9-6.3,11.1-6.3,18.3c0,13.4,10.3,25.6,25.3,25.6c5.3,0,9.4-0.6,12.2-3.5c1.5-1.5,2.4-4.6,2.6-5.9c0.1-0.8,0.3-1,0.7-1c0.3,0,0.5,0.5,0.5,1c0,0.5-0.8,6.6-1.5,9c-0.4,1.3-0.6,1.5-1.8,2c-2.8,1.1-8.1,1.6-12.6,1.6C218.3,54.9,211.2,52.3,205.7,47.3z"/><path d="M265,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C261.3,2,260.1,2,259.5,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c1.6,0,3.5,0,5,0.1l2.9,0.1c0.5,0,14.4,0,16-0.1c1.3-0.1,2.5-0.2,3-0.4c0.4-0.1,0.6-0.3,1-0.3c0.2,0,0.3,0.3,0.3,0.6c0,0.5-0.4,1.3-0.6,3.3c-0.1,0.7-0.2,3.8-0.3,4.6c-0.1,0.3-0.2,0.8-0.5,0.8c-0.4,0-0.6-0.3-0.6-0.9c0-0.5-0.1-1.7-0.4-2.5c-0.5-1.1-1.2-2-5-2.4c-1.2-0.1-8.8-0.2-9.6-0.2c-0.3,0-0.4,0.2-0.4,0.7v19.3c0,0.5,0.1,0.7,0.4,0.7c0.9,0,9.5,0,11.1-0.1c1.7-0.1,2.7-0.3,3.3-1c0.5-0.6,0.8-0.9,1-0.9c0.2,0,0.4,0.1,0.4,0.6s-0.4,1.6-0.6,3.9c-0.1,1.4-0.3,4-0.3,4.5c0,0.6,0,1.3-0.5,1.3c-0.4,0-0.5-0.3-0.5-0.6c0-0.7,0-1.4-0.3-2.3c-0.3-1-0.9-2.2-3.6-2.5c-1.9-0.2-8.8-0.4-10-0.4c-0.4,0-0.5,0.2-0.5,0.5v6.2c0,2.4-0.1,10.5,0,12c0.2,4.8,1.3,5.7,8.1,5.7c1.8,0,4.9,0,6.7-0.8c1.8-0.8,2.7-2.2,3.2-5c0.1-0.8,0.3-1.1,0.6-1.1c0.4,0,0.4,0.6,0.4,1.1c0,0.6-0.6,5.3-0.9,6.8c-0.5,1.8-1,1.8-3.8,1.8c-5.3,0-9.1-0.1-11.8-0.2c-2.7-0.1-4.4-0.2-5.5-0.2c-0.1,0-1.3,0-2.8,0.1c-1.4,0-3,0.1-4.1,0.1c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/><path d="M311.2,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C307.5,2,306.3,2,305.7,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7.4,0.2,7.9,0.2c1.5,0,5.6-0.2,8.8-0.2c8.8,0,11.9,2.9,13,4c1.5,1.5,3.5,4.6,3.5,8.3c0,9.9-7.3,16.7-17.2,16.7c-0.3,0-1.1,0-1.5-0.1c-0.4,0-0.8-0.1-0.8-0.5c0-0.6,0.4-0.6,1.9-0.6c6.8,0,12.1-5,12.1-11.4c0-2.3-0.2-7-3.9-10.8s-8-3.5-9.6-3.5c-1.2,0-2.4,0.1-3,0.4c-0.4,0.1-0.6,0.6-0.6,1.3v28.8c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.3,0.6-1.1,0.6c-3.8,0-8.3-0.2-8.6-0.2c-0.2,0-4.6,0.2-6.7,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/><path d="M374.6,33.6c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.3,0.6-1.1,0.6c-3.9,0-8.3-0.2-8.6-0.2s-4.8,0.2-6.9,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V4l-10.4,0.1c-4.3,0.1-6,0.6-7.1,2.2c-0.8,1.2-1,1.7-1.2,2.2c-0.2,0.6-0.4,0.7-0.7,0.7c-0.2,0-0.4-0.2-0.4-0.6c0-0.7,1.4-6.7,1.5-7.3c0.1-0.4,0.4-1.3,0.7-1.3c0.5,0,1.2,0.7,3.1,0.8c2,0.2,4.7,0.3,5.5,0.3h26.3c2.2,0,3.8-0.1,5-0.3c1.1-0.1,1.7-0.3,2-0.3c0.3,0,0.3,0.4,0.3,0.8c0,2.1-0.2,6.9-0.2,7.7c0,0.6-0.2,0.9-0.5,0.9c-0.3,0-0.5-0.2-0.6-1.2L392,8c-0.2-2.1-1.9-3.7-8.6-3.9L374.6,4V33.6z"/></g></svg>';
      break;
      case 3:
      add_tag = '<svg class="svg_menu" viewBox="0 0 291.2 54.9"><g id="svg_lineup"><path d="M12,33.7c0,10.3,0.3,14.8,1.5,16c1.1,1.1,2.9,1.6,8.4,1.6c3.7,0,6.8-0.1,8.5-2.1c0.9-1.1,1.6-2.9,1.8-4.2c0.1-0.6,0.2-0.9,0.6-0.9c0.3,0,0.4,0.3,0.4,1.1c0,0.8-0.5,5-1,7c-0.5,1.6-0.7,1.9-4.4,1.9c-5,0-8.7-0.1-11.6-0.2c-2.9-0.1-5.1-0.2-7.1-0.2c-0.3,0-1.5,0.1-2.9,0.1c-1.4,0.1-2.9,0.1-4,0.1c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C2.4,2,1.2,2,0.6,2C0.3,2,0,1.8,0,1.5C0,1.1,0.3,1,1.1,1C4.3,1,8.7,1.2,9,1.2c0.4,0,5.5-0.2,7.6-0.2c0.8,0,1.1,0.1,1.1,0.6c0,0.3-0.3,0.4-0.6,0.4c-0.5,0-1.5,0.1-2.3,0.2c-2,0.3-2.6,1.5-2.7,4C12,8.4,12,10.4,12,21.3V33.7z"/><path d="M56.9,33.6c0,6.7,0,12.3,0.4,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.4,0.6-1.1,0.6c-3.9,0-8.3-0.2-8.6-0.2c-0.3,0-4.8,0.2-6.9,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9C51,45.9,51,40.3,51,33.6V21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.8-3.6-2.4-3.9C47.7,2,46.8,2,46.3,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c2.3,0,6.7,0.2,7.1,0.2c0.4,0,4.8-0.2,6.9-0.2C61.6,1,62,1.1,62,1.5C62,1.8,61.7,2,61.4,2c-0.5,0-0.9,0.1-1.8,0.2c-1.9,0.3-2.5,1.5-2.6,4c-0.1,2.2-0.1,4.2-0.1,15.1V33.6z"/><path d="M87.2,44.4c0.1,5.7,0.8,7.6,2.7,8.1c1.3,0.4,2.9,0.4,3.5,0.4c0.4,0,0.6,0.1,0.6,0.4c0,0.4-0.4,0.6-1.3,0.6c-4,0-6.8-0.2-7.4-0.2c-0.6,0-3.6,0.2-6.7,0.2c-0.7,0-1.1-0.1-1.1-0.6c0-0.3,0.2-0.4,0.6-0.4c0.6,0,1.8-0.1,2.9-0.4C82.7,52,83,50,83,43.6l0.1-40.1c0-2.7,0.2-3.5,0.8-3.5c0.6,0,1.8,1.5,2.5,2.2c1,1.2,11.5,12.5,22.3,24c6.9,7.4,14.6,16,16.8,18.3L124.6,9c-0.1-4.6-0.6-6.1-2.7-6.7C120.6,2,119,2,118.4,2c-0.5,0-0.6-0.2-0.6-0.5c0-0.4,0.6-0.5,1.4-0.5c3.2,0,6.5,0.2,7.3,0.2c0.8,0,3.1-0.2,6-0.2c0.8,0,1.3,0.1,1.3,0.5c0,0.3-0.3,0.5-0.8,0.5c-0.4,0-0.8,0-1.7,0.2c-2.3,0.5-2.6,2-2.6,6.2l-0.1,41c0,4.6-0.1,5-0.6,5c-0.6,0-1.4-0.8-5.1-4.5c-0.8-0.7-10.9-11-18.3-19c-8.1-8.8-16-17.6-18.3-20.1L87.2,44.4z"/><path d="M155.1,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C151.4,2,150.2,2,149.6,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c1.6,0,3.5,0,5,0.1l2.9,0.1c0.5,0,14.4,0,16-0.1c1.3-0.1,2.5-0.2,3-0.4c0.4-0.1,0.6-0.3,1-0.3c0.2,0,0.3,0.3,0.3,0.6c0,0.5-0.4,1.3-0.6,3.3c-0.1,0.7-0.2,3.8-0.3,4.6c-0.1,0.3-0.2,0.8-0.5,0.8c-0.4,0-0.6-0.3-0.6-0.9c0-0.5-0.1-1.7-0.4-2.5c-0.5-1.1-1.2-2-5-2.4c-1.2-0.1-8.8-0.2-9.6-0.2c-0.3,0-0.4,0.2-0.4,0.7v19.3c0,0.5,0.1,0.7,0.4,0.7c0.9,0,9.5,0,11.1-0.1c1.7-0.1,2.7-0.3,3.3-1c0.5-0.6,0.8-0.9,1-0.9c0.2,0,0.4,0.1,0.4,0.6s-0.4,1.6-0.6,3.9c-0.1,1.4-0.3,4-0.3,4.5c0,0.6,0,1.3-0.5,1.3c-0.4,0-0.5-0.3-0.5-0.6c0-0.7,0-1.4-0.3-2.3c-0.3-1-0.9-2.2-3.6-2.5c-1.9-0.2-8.8-0.4-10-0.4c-0.3,0-0.5,0.2-0.5,0.5v6.2c0,2.4-0.1,10.5,0,12c0.2,4.8,1.3,5.7,8.1,5.7c1.8,0,4.9,0,6.7-0.8c1.8-0.8,2.7-2.2,3.2-5c0.1-0.8,0.3-1.1,0.6-1.1c0.4,0,0.4,0.6,0.4,1.1c0,0.6-0.6,5.3-0.9,6.8c-0.5,1.8-1,1.8-3.8,1.8c-5.3,0-9.1-0.1-11.8-0.2c-2.7-0.1-4.4-0.2-5.5-0.2c-0.1,0-1.3,0-2.8,0.1c-1.4,0-3,0.1-4.1,0.1c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/><path d="M197.3,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C193.5,2,192.4,2,191.7,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7.4,0.2,8.1,0.2s4.8-0.2,6.9-0.2c0.8,0,1.1,0.1,1.1,0.6c0,0.3-0.3,0.4-0.6,0.4c-0.5,0-0.9,0.1-1.8,0.2c-1.9,0.3-2.5,1.5-2.6,4c-0.1,2.2-0.1,4.2-0.1,15.1v9.8c0,10.1,2.2,14.4,5.3,17.3c3.4,3.2,6.6,3.9,10.6,3.9c4.3,0,8.5-2,11-5c3.2-4,4.1-9.9,4.1-17.2v-8.8c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C230.5,2,229.3,2,228.7,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7,0.2,7.4,0.2c0.5,0,3.8-0.2,5.9-0.2c0.8,0,1.1,0.1,1.1,0.6c0,0.3-0.3,0.4-0.6,0.4c-0.5,0-0.9,0.1-1.8,0.2c-1.9,0.4-2.5,1.5-2.6,4c-0.1,2.2-0.1,4.2-0.1,15.1v7.5c0,7.6-0.8,16-6.4,20.9c-5,4.5-10.3,5.2-14.4,5.2c-2.4,0-9.5-0.3-14.4-5c-3.4-3.3-6.1-8.2-6.1-18.4V21.3z"/><path d="M262.9,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C259.2,2,258,2,257.4,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7.3,0.2,7.9,0.2c1.5,0,5.6-0.2,8.8-0.2c8.8,0,11.9,2.9,13,4c1.5,1.5,3.5,4.6,3.5,8.3c0,9.9-7.3,16.7-17.2,16.7c-0.3,0-1.1,0-1.5-0.1c-0.3,0-0.8-0.1-0.8-0.5c0-0.6,0.4-0.6,1.9-0.6c6.8,0,12.1-5,12.1-11.4c0-2.3-0.2-7-3.9-10.8c-3.7-3.8-8-3.5-9.6-3.5c-1.2,0-2.4,0.1-3,0.4c-0.4,0.1-0.6,0.6-0.6,1.3v28.8c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.3,0.6-1.1,0.6c-3.8,0-8.3-0.2-8.6-0.2c-0.2,0-4.6,0.2-6.7,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/></g></svg>';
      break;
      case 4:
      add_tag = '<svg class="svg_menu" viewBox="0 0 557.5 54.9"><g id="svg_goods"><path d="M41.2,36.1c0-5.7-0.3-6.4-3.2-7.2c-0.6-0.1-1.8-0.2-2.4-0.2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.4-0.6,1.1-0.6c3.2,0,7.6,0.2,7.9,0.2c0.3,0,4.8-0.2,6.9-0.2c0.8,0,1.1,0.1,1.1,0.6c0,0.3-0.3,0.4-0.6,0.4c-0.5,0-0.9,0.1-1.8,0.2c-1.9,0.3-2.5,1.5-2.6,4c-0.1,2.2-0.1,4.3-0.1,7.3V48c0,3.2-0.1,3.3-0.9,3.8c-4.5,2.4-10.8,3.2-14.8,3.2c-5.3,0-15.3-0.7-23-7.5C4.1,43.7,0,36.2,0,27.4c0-11.2,5.5-19.1,11.7-23C18,0.5,24.9,0,30.3,0c4.4,0,9.4,0.9,10.7,1.2c1.5,0.4,3.9,0.6,5.7,0.7c0.7,0.1,0.8,0.4,0.8,0.6c0,1-0.5,2.9-0.5,9.9c0,1.1-0.1,1.5-0.6,1.5c-0.4,0-0.4-0.4-0.5-1.1c-0.1-1-0.4-2.9-1.5-4.6C42.7,5.6,37,2.6,28,2.6c-4.4,0-9.7,0.4-15,4.6C9,10.4,6.1,16.8,6.1,25c0,9.9,5,17,7.4,19.4c5.5,5.4,11.9,7.5,18.3,7.5c2.5,0,6.2-0.4,8-1.5c0.9-0.5,1.4-1.3,1.4-2.5V36.1z"/><path d="M91.4,0c15.8,0,27.5,9.9,27.5,26.3c0,15.7-11.1,28.6-27.9,28.6c-19.2,0-27.2-14.9-27.2-27.5C63.8,16,72.1,0,91.4,0z M92.9,52.2c6.3,0,19.3-3.6,19.3-24c0-16.8-10.2-25.8-21.3-25.8c-11.7,0-20.4,7.7-20.4,23C70.5,41.7,80.3,52.2,92.9,52.2z"/><path d="M159,0c15.8,0,27.5,9.9,27.5,26.3c0,15.7-11.1,28.6-27.9,28.6c-19.2,0-27.2-14.9-27.2-27.5C131.4,16,139.7,0,159,0z M160.4,52.2c6.3,0,19.3-3.6,19.3-24c0-16.8-10.2-25.8-21.3-25.8c-11.7,0-20.4,7.7-20.4,23C138,41.7,147.8,52.2,160.4,52.2z"/><path d="M206.9,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C203.2,2,202,2,201.4,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.1,0,7.6,0.2,7.9,0.2c0.8,0,5.3-0.2,9.5-0.2c6.9,0,19.7-0.6,28.1,8c3.5,3.6,6.8,9.5,6.8,17.8c0,8.8-3.6,15.6-7.6,19.7c-3,3.2-9.3,8.1-21.2,8.1c-3,0-6.7-0.2-9.7-0.4c-3.1-0.2-5.5-0.4-5.8-0.4c-0.1,0-1.3,0-2.8,0.1c-1.4,0-3,0.1-4.1,0.1c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z M212.8,28.8c0,7.4,0.1,13.9,0.1,15.2c0.1,1.8,0.2,4.6,0.8,5.3c0.9,1.3,3.6,2.8,11.9,2.8c6.5,0,12.5-2.4,16.7-6.5c3.6-3.6,5.6-10.3,5.6-16.7c0-8.9-3.9-14.6-6.7-17.6c-6.6-6.9-14.6-7.9-22.9-7.9c-1.4,0-4,0.2-4.6,0.5c-0.6,0.3-0.8,0.6-0.8,1.4c-0.1,2.4-0.1,9.5-0.1,14.9V28.8z"/><path d="M270.1,53c-1-0.5-1-0.8-1-2.7c0-3.5,0.3-6.3,0.4-7.4c0.1-0.8,0.2-1.1,0.6-1.1c0.4,0,0.5,0.2,0.5,0.8c0,0.6,0,1.6,0.2,2.6c1,5.2,5.7,7.1,10.4,7.1c6.7,0,10-4.8,10-9.3c0-4.8-2-7.6-8.1-12.6l-3.2-2.6c-7.4-6.1-9.1-10.4-9.1-15.2c0-7.5,5.6-12.6,14.5-12.6c2.7,0,4.8,0.3,6.5,0.7c1.3,0.3,1.9,0.3,2.5,0.3c0.6,0,0.7,0.1,0.7,0.5c0,0.3-0.3,2.7-0.3,7.4c0,1.1-0.1,1.6-0.5,1.6c-0.4,0-0.5-0.3-0.6-0.9c-0.1-0.8-0.5-2.7-0.9-3.5c-0.4-0.8-2.3-3.7-8.8-3.7c-4.8,0-8.6,3-8.6,8.1c0,4,1.8,6.5,8.5,11.8l2,1.5c8.3,6.5,10.2,10.9,10.2,16.5c0,2.9-1.1,8.2-6,11.6c-3,2.1-6.8,2.9-10.6,2.9C276.2,54.9,273,54.4,270.1,53z"/><path d="M335.3,39.4c0-8.2,5.3-13.7,10.7-16.9c-2.6-3.6-3.4-6.5-3.4-9.7c0-5.5,5.7-12.9,15.1-12.9c3.6,0,6.6,0.7,8.5,1.8c0.8,0.5,0.9,0.9,0.9,1.8c0,2.1-0.3,7-0.5,8.1s-0.4,1.2-0.7,1.2c-0.3,0-0.4-0.3-0.4-1.3c0-1.8-0.4-4.1-2.2-6c-1.5-1.6-3.9-3.1-7-3.1c-4.2,0-8.9,2.6-8.9,9.2c0,5.5,3.8,10,11.1,17.9c2.4,2.6,11,10.6,13.2,12.5c2-2.7,3.6-7.4,3.6-11.6c0-1-0.3-2.4-1.3-3.4c-0.9-0.9-2.4-1.1-3.4-1.1c-0.4,0-0.8-0.1-0.8-0.5c0-0.4,0.6-0.5,1.1-0.5c1.7,0,4.5,0.1,8.4,0.5c1,0.1,1.3,0.7,1.3,1.4c0,5.7-3.9,12.7-6.9,16.5c4.6,3.9,7.7,5.8,9.7,6.9c2.2,1.3,5.8,2.7,8.3,2.7c0.6,0,1,0.1,1,0.5c0,0.3-0.6,0.5-1.2,0.5h-6.9c-5.2,0-6.9-0.5-14.6-6.6c-1.6,1.6-7.1,7.6-17.5,7.6C340.1,54.9,335.3,45.5,335.3,39.4z M368,46c-3.9-3.2-10.9-9.9-12.7-11.8s-6.3-6.9-8.3-9.8c-3.6,2.4-6.3,6.2-6.3,11.8c0,8.8,6.2,15.1,14,15.1C361.3,51.2,365.6,48.4,368,46z"/><path d="M438.3,2.7c0.8-2.3,1.1-2.7,1.5-2.7c0.4,0,0.7,0.3,1.5,2.5c1,2.7,12,31.6,16.3,42.2c2.5,6.2,4.6,7.4,6,7.8c1,0.4,2.1,0.4,2.8,0.4c0.4,0,0.7,0.1,0.7,0.4c0,0.4-0.6,0.6-1.4,0.6c-1.1,0-6.2,0-11-0.1c-1.3-0.1-2.1-0.1-2.1-0.5c0-0.3,0.2-0.4,0.5-0.5c0.4-0.1,0.8-0.8,0.4-1.9l-6.5-17.2c-0.1-0.3-0.3-0.4-0.6-0.4h-15.1c-0.3,0-0.6,0.2-0.7,0.6l-4.2,12.4c-0.6,1.8-1,3.4-1,4.7c0,1.4,1.5,2,2.7,2h0.7c0.5,0,0.7,0.1,0.7,0.4c0,0.4-0.4,0.6-1,0.6c-1.7,0-4.7-0.2-5.5-0.2c-0.8,0-4.6,0.2-7.9,0.2c-0.9,0-1.3-0.1-1.3-0.6c0-0.3,0.3-0.4,0.6-0.4c0.5,0,1.5-0.1,2-0.1c3.2-0.4,4.6-3.1,5.9-6.6L438.3,2.7z M445.6,30.7c0.3,0,0.3-0.2,0.3-0.5l-6.7-18.9c-0.3-1-0.7-1-1,0L432,30.2c-0.1,0.3,0,0.5,0.2,0.5H445.6z"/><path d="M480.8,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C477,2,475.9,2,475.2,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7.4,0.2,7.9,0.2c1.5,0,5.6-0.2,8.8-0.2c8.8,0,11.9,2.9,13,4c1.5,1.5,3.5,4.6,3.5,8.3c0,9.9-7.3,16.7-17.2,16.7c-0.3,0-1.1,0-1.5-0.1c-0.4,0-0.8-0.1-0.8-0.5c0-0.6,0.4-0.6,1.9-0.6c6.8,0,12.1-5,12.1-11.4c0-2.3-0.2-7-3.9-10.8s-8-3.5-9.6-3.5c-1.2,0-2.4,0.1-3,0.4c-0.4,0.1-0.6,0.6-0.6,1.3v28.8c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.3,0.6-1.1,0.6c-3.8,0-8.3-0.2-8.6-0.2c-0.2,0-4.6,0.2-6.7,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/><path d="M529.2,21.3c0-10.9,0-12.9-0.1-15.1c-0.1-2.4-0.7-3.5-3-4C525.5,2,524.3,2,523.7,2c-0.3,0-0.6-0.1-0.6-0.4c0-0.4,0.3-0.6,1.1-0.6c3.2,0,7.4,0.2,7.9,0.2c1.5,0,5.6-0.2,8.8-0.2c8.8,0,11.9,2.9,13,4c1.5,1.5,3.5,4.6,3.5,8.3c0,9.9-7.3,16.7-17.2,16.7c-0.3,0-1.1,0-1.5-0.1c-0.4,0-0.8-0.1-0.8-0.5c0-0.6,0.4-0.6,1.9-0.6c6.8,0,12.1-5,12.1-11.4c0-2.3-0.2-7-3.9-10.8s-8-3.5-9.6-3.5c-1.2,0-2.4,0.1-3,0.4c-0.4,0.1-0.6,0.6-0.6,1.3v28.8c0,6.7,0,12.3,0.3,15.2c0.2,2,0.6,3.6,2.7,3.9c1,0.1,2.5,0.3,3.2,0.3c0.4,0,0.6,0.2,0.6,0.4c0,0.3-0.3,0.6-1.1,0.6c-3.8,0-8.3-0.2-8.6-0.2c-0.2,0-4.6,0.2-6.7,0.2c-0.8,0-1.1-0.1-1.1-0.6c0-0.2,0.1-0.4,0.6-0.4c0.6,0,1.5-0.1,2.1-0.3c1.4-0.3,1.8-1.8,2-3.9c0.3-2.9,0.3-8.5,0.3-15.2V21.3z"/></g></svg>';
      break;
    }
    $('#sidemenu_list ul').children('li').eq(index).children('a').prepend(add_tag);
  }

});

$(window).scroll(function(){
  // --- scroll top ---
  if(Math.floor($(this).scrollTop()) > 1300){
    $('#scroll_top').fadeIn();
    if(Math.floor($(this).height() + $(this).scrollTop()) >= Math.round($('footer').offset().top)){
      $('#scroll_top').addClass('bottom_fix');
    }else{
      $('#scroll_top').removeClass('bottom_fix');
    }
  }else{
    $('#scroll_top').fadeOut();
  }
});
