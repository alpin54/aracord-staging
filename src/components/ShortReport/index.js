/* ------------------------------------------------------------------------------
@name: ShortReport
@description: ShortReport
--------------------------------------------------------------------------------- */

const ShortReport = (() => {
  // - handleClickAccordion
  const handleClickAccordion = () => {
    $('.js-short-report-acc .short-report__acc__title').on('click', (e) => {
      const $this = $(e.currentTarget);
      const $parents = $this.parents('.short-report__acc__item');

      if ($(window).width() > 1200) {
        $parents
          .siblings('.short-report__acc__item')
          .removeClass('expanded')
          .find('.short-report__acc__body')
          .fadeOut(300);

        $parents.find('.short-report__acc__body').fadeIn(300);
      } else {
        $parents
          .siblings('.short-report__acc__item')
          .removeClass('expanded')
          .find('.short-report__acc__body')
          .slideUp(300);

        $parents.find('.short-report__acc__body').slideDown(300);
      }
      $parents.addClass('expanded');
    });
  };

  // - expandFirstItem
  const expandFirstItem = () => {
    const $firstItem = $('.js-short-report-acc .short-report__acc__item').first();
    $firstItem.addClass('expanded');
    $firstItem.find('.short-report__acc__body').show();
  };

  // - init
  const init = () => {
    if (!$('.js-short-report-acc').length) return;
    expandFirstItem();
    handleClickAccordion();
  };

  return {
    init
  };
})();

export default ShortReport;
