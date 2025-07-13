const ShortService = (() => {
  // - handleClickAccordion
  const handleClickAccordion = () => {
    $('.js-short-service-acc .short-service__acc__title').on('click', (e) => {
      const $this = $(e.currentTarget);
      const $image = $this.attr('data-image');
      const $title = $this.attr('data-title');
      const $parents = $this.parents('.short-service__acc__item');
      const $imgEl = $('.js-short-service-acc .short-service__img__el');

      if ($parents.hasClass('expanded')) {
        $parents.find('.short-service__acc__body').delay(250).slideUp(300);
        $parents.removeClass('expanded');
      } else {
        $parents
          .siblings('.short-service__acc__item')
          .removeClass('expanded')
          .find('.short-service__acc__body')
          .slideUp(300);

        $parents.find('.short-service__acc__body').slideDown(300);
        $parents.addClass('expanded');
      }

      $imgEl.removeClass('is-visible');

      $imgEl.one('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $imgEl.attr({
          src: $image,
          alt: $title
        });

        $imgEl
          .off('load')
          .on('load', function () {
            setTimeout(() => {
              $imgEl.addClass('is-visible');
            }, 10);
          })
          .each(function () {
            if (this.complete) $(this).trigger('load');
          });
      });
    });
  };

  // - expandFirstItem
  const expandFirstItem = () => {
    const $firstItem = $('.js-short-service-acc .short-service__acc__item').first();
    const $image = $firstItem.find('.short-service__acc__title').attr('data-image');
    const $title = $firstItem.find('.short-service__acc__title').attr('data-title');
    const $imgEl = $('.js-short-service-acc .short-service__img__el');

    $firstItem.addClass('expanded');
    $firstItem.find('.short-service__acc__body').show();

    $imgEl
      .attr({
        src: $image,
        alt: $title
      })
      .addClass('is-visible');
  };

  // - init
  const init = () => {
    if (!$('.js-short-service-acc').length) return;
    expandFirstItem();
    handleClickAccordion();
  };

  return {
    init
  };
})();

export default ShortService;
