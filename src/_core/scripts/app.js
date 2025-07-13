// --- utilities
import { Scrolllable, BrowserCheck } from '@utilities';

// --- components
import * as Components from '@components';

// --- templates
import { Default } from '@templates';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  };

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  };

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- global
      runTransition();
      showSiteContent();
      BrowserCheck.init();

      // --- components
      Object.values(Components).forEach((component) => {
        if (typeof component.init === 'function') {
          component.init();
        }
      });

      // --- templates
      Default.init();
    })(jQuery);
  };

  // --- load
  const load = () => {
    (($) => {
      $(window).on('load', () => {});
    })(jQuery);
  };

  // --- init
  const init = () => {
    load();
    ready();
  };

  // --- return
  return {
    init
  };
})();

// ---  run main js
App.init();
