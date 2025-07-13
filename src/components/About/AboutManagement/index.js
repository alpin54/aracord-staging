/* ------------------------------------------------------------------------------
@name: About Management
@description: About Management
--------------------------------------------------------------------------------- */

const AboutManagement = (() => {
  const $selector = $('.js-about-management');
  const $itemLength = $('.js-about-management .about-card').length;

  // - handleRunCarousel
  const handleRunCarousel = () => {
    if ($selector.hasClass('owl-carousel')) {
      // destroy carousel
      $selector.owlCarousel('destroy');
    }

    // init carousel
    if ($itemLength > 1) {
      // --- init carousel
      $selector.addClass('owl-carousel').owlCarousel({
        autoWidth: true,
        items: 2,
        loop: false,
        rewind: false,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        nav: true,
        navText: ['<i class="fi fi-caret-left"></i>', '<i class="fi fi-caret-right"></i>'],
        dots: false,
        autoplay: false,
        smartSpeed: 1200,
        margin: 24
      });
    }
  };

  // - init
  const init = () => {
    if (!$selector.length) return;
    handleRunCarousel();
  };

  return {
    init
  };
})();

export default AboutManagement;
