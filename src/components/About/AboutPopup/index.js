/* ------------------------------------------------------------------------------
@name: About Popup
@description: About Popup
--------------------------------------------------------------------------------- */

import Scrolllable from '@utilities/Scrolllable';

const AboutPopup = (() => {
  // - handleShowPopup
  const handleShowPopup = () => {
    $('.js-popup-management').on('click', (e) => {
      const $this = $(e.currentTarget);
      const $name = $this.attr('data-popup-name');
      const $position = $this.attr('data-popup-position');
      const $photo = $this.attr('data-popup-photo');
      const $content = $this.attr('data-popup-content');

      if ($('body').hasClass('show-popup-management')) {
        $('body').removeClass('show-popup-management');
        Scrolllable.enable();
      } else {
        $('body').addClass('show-popup-management');
        Scrolllable.disable();
      }

      $('.about-popup__name').text($name);
      $('.about-popup__position').text($position);
      $('.about-popup__img__el').attr({
        src: $photo,
        alt: $name
      });
      $('.about-popup__content').html($content);
    });
  };

  // - handleHidePopup
  const handleHidePopup = () => {
    $('.js-hide-popup-management').on('click', (e) => {
      if ($('body').hasClass('show-popup-management')) {
        $('body').removeClass('show-popup-management');
        Scrolllable.enable();
      }
    });

    // - esc
    $(document).on('keyup', (e) => {
      if (e.which === 27) {
        if ($('body').hasClass('show-popup-management')) {
          $('body').removeClass('show-popup-management');
          Scrolllable.enable();
        }
      }
    });
  };

  // - init
  const init = () => {
    if (!$('.js-popup-management').length) return;
    handleShowPopup();
    handleHidePopup();
  };

  return {
    init
  };
})();

export default AboutPopup;
