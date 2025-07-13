/* ------------------------------------------------------------------------------
@name: ContentTransition
@description: ContentTransition
--------------------------------------------------------------------------------- */

import WindowScroll from '@utilities/WindowScroll';
import WindowResize from '@utilities/WindowResize';

const ContentTransition = (() => {
  const $scaleHeight = $(window).width() < 992 ? 1.05 : 0.95;

  // - handlePositionCheck
  const handlePositionCheck = () => {
    $('.content-transition').each((idx, el) => {
      var $elementTop = $(el).offset().top;
      var $viewportTop = WindowScroll.top();
      var $viewportBottom = $viewportTop + $scaleHeight * $(window).height();

      if ($elementTop <= $viewportBottom) {
        $(el).addClass('visible');
      } else {
        $(el).removeClass('visible');
      }
    });
  };

  // - handleScrollContentTransition
  const handleScrollContentTransition = () => {
    const contentList = [
      // -- home page
      '.hero-banner__inner'
    ];

    $.each(contentList, (idx, el) => {
      $(el).addClass('content-transition');
    });

    WindowScroll.run(handlePositionCheck);
  };

  // - handlePageTransition
  const handleLeavePage = () => {
    $('a').on('click', (e) => {
      const $this = $(e.currentTarget);
      const $href = $this.attr('href');
      const $target = $this.attr('target');

      if (!$this.parent('.header__nav__item').hasClass('header__nav__item--has-sub')) {
        if ($href && !$target) {
          $('body').addClass('page--leave');
          if ($('.header .header__nav__item--has-sub').hasClass('expanded')) {
            $('.header .header__nav__item--has-sub').removeClass('expanded');
          }
          const locationHrefTO = setTimeout(() => {
            window.location.href = $href;
            clearTimeout(locationHrefTO);
          }, 500);
          e.preventDefault();
        }
      }
    });
  };

  // - handleShowBackToTop
  const handleShowBackToTop = () => {
    if (!$('.js-main-site').height() > $(window).height() * 2) return;

    const $viewportTop = WindowScroll.top();
    const $elementStart = $(window).height() * 1.5;
    let $elementChangeColor = $('.footer').offset().top;
    const $viewportBottom = $viewportTop + $(window).height();

    if ($elementStart <= $viewportBottom) {
      $('body').addClass('show--btt');
    } else {
      $('body').removeClass('show--btt');
    }

    if ($elementChangeColor <= $viewportBottom) {
      $('body').addClass('change-color--btt');
    } else {
      $('body').removeClass('change-color--btt');
    }
  };

  // - handleBackToTop
  const handleBackToTop = () => {
    $('.js-back-to-top').on('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // - init
  const init = () => {
    if (!$('.main-site').length) return;
    handleScrollContentTransition();
    handleLeavePage();
    handleBackToTop();
    const HPCTO = setTimeout(() => {
      handlePositionCheck();
      clearTimeout(HPCTO);
    }, 50);
    WindowResize.resize(handlePositionCheck);
    WindowScroll.run(handleShowBackToTop);
  };

  return {
    init
  };
})();

export default ContentTransition;
