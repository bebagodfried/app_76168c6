/**
 * 
 */
// Loader
(() => {
  let loader      = selectId('loader');
  let welcome     = selectId('welcome');
  let intro       = selectId('slider_1');
  let controls    = selectId('controls');
  let register    = selectId('register');

  document.body.onload = function () {
    if ($_('readyState') == "complete") {
      drop(['#loader span']);
      loader.classList.add('animate-fadeOut');

      setTimeout(() => {
        drop(['#loader']);
        if (register) {
          register.classList.remove('hidden');
        }

        setTimeout(() => {
          drop(['#welcome']);

          intro.classList.remove('hidden');

          setTimeout(() => {
            controls.classList.remove('hidden')
          }, 500);

        }, 2500);
      }, 1100);
    }
  }
})()

// 
let next_slider = selectId('next_slider');

i = 1; // Slider pos
next_slider.onclick = function () {
  let slide     = select("#controls li", true);
  let slider    = select(".content", true);
  let h_slider, v_slider;

  slide.forEach(el => {
    if (el.classList.contains('fg-green')) {
      el.classList.remove("fg-green");
    }
  });

  switch (i) {
    case 1:
      h_slider = select('#slider_1');
      v_slider = select('#slider_2');

      h_slider.classList.add('hidden');
      v_slider.classList.remove('hidden');

      slide = select('#slide_2');
      slide.classList.add('fg-green');
      break;

    case 2:
      h_slider = select('#slider_2');
      v_slider = select('#slider_3');

      h_slider.classList.add('hidden');
      v_slider.classList.remove('hidden');

      slide = select('#slide_3');
      slide.classList.add('fg-green');
      break;

    // case 3:
    //   slide = select('#slide_3');
    //   slide.classList.add('fg-green');
    //   break;

    default:
      location.href = "app.html";
      break;
  }

  i++;
}

// next_slider.onclick = function () {
//   let reg_new = selectId("reg_new");
//   location
// }