/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

import WindowResize from '@utilities/WindowResize';

const Footer = (() => {
  // - handleSet
  const handleSet = () => {
    if ($(window).width() >= 992) {
      const $footerHeight = $('.footer').outerHeight();
      $('.js-main-site').css('padding-bottom', $footerHeight);
    } else {
      $('.js-main-site').removeAttr('style');
    }
  };

  // - handleFooterAccordion
  const handleFooterAccordion = () => {
    $('.js-footer-acc .collapsed').on('click', (e) => {
      const $this = $(e.currentTarget);
      const $parents = $this.parents('.footer__nav__row');

      if ($(window).width() <= 992) {
        if ($parents.hasClass('expanded')) {
          $parents.find('.footer__nav__list').delay(250).slideUp(300);
          $parents.removeClass('expanded');
        } else {
          $parents
            .siblings('.footer__nav__row')
            .removeClass('expanded')
            .find('.footer__nav__list')
            .delay(200)
            .slideUp(300);

          $parents.find('.footer__nav__list').slideDown(300);
          $parents.addClass('expanded');
        }
      }
    });
  };

  // - handleDestroyAccordion
  const handleDestroyAccordion = () => {
    if ($(window).width() > 992) {
      $('.js-footer-acc .footer__nav__row').removeClass('expanded').find('.footer__nav__list').removeAttr('style');
    }
  };

  // - init
  const init = () => {
    handleSet();
    handleFooterAccordion();
    WindowResize.resize(handleSet);
    WindowResize.resize(handleDestroyAccordion);
  };

  return {
    init
  };
})();

export default Footer;
