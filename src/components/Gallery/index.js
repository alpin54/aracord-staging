/* ------------------------------------------------------------------------------
@name: Gallery
@description: Gallery with Progress Indicator and Current Slide Number
--------------------------------------------------------------------------------- */

const Gallery = (() => {
  const $selector = $('.js-gallery');
  const $items = $('.js-gallery .gallery__item');
  const $itemLength = $items.length;

  // - addProgressMarkup
  const addProgressMarkup = () => {
    if ($('.js-gallery-progress').length === 0) {
      $selector.after(`
        <div class="gallery__progress">
          <div class="container">
            <div class="gallery__progress__inner">
              <span class="gallery__progress__current js-gallery-current">1</span>
              <div class="gallery__progress__wrap">
                <div class="gallery__progress__bar js-gallery-progress"></div>
              </div>
              <span class="gallery__progress__total js-gallery-total">${$itemLength}</span>
            </div>
          </div>
        </div>
      `);
    }
  };

  // - updateProgress
  const updateProgress = (currentIndex) => {
    $('.js-gallery-current').text(currentIndex + 1);
    const progressPercent = $itemLength > 1 ? (currentIndex / ($itemLength - 1)) * 100 : 100;
    $('.js-gallery-progress').css('width', progressPercent + '%');
  };

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
        items: 1,
        autoWidth: true,
        center: true,
        loop: true,
        rewind: false,
        touchDrag: true,
        nav: false,
        mouseDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 16,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        onInitialized: (e) => {
          addProgressMarkup();
          updateProgress(0);
        },
        onChanged: (event) => {
          let idx = event.item.index - event.relatedTarget._clones.length / 2;
          if (event.item.count > 1) {
            if (idx < 0) idx = event.item.count + idx;
            if (idx >= event.item.count) idx = idx - event.item.count;
          } else {
            idx = 0;
          }
          updateProgress(idx);
        }
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

export default Gallery;
