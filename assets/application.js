/**
 * 
 */
// Loader
(() => {
  let loader = selectId('loader');
  document.body.onload = function () {
    if ($_('readyState') == "complete") {
      drop(['#loader span']);
      loader.classList.add('animate-fadeOut')
      setTimeout(() => {
        drop(['#loader']);
      }, 1100);
    }
  }
})()