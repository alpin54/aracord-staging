/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

import WindowScroll from '@utilities/WindowScroll';
import Scrolllable from '@utilities/Scrolllable';
import WindowResize from '@utilities/WindowResize';

const Header = (() => {
  let $headerHeight = $('.header').length ? $('.header').height() : 0;

  // - handleToggleMenu
  const handleToggleMenu = () => {
    // - toggle menu
    $('.js-toggle-menu').on('click', (e) => {
      if ($('body').hasClass('show--nav')) {
        $('body').removeClass('show--nav');
        Scrolllable.enable();
        handleDestroySubMenu();
      } else {
        $('body').addClass('show--nav');
        Scrolllable.disable();
      }
      e.stopPropagation();
    });

    // - esc
    $(document).on('keyup', (e) => {
      if (e.which === 27) {
        if ($('body').hasClass('show--nav')) {
          $('body').removeClass('show--nav');
          Scrolllable.enable();
          handleDestroySubMenu();
        }
      }
    });
  };

  // - handleDestroyToggleMenu
  const handleDestroyToggleMenu = () => {
    if ($(window).width() > 1200) {
      if ($('body').hasClass('show--nav')) {
        $('body').removeClass('show--nav');
        Scrolllable.enable();
      }
    }
  };

  // - handleHoverSubMenu
  const handleHoverSubMenu = () => {
    $('.header .header__nav__item--has-sub .header__nav__link').on('click', (e) => {
      e.preventDefault();
    });

    $('.header .header__nav__item--has-sub').on('mouseenter', (e) => {
      if ($(window).width() > 1200) {
        const $this = $(e.currentTarget);
        $this.addClass('expanded');
      }
    });

    $('.header .header__nav__item--has-sub').on('mouseleave', (e) => {
      if ($(window).width() > 1200) {
        const $this = $(e.currentTarget);
        $this.removeClass('expanded');
      }
    });

    $('.header .header__nav__item--has-sub').on('click', (e) => {
      if ($(window).width() < 1200) {
        const $this = $(e.currentTarget);
        $this.addClass('expanded');
      }
    });

    $('.header .header__nav__item--has-sub').on('click', (e) => {
      if ($(window).width() < 1200) {
        const $this = $(e.currentTarget);
        if ($this.hasClass('expanded header__nav__item--active')) {
          $this.removeClass('expanded header__nav__item--active');
          $this.find('.header__subnav').delay(250).slideUp(300);
        } else {
          $('.header__nav__item--has-sub').find('.header__subnav').slideUp(300);
          $('.header__nav__item--has-sub').removeClass('expanded header__nav__item--active');

          $this.find('.header__subnav').slideDown(300);
          $this.addClass('expanded header__nav__item--active');
        }
      }
    });
  };

  // - handleDestroySubMenu
  const handleDestroySubMenu = () => {
    if ($('.header .header__nav__item--has-sub').hasClass('expanded header__nav__item--active')) {
      $('.header__nav__item--has-sub')
        .removeClass('expanded header__nav__item--active')
        .find('.header__subnav')
        .removeAttr('style');
      $('.header .header__nav__item--has-sub').removeClass('expanded header__nav__item--active');
    }
  };

  // - handleScroll
  const handleScroll = () => {
    // --- Scrolled > $headerHeight
    if (WindowScroll.top() > $headerHeight / 4) {
      if (!$('body').hasClass('window--scrolled')) {
        $('body').addClass('window--scrolled');
      }
    } else {
      // --- Scrolled < $headerHeight
      $('body').removeClass('window--scrolled');
    }
  };

  // - init
  const init = () => {
    if (!$('.header').length) return;
    handleHoverSubMenu();
    handleToggleMenu();
    handleScroll();
    WindowScroll.run(handleScroll);
    WindowResize.resize(handleDestroyToggleMenu);
    WindowResize.resize(handleDestroySubMenu);
  };

  return {
    init
  };
})();

export default Header;
