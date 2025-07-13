/* ------------------------------------------------------------------------------
@name: About Popup
@description: About Popup
--------------------------------------------------------------------------------- */

const AboutPopup = (() => {
  const handleShowPopup = () => {
    $('.js-popup-management').on('click', (e) => {
      const $this = $(e.currentTarget);
      if ($('body').hasClass('show-popup-management')) {
        $('body').removeClass('show-popup-management');
      } else {
        $('body').addClass('show-popup-management');
      }
    });
  };

  // - init
  const init = () => {
    if (!$('.js-popup-management').length) return;
    handleShowPopup();
  };

  return {
    init
  };
})();

export default AboutPopup;
