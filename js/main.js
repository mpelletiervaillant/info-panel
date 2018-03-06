$('.info-panel-btn').on('click', function () {
  var id = $(this).attr('href');
  var isOpen = $(this).hasClass('info-panel-btn-active');

  $('.info-panel-btn').removeClass('info-panel-btn-active');
  $('.info-panel').attr('hidden', true);
  if (!isOpen) {
    $(id).removeAttr('hidden');
    $(this).addClass('info-panel-btn-active');
  }
});
