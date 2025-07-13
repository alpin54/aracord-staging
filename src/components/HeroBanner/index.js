/* ------------------------------------------------------------------------------
@name: HeroBanner
@description: HeroBanner
--------------------------------------------------------------------------------- */

import WindowScroll from '@utilities/WindowScroll';

const HeroBanner = (() => {
  const $selector = $('.js-hero-banner');

  // - handleAnimateBanner
  const handleAnimateBanner = () => {
    $selector.addClass('hero-banner--single');
  };

  const handleScrollDown = () => {
    $('.js-scroll-down').on('click', () => {
      const duration = window.innerWidth <= 991.98 ? 600 : 750;
      $('html, body').animate(
        {
          scrollTop: $('.short-service').offset().top
        },
        duration
      );
    });
  };

  // - handleScroll
  const handleScroll = () => {
    // --- Scrolled > $headerHeight
    if ($('.hero-banner').length) {
      const divisor = window.innerWidth <= 991.98 ? 3 : 2;
      if (WindowScroll.top() > $('.hero-banner').outerHeight() / divisor) {
        $('body').addClass('hide-scroll-indicator');
      } else {
        $('body').removeClass('hide-scroll-indicator');
      }
    }
  };

  // - init
  const init = () => {
    if (!$selector.length) return;
    setTimeout(() => {
      handleAnimateBanner();
    }, 200);
    handleScrollDown();
    WindowScroll.run(handleScroll);
  };

  return {
    init
  };
})();

export default HeroBanner;
